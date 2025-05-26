import type { MahasiswaType } from '../types/mahasiswa';
export declare const api: import("axios").AxiosInstance;
export declare const getMahasiswa: () => Promise<import("axios").AxiosResponse<MahasiswaType[], any>>;
export declare const getMahasiswaByNim: (nim: string) => Promise<import("axios").AxiosResponse<MahasiswaType, any>>;
export declare const createMahasiswa: (data: MahasiswaType) => Promise<import("axios").AxiosResponse<any, any>>;
export declare const updateMahasiswa: (nim: string, data: MahasiswaType) => Promise<import("axios").AxiosResponse<any, any>>;
export declare const deleteMahasiswa: (nim: string) => Promise<import("axios").AxiosResponse<any, any>>;
