const PROXY_CONFIG = {
    "/api": {
        "target": "http://localhost:3000",
        "secure": false,
        "logLevel": "debug"
    }
}
module.exports = PROXY_CONFIG;