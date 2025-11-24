import { Router } from "express";
import fs from "fs";
import logger from "../../../../../config/pino";
import config from "../../../../../config/convict";
import axios from "axios";
import { getProxyAgent } from "../../../../../helpers/proxy";

const ProxyRoutes = Router();

ProxyRoutes.all('{/:agent}', async (req, res) => {
    const gameAsset = req.query["game-asset"];
    let target: any = req.query.url;

    if(gameAsset){
        const folder = gameAsset;
        //check if exist in public folder
        try{
            const file = fs.readFileSync(`./public/game/${folder}`);
            if(file){
                logger.success(`Sending game asset: ${folder}`)
                
                // Corrige MIME type para JS
                if(String(gameAsset).endsWith('.js')) {
                    res.setHeader('Content-Type', 'text/javascript');
                }

                return res.send(file);
            }
        }catch{
            logger.info(`Game asset not found: ${folder}`)
            target = `${config.get("targetUrl")}${gameAsset}`
        }
    }

    const { agent } = req.params;
    if (!target) {
        return res.status(400).send('Parâmetro "url" é obrigatório. Ex: /?url=https://example.com/path');
    }

    try {
        // Copia headers do cliente, removendo headers que não devem ser encaminhados
        const headers = { ...req.headers };
        delete headers.host;
        delete headers.connection;
        delete headers['content-length'];

        const tempProxyAgent = crypto.randomUUID();

        const response = await axios({
            url: target,
            method: req.method,
            headers,
            data: req.body, 
            timeout: 20000,
            responseType: 'stream',
            ...(agent && { httpAgent: getProxyAgent(tempProxyAgent) }),
            ...(agent && { httpsAgent: getProxyAgent(tempProxyAgent) }),
            validateStatus: () => true
        });

        // Corrige MIME type para JS antes de enviar
        if(String(gameAsset)?.endsWith('.js')) {
            response.headers['content-type'] = 'text/javascript';
        }

        // Encaminha os headers da resposta
        res.writeHead(response.status, response.headers as any);

        // Faz pipe da resposta para o cliente
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
