"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Sidebar;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const lucide_react_1 = require("lucide-react");
const perkuliahan = [
    { label: "Dashboard", icon: lucide_react_1.Home, path: "/dashboard" },
    { label: "Jadwal", icon: lucide_react_1.List, path: "/jadwal" },
    { label: "Kehadiran", icon: lucide_react_1.Folder, path: "/kehadiran" },
    { label: "Nilai", icon: lucide_react_1.Users, path: "/nilai" },
    { label: "Daftar Kelas Online", icon: lucide_react_1.BarChart, path: "/kelas-online" },
];
const lainnya = [
    { label: "Persiapan Kuliah", icon: lucide_react_1.HelpCircle, path: "/persiapan" },
    { label: "Monitoring TA", icon: lucide_react_1.MapPin, path: "/monitoring" },
    { label: "Pengaturan Akun", icon: lucide_react_1.Settings, path: "/pengaturan" },
];
const dataMaster = [
    { label: "Mahasiswa", icon: lucide_react_1.BookUser, path: "/mahasiswa" },
    { label: "Matakuliah", icon: lucide_react_1.BookUser, path: "/matakuliah" },
];
function renderMenu(menu) {
    return menu.map(({ label, icon: Icon, path }) => ((0, jsx_runtime_1.jsxs)(react_router_dom_1.NavLink, { to: path, className: ({ isActive }) => `flex items-center gap-2 px-4 py-2 rounded transition-all ${isActive
            ? 'bg-indigo-600 text-white font-semibold shadow-md'
            : 'hover:bg-indigo-700 hover:text-white text-indigo-100'}`, children: [(0, jsx_runtime_1.jsx)(Icon, { size: 18 }), label] }, label)));
}
function Sidebar() {
    return ((0, jsx_runtime_1.jsxs)("aside", { className: "w-64 bg-indigo-900 text-white h-screen flex flex-col justify-between p-4", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-2xl font-bold mb-6", children: "SYTAMA" }), (0, jsx_runtime_1.jsxs)("div", { className: "space-y-6", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { className: "text-sm uppercase text-indigo-300 mb-2", children: "Perkuliahan" }), (0, jsx_runtime_1.jsx)("nav", { className: "space-y-2", children: renderMenu(perkuliahan) })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { className: "text-sm uppercase text-indigo-300 mb-2", children: "Lainnya" }), (0, jsx_runtime_1.jsx)("nav", { className: "space-y-2", children: renderMenu(lainnya) })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { className: "text-sm uppercase text-indigo-300 mb-2", children: "Data Master" }), (0, jsx_runtime_1.jsx)("nav", { className: "space-y-2", children: renderMenu(dataMaster) })] })] })] }), (0, jsx_runtime_1.jsx)("button", { className: "bg-red-600 w-full py-2 mt-8 rounded hover:bg-red-700 transition", children: "Logout" })] }));
}
//# sourceMappingURL=Sidebar.js.map