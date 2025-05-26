"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MahasiswaLayout;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
function MahasiswaLayout() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-6", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between items-center", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-2xl font-bold text-gray-800", children: "Manajemen Mahasiswa" }), (0, jsx_runtime_1.jsx)("button", { onClick: () => navigate('/mahasiswa/new'), className: "bg-indigo-600 text-white px-4 py-2 rounded shadow hover:bg-indigo-700 transition", children: "Mahasiswa Baru" })] }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {})] }));
}
//# sourceMappingURL=index.js.map