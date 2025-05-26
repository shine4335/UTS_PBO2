"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MahasiswaList;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const api_1 = require("../../services/api");
function MahasiswaList() {
    const [data, setData] = (0, react_1.useState)([]);
    const [currentPage, setCurrentPage] = (0, react_1.useState)(1);
    const itemsPerPage = 5;
    const fetchData = () => {
        (0, api_1.getMahasiswa)()
            .then((res) => {
            if (Array.isArray(res.data)) {
                setData(res.data);
            }
            else {
                alert('Data yang diterima bukan array.');
                console.error('Data yang diterima bukan array:', res.data);
            }
        })
            .catch(() => alert('Gagal mengambil data mahasiswa'));
    };
    (0, react_1.useEffect)(() => {
        fetchData();
    }, []);
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const pageData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "w-full", children: [(0, jsx_runtime_1.jsx)("div", { className: "overflow-x-auto rounded-lg shadow border", children: (0, jsx_runtime_1.jsxs)("table", { className: "min-w-full text-sm text-left", children: [(0, jsx_runtime_1.jsx)("thead", { className: "bg-gray-100 text-gray-700 uppercase", children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { className: "px-4 py-3 border", children: "NIM" }), (0, jsx_runtime_1.jsx)("th", { className: "px-4 py-3 border", children: "Nama" }), (0, jsx_runtime_1.jsx)("th", { className: "px-4 py-3 border", children: "Program Studi" }), (0, jsx_runtime_1.jsx)("th", { className: "px-4 py-3 border", children: "Angkatan" }), (0, jsx_runtime_1.jsx)("th", { className: "px-4 py-3 border", children: "Email" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { className: "text-gray-800", children: [pageData.map((mhs) => ((0, jsx_runtime_1.jsxs)("tr", { className: "hover:bg-gray-50", children: [(0, jsx_runtime_1.jsx)("td", { className: "px-4 py-2 border", children: mhs.nim }), (0, jsx_runtime_1.jsx)("td", { className: "px-4 py-2 border", children: mhs.nama }), (0, jsx_runtime_1.jsx)("td", { className: "px-4 py-2 border", children: mhs.prodi }), (0, jsx_runtime_1.jsx)("td", { className: "px-4 py-2 border text-center", children: mhs.angkatan }), (0, jsx_runtime_1.jsx)("td", { className: "px-4 py-2 border", children: mhs.email })] }, mhs.nim))), pageData.length === 0 && ((0, jsx_runtime_1.jsx)("tr", { children: (0, jsx_runtime_1.jsx)("td", { colSpan: 5, className: "text-center py-4 text-gray-500", children: "Tidak ada data mahasiswa." }) }))] })] }) }), (0, jsx_runtime_1.jsx)("div", { className: "flex justify-end items-center gap-2 mt-4", children: Array.from({ length: totalPages }).map((_, i) => ((0, jsx_runtime_1.jsx)("button", { onClick: () => setCurrentPage(i + 1), className: `w-8 h-8 rounded ${currentPage === i + 1
                        ? 'bg-indigo-600 text-white'
                        : 'bg-white text-gray-800 border'}`, children: i + 1 }, i))) })] }));
}
//# sourceMappingURL=MahasiswaList.js.map