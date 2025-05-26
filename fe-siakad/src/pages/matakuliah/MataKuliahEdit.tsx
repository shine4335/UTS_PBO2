import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function MataKuliahEdit() {
  const { kode } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    kode: "",
    nama: "",
    sks: 0,
    semester: "",
    jurusan: "",
  });

  useEffect(() => {
    if (kode) {
      axios
        .get(`http://localhost:3000/matakuliah/${kode}`)
        .then((res) => setForm(res.data))
        .catch((err) => console.error("Gagal mengambil data:", err));
    }
  }, [kode]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "sks" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3000/matakuliah/${kode}`, form)
      .then(() => navigate("/matakuliah"))
      .catch((err) => console.error("Gagal menyimpan perubahan:", err));
  };

  return (
    <div className="p-6">
      <div className="bg-white p-6 rounded shadow max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Edit Mata Kuliah</h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-1">Kode</label>
            <input
              name="kode"
              value={form.kode}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Nama</label>
            <input
              name="nama"
              value={form.nama}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">SKS</label>
            <input
              name="sks"
              type="number"
              value={form.sks}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Semester</label>
            <input
              name="semester"
              value={form.semester}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block font-semibold mb-1">Jurusan</label>
            <input
              name="jurusan"
              value={form.jurusan}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div className="md:col-span-2 flex justify-between mt-4">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
            >
              Simpan Perubahan
            </button>
            <button
              type="button"
              onClick={() => navigate("/matakuliah")}
              className="text-gray-600 hover:underline"
            >
              Batal / Kembali
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
