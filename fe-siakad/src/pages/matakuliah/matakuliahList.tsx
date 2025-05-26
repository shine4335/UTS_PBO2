import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';

interface MataKuliah {
    kode: string;
    nama: string;
    sks: number;
    semester: string;
    jurusan: string;
}

const MataKuliahList: React.FC = () => {
    const [mataKuliah, setMataKuliah] = useState<MataKuliah[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    useEffect(() => {
        const fetchMataKuliah = async () => {
            try {
                const response = await api.get('/matakuliah');
                if (Array.isArray(response.data)) {
                    setMataKuliah(response.data);
                } else {
                    alert('Data yang diterima bukan array.');
                }
            } catch (error) {
                console.error('Error fetching mata kuliah:', error);
            }
        };
        fetchMataKuliah();
    }, []);

    const totalPages = Math.ceil(mataKuliah.length / itemsPerPage);
    const pageData = mataKuliah.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleDelete = async (kode: string) => {
        if (window.confirm('Apakah Anda yakin ingin menghapus mata kuliah ini?')) {
            try {
                await api.delete(`/matakuliah/${kode}`);
                setMataKuliah(mataKuliah.filter(mk => mk.kode !== kode));
            } catch (error) {
                console.error('Error deleting mata kuliah:', error);
            }
        }
    };

    return (
        <div className="p-4">
            <div className="overflow-x-auto rounded-lg shadow border">
                <table className="min-w-full text-sm text-left">
                    <thead className="bg-gray-100 text-gray-700 uppercase">
                        <tr>
                            <th className="px-4 py-3 border">Kode</th>
                            <th className="px-4 py-3 border">Nama</th>
                            <th className="px-4 py-3 border">SKS</th>
                            <th className="px-4 py-3 border">Semester</th>
                            <th className="px-4 py-3 border">Jurusan</th>
                            <th className="px-4 py-3 border">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-800">
                        {pageData.length > 0 ? (
                            pageData.map((mk) => (
                                <tr key={mk.kode} className="hover:bg-gray-50">
                                    <td className="px-4 py-2 border">{mk.kode}</td>
                                    <td className="px-4 py-2 border">{mk.nama}</td>
                                    <td className="px-4 py-2 border">{mk.sks}</td>
                                    <td className="px-4 py-2 border">{mk.semester}</td>
                                    <td className="px-4 py-2 border">{mk.jurusan}</td>
                                    <td className="px-4 py-2 border space-x-2">
                                        <Link to={`/matakuliah/edit/${mk.kode}`} className="bg-yellow-400 text-black px-2 py-1 rounded hover:bg-yellow-500">
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(mk.kode)}
                                            className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={6} className="text-center py-4 text-gray-500">
                                    Tidak ada data mata kuliah.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-end items-center gap-2 mt-4">
                {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`w-8 h-8 rounded ${
                            currentPage === i + 1
                                ? 'bg-indigo-600 text-white'
                                : 'bg-white text-gray-800 border'
                        }`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MataKuliahList;
