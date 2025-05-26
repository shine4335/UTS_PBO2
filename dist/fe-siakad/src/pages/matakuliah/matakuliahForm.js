"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const api_1 = require("../../services/api");
const initialForm = {
    kode: '',
    nama: '',
    sks: '',
    semester: '',
    jurusan: '',
};
const MataKuliahForm = () => {
    const [form, setForm] = (0, react_1.useState)(initialForm);
    const [loading, setLoading] = (0, react_1.useState)(false);
    const navigate = (0, react_router_dom_1.useNavigate)();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: name === 'sks' ? (value === '' ? '' : Number(value)) : value,
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await api_1.api.post('/matakuliah', form);
            navigate('/matakuliah');
        }
        catch (error) {
            alert('Gagal menyimpan data mata kuliah');
            console.error(error);
        }
        finally {
            setLoading(false);
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "w-full max-w-4xl mx-auto bg-white p-8 rounded shadow mt-6 text-gray-800", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-2xl font-bold mb-6", children: "Tambah Mata Kuliah" }), (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [['kode', 'nama', 'semester', 'jurusan'].map((field) => ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { className: "block text-sm font-medium mb-1 capitalize", children: field }), (0, jsx_runtime_1.jsx)("input", { name: field, type: "text", value: form[field], onChange: handleChange, required: true, className: "w-full px-3 py-2 border border-gray-300 rounded" })] }, field))), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { className: "block text-sm font-medium mb-1", children: "SKS" }), (0, jsx_runtime_1.jsx)("input", { name: "sks", type: "number", min: "0", value: form.sks, onChange: handleChange, required: true, className: "w-full px-3 py-2 border border-gray-300 rounded" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "md:col-span-2 flex justify-between mt-4", children: [(0, jsx_runtime_1.jsx)("button", { type: "submit", className: "bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition", disabled: loading, children: loading ? 'Menyimpan...' : 'Simpan' }), (0, jsx_runtime_1.jsx)("button", { type: "button", onClick: () => navigate('/matakuliah'), className: "text-sm text-gray-500 hover:underline", children: "Batal / Kembali" })] })] })] }));
};
exports.default = MataKuliahForm;
//# sourceMappingURL=matakuliahForm.js.map