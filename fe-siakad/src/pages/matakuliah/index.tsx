import { Outlet, useLocation, Link } from "react-router-dom";

export default function MataKuliahLayout() {
    const location = useLocation();
    const showTambahButton = location.pathname === "/matakuliah";

    return (
      
        <div className="p-6 bg-gray-100">
            <div className="flex justify-between items-center mb-6">
                {showTambahButton && (
                    <Link
                        to="/matakuliah/tambah"
                        className="bg-indigo-600 text-white px-4 py-2 rounded shadow hover:bg-indigo-700"
                    >
                        Tambah Mata Kuliah
                    </Link>
                )}
            </div>
            <Outlet />
        </div>
    );
}
