import { Router } from "express";
import fs from "fs";
import logger from "../../../../../config/pino";
import config from "../../../../../config/convict";
import axios from "axios";
import { getProxyAgent } from "../../../../../helpers/proxy";

const ProxyRoutes = Router({mergeParams: true});

export const ProxyGameVersionsURL: any = {
    "riqueza-slots": "https://riquezaslotsh.com",
    "dv-slots": "https://dvslots5.com/",
    "brazil-game": "https://brazilgame.org/"
}

ProxyRoutes.all('{/:agent}', async (req, res) => {
    const gameAsset = req.query["game-asset"];
    const version = (req.params as any).version;
    let target: any = req.query.url;

    if(gameAsset){
        const folder = gameAsset;
        const versionsPath = `./public/versions/${version}/${folder}`;
        const cachePath = `./public/cache/versions/${version}/${folder}`;
        
        // 1. Check if exists in versions folder
        try{
            const file = fs.readFileSync(versionsPath);
            if(file){
                logger.success(`Sending game asset from versions: ${folder}`)
                
                if(String(gameAsset).endsWith('.js')) {
                    res.setHeader('Content-Type', 'text/javascript');
                }

                return res.send(file);
            }
        }catch{}
        
        // 2. Check if exists in cache folder
        try{
            const file = fs.readFileSync(cachePath);
            if(file){
                logger.success(`Sending game asset from cache: ${folder}`)
                
                if(String(gameAsset).endsWith('.js')) {
                    res.setHeader('Content-Type', 'text/javascript');
                }

                return res.send(file);
            }
        }catch{}
        
        // 3. Download to cache if not found
        logger.info(`Game asset not found locally, downloading: ${folder}`)
        target = `${ProxyGameVersionsURL[version]}${gameAsset}`
        
        try {
            const response = await axios({
                url: target,
                method: 'GET',
                responseType: 'arraybuffer',
                timeout: 20000,
            });
            
            // Create cache directory if it doesn't exist
            const cacheDir = cachePath.substring(0, cachePath.lastIndexOf('/'));
            fs.mkdirSync(cacheDir, { recursive: true });
            
            // Save to cache
            fs.writeFileSync(cachePath, response.data);
            logger.success(`Game asset downloaded to cache: ${folder}`)
            
            // Send the file
            if(String(gameAsset).endsWith('.js')) {
                res.setHeader('Content-Type', 'text/javascript');
            }
            
            return res.send(response.data);
        } catch(err: any) {
            logger.error(`Failed to download game asset: ${folder} - ${err.message}`)
            // Continue to normal proxy flow
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
