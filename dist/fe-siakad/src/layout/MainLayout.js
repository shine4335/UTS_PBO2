"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MainLayout;
const jsx_runtime_1 = require("react/jsx-runtime");
const Sidebar_1 = require("./Sidebar");
const Header_1 = require("./Header");
const Footer_1 = require("./Footer");
function MainLayout({ children }) {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex", children: [(0, jsx_runtime_1.jsx)(Sidebar_1.default, {}), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col flex-1 min-h-screen bg-gray-100", children: [(0, jsx_runtime_1.jsx)(Header_1.default, {}), (0, jsx_runtime_1.jsx)("main", { className: "flex-1 p-6", children: children }), (0, jsx_runtime_1.jsx)(Footer_1.default, {})] })] }));
}
//# sourceMappingURL=MainLayout.js.map