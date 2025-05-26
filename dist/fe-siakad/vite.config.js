"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vite_1 = require("vite");
const plugin_react_swc_1 = require("@vitejs/plugin-react-swc");
const path_1 = require("path");
exports.default = (0, vite_1.defineConfig)({
    plugins: [(0, plugin_react_swc_1.default)()],
    resolve: {
        alias: {
            '@': path_1.default.resolve(__dirname, 'src'),
        },
    },
});
//# sourceMappingURL=vite.config.js.map