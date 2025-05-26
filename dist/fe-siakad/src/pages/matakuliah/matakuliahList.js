"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const api_1 = require("../../services/api");
const MataKuliahList = () => {
    const [mataKuliah, setMataKuliah] = (0, react_1.useState)([]);
    const [currentPage, setCurrentPage] = (0, react_1.useState)(1);
    const itemsPerPage = 5;
    (0, react_1.useEffect)(() => {
        const fetchMataKuliah = async () => {
            try {
                const response = await api_1.api.get('/matakuliah');
                if (Array.isArray(response.data)) {
                    setMataKuliah(response.data);
                }
                else {
                    alert('Data yang diterima bukan array.');
                }
            }
            catch (error) {
                console.error('Error fetching mata kuliah:', error);
            }
        };
        fetchMataKuliah();
    }, []);
    const totalPages = Math.ceil(mataKuliah.length / itemsPerPage);
    const pageData = mataKuliah.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    const handleDelete = async (kode) => {
        if (window.confirm('Apakah Anda yakin ingin menghapus mata kuliah ini?')) {
            try {
                await api_1.api.delete(`/matakuliah/${kode}`);
                setMataKuliah(mataKuliah.filter(mk => mk.kode !== kode));
            }
            catch (error) {
                console.error('Error deleting mata kuliah:', error);
            }
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "p-4", children: [(0, jsx_runtime_1.jsx)("div", { className: "overflow-x-auto rounded-lg shadow border", children: (0, jsx_runtime_1.jsxs)("table", { className: "min-w-full text-sm text-left", children: [(0, jsx_runtime_1.jsx)("thead", { className: "bg-gray-100 text-gray-700 uppercase", children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { className: "px-4 py-3 border", children: "Kode" }), (0, jsx_runtime_1.jsx)("th", { className: "px-4 py-3 border", children: "Nama" }), (0, jsx_runtime_1.jsx)("th", { className: "px-4 py-3 border", children: "SKS" }), (0, jsx_runtime_1.jsx)("th", { className: "px-4 py-3 border", children: "Semester" }), (0, jsx_runtime_1.jsx)("th", { className: "px-4 py-3 border", children: "Jurusan" }), (0, jsx_runtime_1.jsx)("th", { className: "px-4 py-3 border", children: "Aksi" })] }) }), (0, jsx_runtime_1.jsx)("tbody", { className: "text-gray-800", children: pageData.length > 0 ? (pageData.map((mk) => ((0, jsx_runtime_1.jsxs)("tr", { className: "hover:bg-gray-50", children: [(0, jsx_runtime_1.jsx)("td", { className: "px-4 py-2 border", children: mk.kode }), (0, jsx_runtime_1.jsx)("td", { className: "px-4 py-2 border", children: mk.nama }), (0, jsx_runtime_1.jsx)("td", { className: "px-4 py-2 border", children: mk.sks }), (0, jsx_runtime_1.jsx)("td", { className: "px-4 py-2 border", children: mk.semester }), (0, jsx_runtime_1.jsx)("td", { className: "px-4 py-2 border", children: mk.jurusan }), (0, jsx_runtime_1.jsxs)("td", { className: "px-4 py-2 border space-x-2", children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: `/matakuliah/edit/${mk.kode}`, className: "bg-yellow-400 text-black px-2 py-1 rounded hover:bg-yellow-500", children: "Edit" }), (0, jsx_runtime_1.jsx)("button", { onClick: () => handleDelete(mk.kode), className: "bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700", children: "Delete" })] })] }, mk.kode)))) : ((0, jsx_runtime_1.jsx)("tr", { children: (0, jsx_runtime_1.jsx)("td", { colSpan: 6, className: "text-center py-4 text-gray-500", children: "Tidak ada data mata kuliah." }) })) })] }) }), (0, jsx_runtime_1.jsx)("div", { className: "flex justify-end items-center gap-2 mt-4", children: Array.from({ length: totalPages }).map((_, i) => ((0, jsx_runtime_1.jsx)("button", { onClick: () => setCurrentPage(i + 1), className: `w-8 h-8 rounded ${currentPage === i + 1
                        ? 'bg-indigo-600 text-white'
                        : 'bg-white text-gray-800 border'}`, children: i + 1 }, i))) })] }));
};
exports.default = MataKuliahList;
//# sourceMappingURL=matakuliahList.js.map