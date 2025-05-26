import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

interface MataKuliahFormData {
  kode: string;
  nama: string;
  sks: number | '';
  semester: string;
  jurusan: string;
}

const initialForm: MataKuliahFormData = {
  kode: '',
  nama: '',
  sks: '',
  semester: '',
  jurusan: '',
};

const MataKuliahForm: React.FC = () => {
  const [form, setForm] = useState<MataKuliahFormData>(initialForm);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === 'sks' ? (value === '' ? '' : Number(value)) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post('/matakuliah', form);
      navigate('/matakuliah');
    } catch (error) {
      alert('Gagal menyimpan data mata kuliah');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-8 rounded shadow mt-6 text-gray-800">
      <h1 className="text-2xl font-bold mb-6">Tambah Mata Kuliah</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {['kode', 'nama', 'semester', 'jurusan'].map((field) => (
          <div key={field}>
            <label className="block text-sm font-medium mb-1 capitalize">{field}</label>
            <input
              name={field}
              type="text"
              value={(form as any)[field]}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
        ))}
        <div>
          <label className="block text-sm font-medium mb-1">SKS</label>
          <input
            name="sks"
            type="number"
            min="0"
            value={form.sks}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>

        <div className="md:col-span-2 flex justify-between mt-4">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
            disabled={loading}
          >
            {loading ? 'Menyimpan...' : 'Simpan'}
          </button>
          <button
            type="button"
            onClick={() => navigate('/matakuliah')}
            className="text-sm text-gray-500 hover:underline"
          >
            Batal / Kembali
          </button>
        </div>
      </form>
    </div>
  );
};

export default MataKuliahForm;
