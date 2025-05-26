"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MataKuliahEdit;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const axios_1 = require("axios");
function MataKuliahEdit() {
    const { id } = (0, react_router_dom_1.useParams)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [form, setForm] = (0, react_1.useState)({
        kode: "",
        nama: "",
        sks: "",
        semester: "",
        jurusan: "",
    });
    (0, react_1.useEffect)(() => {
        axios_1.default.get(`http://localhost:3000/matakuliah/${id}`)
            .then((res) => setForm(res.data))
            .catch((err) => console.error("Gagal mengambil data:", err));
    }, [id]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        axios_1.default.put(`http://localhost:3000/matakuliah/${id}`, form)
            .then(() => navigate("/matakuliah"))
            .catch((err) => console.error("Gagal menyimpan perubahan:", err));
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "p-6", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-2xl font-bold mb-6", children: "Manajemen Mata Kuliah" }), (0, jsx_runtime_1.jsxs)("div", { className: "bg-white p-6 rounded shadow max-w-4xl mx-auto", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-xl font-bold mb-4", children: "Edit Mata Kuliah" }), (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { className: "block font-semibold mb-1", children: "Kode" }), (0, jsx_runtime_1.jsx)("input", { name: "kode", value: form.kode, onChange: handleChange, required: true, className: "w-full border px-3 py-2 rounded" })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { className: "block font-semibold mb-1", children: "Nama" }), (0, jsx_runtime_1.jsx)("input", { name: "nama", value: form.nama, onChange: handleChange, required: true, className: "w-full border px-3 py-2 rounded" })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { className: "block font-semibold mb-1", children: "SKS" }), (0, jsx_runtime_1.jsx)("input", { name: "sks", type: "number", value: form.sks, onChange: handleChange, required: true, className: "w-full border px-3 py-2 rounded" })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { className: "block font-semibold mb-1", children: "Semester" }), (0, jsx_runtime_1.jsx)("input", { name: "semester", value: form.semester, onChange: handleChange, required: true, className: "w-full border px-3 py-2 rounded" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "md:col-span-2", children: [(0, jsx_runtime_1.jsx)("label", { className: "block font-semibold mb-1", children: "Jurusan" }), (0, jsx_runtime_1.jsx)("input", { name: "jurusan", value: form.jurusan, onChange: handleChange, required: true, className: "w-full border px-3 py-2 rounded" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "md:col-span-2 flex justify-between mt-4", children: [(0, jsx_runtime_1.jsx)("button", { type: "submit", className: "bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700", children: "Simpan Perubahan" }), (0, jsx_runtime_1.jsx)("button", { type: "button", onClick: () => navigate('/matakuliah'), className: "text-gray-600 hover:underline", children: "Batal / Kembali" })] })] })] })] }));
}
//# sourceMappingURL=MataKuliahEdit.js.map