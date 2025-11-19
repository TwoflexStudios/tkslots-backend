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
    const headers = { ...req.headers };
    delete headers.host;
    delete headers.connection;
    delete headers['content-length'];
    
    if(gameAsset){
        const folder = gameAsset;
        //check if exist in public folder
        try{
            const file = fs.readFileSync(`./public/game/${folder}`);
            if(file){
                // logger.success(`Sending game asset: ${folder}`)
                return res.send(file);
            }
        }catch{
            // logger.info(`Game asset not found: ${folder}`)
            target = `${config.get("targetUrl")}${gameAsset}`
        }

        //check if exist in cache folder
        try{
            const file = fs.readFileSync(`./public/cache/${folder}`);
            if(file){
                // logger.success(`Sending game asset: ${folder}`)
                return res.send(file);
            }
        }catch{
            // logger.info(`Game asset not found: ${folder}`)
            target = `${config.get("targetUrl")}${gameAsset}`
        }

        //baixar o arquivo
        try{
            const response = await axios({
                url: target,
                method: req.method,
                headers,
                data: req.body,
                timeout: 20000,
                responseType: 'stream',
                validateStatus: () => true
            });
            const gameAssetPath = String(gameAsset).split("/").pop();
             // logger.warn(`Downloading file to cache folder: ${gameAssetPath}`)
            
            // Extract directory path from gameAsset (remove filename)
            // Only create directory if gameAsset contains a path (has /)
            if(String(gameAsset).includes("/")){
                const gameAssetDir = String(gameAsset).split("/").slice(0, -1).join("/");
                const fullCacheDir = `./public/cache/${gameAssetDir}`;
                
                // Create full directory structure if not exist
                if(!fs.existsSync(fullCacheDir)){
                    fs.mkdirSync(fullCacheDir, { recursive: true });
                }
            }
            
            // Check if target path exists and is a directory (from previous errors)
            const targetPath = `./public/cache/${gameAsset}`;
            if(fs.existsSync(targetPath)){
                const stats = fs.statSync(targetPath);
                if(stats.isDirectory()){
                    // Remove the incorrectly created directory
                    fs.rmSync(targetPath, { recursive: true, force: true });
                     // logger.warn(`Removed incorrect directory: ${targetPath}`);
                }
            }
            
            //salvar o arquivo
            const file = fs.createWriteStream(targetPath);
            response.data.pipe(file);
            file.on('finish', () => {
                file.close();
                // logger.success(`Downloaded game asset: ${gameAsset}`)
            });
        }catch(ex: any){
            // logger.info(`Failed to download game asset: ${gameAsset} ${ex?.message}`)
            target = `${config.get("targetUrl")}${gameAsset}`
        }
    }

    const { agent } = req.params;
    if (!target) {
        return res.status(400).send('Parâmetro "url" é obrigatório. Ex: /?url=https://example.com/path');
    }

    try {
        // Copia headers do cliente, removendo headers que não devem ser encaminhados
     

        const response = await axios({
            url: target,
            method: req.method,
            headers,
            data: req.body, 
            timeout: 20000,
            responseType: 'stream',
            ...(agent && { httpAgent: getProxyAgent(agent) }),
            ...(agent && { httpsAgent: getProxyAgent(agent) }),
            validateStatus: () => true
        });


        // console.log(response)

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