import { Router } from "express";
import fs from "fs";
import path from "path";
import axios from "axios";
import config from "../../../../../config/convict";
import { getProxyAgent } from "../../../../../helpers/proxy";

const ProxyRoutes = Router();

const MIME_TYPES: Record<string, string> = {
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.html': 'text/html',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
};

ProxyRoutes.all('{/:agent}', async (req, res) => {
    const gameAsset = req.query["game-asset"] as string;
    let target: string | undefined = req.query.url as string;

    // Copia headers do cliente, removendo os que não devem ser encaminhados
    const headers = { ...req.headers };
    delete headers.host;
    delete headers.connection;
    delete headers['content-length'];

    if (gameAsset) {
        const cachePath = path.join('./public/cache', gameAsset);

        // Verifica se existe no cache
        if (fs.existsSync(cachePath) && fs.statSync(cachePath).isFile()) {
            const ext = path.extname(cachePath);
            const mimeType = MIME_TYPES[ext] || 'application/octet-stream';
            res.setHeader('Content-Type', mimeType);
            return res.sendFile(path.resolve(cachePath));
        }

        // Define target remoto se não existir no cache
        target = `${config.get("targetUrl")}${gameAsset}`;

        try {
            // Faz download do arquivo
            const response = await axios({
                url: target,
                method: req.method,
                headers,
                data: req.body,
                timeout: 20000,
                responseType: 'stream',
                validateStatus: () => true,
            });

            // Cria diretórios necessários
            const dir = path.dirname(cachePath);
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }

            // Salva arquivo no cache
            const writer = fs.createWriteStream(cachePath);
            response.data.pipe(writer);

            writer.on('finish', () => {
                // Nada a fazer aqui, arquivo salvo no cache
            });
            writer.on('error', () => {
                // Ignora erro no cache, continuará proxy normal
            });

        } catch (err) {
            // Se download falhar, continua com proxy direto
        }
    }

    if (!target) {
        return res.status(400).send('Parâmetro "url" é obrigatório. Ex: /?url=https://example.com/path');
    }

    try {
        const { agent } = req.params;

        const response = await axios({
            url: target,
            method: req.method,
            headers,
            data: req.body,
            timeout: 20000,
            responseType: 'stream',
            ...(agent && { httpAgent: getProxyAgent(agent) }),
            ...(agent && { httpsAgent: getProxyAgent(agent) }),
            validateStatus: () => true,
        });

        // Filtra headers problemáticos
        const headersToSend: Record<string, string> = {};
        Object.entries(response.headers).forEach(([key, value]) => {
            const forbidden = ['content-encoding', 'transfer-encoding', 'connection'];
            if (!forbidden.includes(key.toLowerCase()) && value) {
                headersToSend[key] = value as string;
            }
        });

        // Corrige MIME type para JS e outros
        const ext = path.extname(gameAsset || '');
        if (MIME_TYPES[ext]) {
            headersToSend['Content-Type'] = MIME_TYPES[ext];
        }

        res.writeHead(response.status, headersToSend);
        response.data.pipe(res);

    } catch (err: any) {
        if (err.code === 'ECONNABORTED') {
            return res.status(504).send('Timeout ao conectar com o servidor de destino.');
        }
        if (!res.headersSent) {
            return res.status(502).send('Erro no proxy: ' + err.message);
        }
    }
});

export default ProxyRoutes;
