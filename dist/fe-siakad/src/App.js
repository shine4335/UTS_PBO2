"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const MainLayout_1 = require("./layout/MainLayout");
const Dashboard_1 = require("./pages/Dashboard");
const index_1 = require("./pages/Mahasiswa/index");
const MahasiswaList_1 = require("./pages/Mahasiswa/MahasiswaList");
const MahasiswaForm_1 = require("./pages/Mahasiswa/MahasiswaForm");
const matakuliah_1 = require("./pages/matakuliah");
const matakuliahList_1 = require("./pages/matakuliah/matakuliahList");
const matakuliahForm_1 = require("./pages/matakuliah/matakuliahForm");
const MataKuliahEdit_1 = require("./pages/matakuliah/MataKuliahEdit");
function App() {
    return ((0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsx)(MainLayout_1.default, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(react_router_dom_1.Navigate, { to: "/dashboard", replace: true }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/dashboard", element: (0, jsx_runtime_1.jsx)(Dashboard_1.default, {}) }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Route, { path: "/mahasiswa", element: (0, jsx_runtime_1.jsx)(index_1.default, {}), children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { index: true, element: (0, jsx_runtime_1.jsx)(MahasiswaList_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "new", element: (0, jsx_runtime_1.jsx)(MahasiswaForm_1.default, {}) })] }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Route, { path: "/matakuliah", element: (0, jsx_runtime_1.jsx)(matakuliah_1.default, {}), children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { index: true, element: (0, jsx_runtime_1.jsx)(matakuliahList_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "new", element: (0, jsx_runtime_1.jsx)(matakuliahForm_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "edit/:kode", element: (0, jsx_runtime_1.jsx)(MataKuliahEdit_1.default, {}) })] })] }) }) }));
}
exports.default = App;
//# sourceMappingURL=App.js.map