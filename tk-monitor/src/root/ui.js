"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UI = void 0;
class UI {
    constructor() {
        this.uiVersion = "1.0";
        this.pkgName = '@bull-monitor/ui';
        this.cdnRoot = `https://cdn.jsdelivr.net/npm/@bull-monitor/ui@5.4.0`;
        this.resourcesRoot = this.cdnRoot + '/build';
    }
    buildCdnUrl(resource) {
        return this.resourcesRoot + resource;
    }
    render() {
        return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8" />
      <title>Bull monitor</title>
      <meta name="viewport" content="user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, minimal-ui">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link rel="stylesheet" href="${this.buildCdnUrl('/style.css')}"/>
      <script type="module" src="${this.buildCdnUrl('/main.js')}"></script>
    </head>
    <body>
      <div id="root"></div>
      <noscript>You need to enable JavaScript to run this app.</noscript>
    </body>
    </html>
    `;
    }
}
exports.UI = UI;
//# sourceMappingURL=ui.js.map