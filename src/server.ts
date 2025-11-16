import "dotenv/config"
import App from "./shared/infra/http/app"
import config from "./config/convict";
import './config/connection';

const app = new App();

app.listen(config.get("port"))