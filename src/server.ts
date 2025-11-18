import "dotenv/config"
import App from "./shared/infra/http/app"
import config from "./config/convict";
import './config/connection';
import "./bull/workers"
import DevelopFunction from "./teste";

const app = new App();

// DevelopFunction();

app.listen(config.get("port"))