"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MataKuliahLayout;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
function MataKuliahLayout() {
    const location = (0, react_router_dom_1.useLocation)();
    const showTambahButton = location.pathname === "/matakuliah";
    return ((0, jsx_runtime_1.jsxs)("div", { className: "p-6 bg-gray-100", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex justify-between items-center mb-6", children: showTambahButton && ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/matakuliah/tambah", className: "bg-indigo-600 text-white px-4 py-2 rounded shadow hover:bg-indigo-700", children: "Tambah Mata Kuliah" })) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {})] }));
}
//# sourceMappingURL=index.js.map