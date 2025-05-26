"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMahasiswa = exports.updateMahasiswa = exports.createMahasiswa = exports.getMahasiswaByNim = exports.getMahasiswa = exports.api = void 0;
const axios_1 = require("axios");
exports.api = axios_1.default.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
    },
});
const getMahasiswa = () => exports.api.get('/mahasiswa');
exports.getMahasiswa = getMahasiswa;
const getMahasiswaByNim = (nim) => exports.api.get(`/mahasiswa/${nim}`);
exports.getMahasiswaByNim = getMahasiswaByNim;
const createMahasiswa = (data) => exports.api.post('/mahasiswa', data);
exports.createMahasiswa = createMahasiswa;
const updateMahasiswa = (nim, data) => exports.api.put(`/mahasiswa/${nim}`, data);
exports.updateMahasiswa = updateMahasiswa;
const deleteMahasiswa = (nim) => exports.api.delete(`/mahasiswa/${nim}`);
exports.deleteMahasiswa = deleteMahasiswa;
//# sourceMappingURL=api.js.map