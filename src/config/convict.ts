import convict from "convict";

const config = convict({
    port: {
        default: 4000,
        doc: "The application port",
        format: "port",
        env: "PORT"
    },
    mongo: {
        default: "",
        doc: "",
        env: "MONGODB_CONNECTION"
    },
    jwt: {
        default: "",
        doc: "",
        env: "JWT"
    },
    proxy: {
        host: {
            default: "",
            doc: "",
            env: "PROXY_HOST"
        },
        port: {
            default: "",
            doc: "",
            env: "PROXY_PORT"
        },
        username: {
            default: "",
            doc: "",
            env: "PROXY_USER"
        },
        password: {
            default: "",
            doc: "",
            env: "PROXY_PASSWORD"
        }
    },
    bower: {
        apiKey: {
            default: "",
            doc: "",
            env: "BOWER_API_KEY"
        }
    },
    activate: {
        apiKey: {
            default: "",
            doc: "",
            env: "ACTIVATE_API_KEY"
        }
    },
    redis: {
        url: {
            default: "",
            doc: "",
            env: "REDIS_URL"
        }
    },
    thisUrl: {
        default: "",
        doc: "",
        env: "THIS_URL"
    },
    targetUrl: {
        default: "",
        doc: "",
        env: "TARGET_URL"
    }
})

export default config;