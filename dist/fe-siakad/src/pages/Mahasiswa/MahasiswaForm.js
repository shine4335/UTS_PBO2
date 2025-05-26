"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MahasiswaForm;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const api_1 = require("../../services/api");
const initialForm = {
    nim: '',
    nama: '',
    prodi: '',
    angkatan: new Date().getFullYear(),
    email: '',
};
function MahasiswaForm() {
    const [form, setForm] = (0, react_1.useState)(initialForm);
    const [loading, setLoading] = (0, react_1.useState)(false);
    const navigate = (0, react_router_dom_1.useNavigate)();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: name === 'angkatan' ? parseInt(value) : value,
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await (0, api_1.createMahasiswa)(form);
            navigate('/mahasiswa', { state: { refresh: true } });
        }
        catch (err) {
            alert('Gagal menyimpan data mahasiswa');
            console.log(err);
        }
        finally {
            setLoading(false);
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "w-full max-w-4xl mx-auto bg-white p-8 rounded shadow mt-6", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-2xl font-bold mb-6 text-gray-800", children: "Tambah Mahasiswa" }), (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { className: "block text-sm font-medium mb-1", children: "NIM" }), (0, jsx_runtime_1.jsx)("input", { name: "nim", type: "text", value: form.nim, onChange: handleChange, required: true, className: "w-full px-3 py-2 border rounded" })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { className: "block text-sm font-medium mb-1", children: "Nama" }), (0, jsx_runtime_1.jsx)("input", { name: "nama", type: "text", value: form.nama, onChange: handleChange, required: true, className: "w-full px-3 py-2 border rounded" })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { className: "block text-sm font-medium mb-1", children: "Program Studi" }), (0, jsx_runtime_1.jsx)("input", { name: "prodi", type: "text", value: form.prodi, onChange: handleChange, required: true, className: "w-full px-3 py-2 border rounded" })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { className: "block text-sm font-medium mb-1", children: "Angkatan" }), (0, jsx_runtime_1.jsx)("input", { name: "angkatan", type: "number", value: form.angkatan, onChange: handleChange, required: true, className: "w-full px-3 py-2 border rounded" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "md:col-span-2", children: [(0, jsx_runtime_1.jsx)("label", { className: "block text-sm font-medium mb-1", children: "Email" }), (0, jsx_runtime_1.jsx)("input", { name: "email", type: "email", value: form.email, onChange: handleChange, required: true, className: "w-full px-3 py-2 border rounded" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "md:col-span-2 flex justify-between mt-4", children: [(0, jsx_runtime_1.jsx)("button", { type: "submit", className: "bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700", disabled: loading, children: loading ? 'Menyimpan...' : 'Simpan' }), (0, jsx_runtime_1.jsx)("button", { type: "button", onClick: () => navigate('/mahasiswa'), className: "text-sm text-gray-500 hover:underline", children: "Batal / Kembali" })] })] })] }));
}
//# sourceMappingURL=MahasiswaForm.js.map