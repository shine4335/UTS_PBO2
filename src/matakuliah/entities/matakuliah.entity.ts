export class MataKuliah {
    kode: string;
    nama: string;
    sks: number;
    semester: string;
    jurusan: string;
    constructor(kode: string, nama: string, sks: number, semester: string, jurusan: string) {
        this.kode = kode;
        this.nama = nama;
        this.sks = sks;
        this.semester = semester;
        this.jurusan = jurusan;
    }
}