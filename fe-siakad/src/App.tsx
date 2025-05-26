// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Dashboard from './pages/Dashboard';

import MahasiswaLayout from './pages/Mahasiswa/index';
import MahasiswaList from './pages/Mahasiswa/MahasiswaList';
import MahasiswaForm from './pages/Mahasiswa/MahasiswaForm';

import MatakuliahLayout from './pages/matakuliah/index';
import MataKuliahList from './pages/matakuliah/matakuliahList';
import MataKuliahForm from './pages/matakuliah/matakuliahForm';
import MataKuliahEdit from './pages/matakuliah/MataKuliahEdit';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/mahasiswa" element={<MahasiswaLayout />}>
  <Route index element={<MahasiswaList />} />
  <Route path="tambah" element={<MahasiswaForm />} />
  <Route path="new" element={<MahasiswaForm />} />
          </Route>

          {/* Rute Mata Kuliah */}
          <Route path="/matakuliah" element={<MatakuliahLayout />}>
            <Route index element={<MataKuliahList />} />
            <Route path="tambah" element={<MataKuliahForm />} />
            <Route path="edit/:kode" element={<MataKuliahEdit />} />
          </Route>
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
