import "dotenv/config"
import App from "./shared/infra/http/app"
import config from "./config/convict";
import './config/connection';
import "./bull/workers"
import http from 'http';
import { Server } from 'socket.io';

const app = App.getInstance();

const server = http.createServer(app.app);

const io = new Server(server, {
  cors: { origin: "*" }
});

app.initSocket(io);

server.listen(config.get("port"), () => {
  console.log(`App Running at port ${config.get("port")}`);
});