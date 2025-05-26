import { Injectable, Logger } from '@nestjs/common';
import { CreateMataKuliahDto} from './dto/create-matakuliah.dto';
import {UpdateMataKuliahDto} from './dto/update-matakuliah.dto';
import { MataKuliah } from './entities/matakuliah.entity';
@Injectable()
export class MataKuliahService {
    private readonly logger = new Logger(MataKuliahService.name);
    private mataKuliah: MataKuliah[] = [];
    create(dto: CreateMataKuliahDto): MataKuliah {
        const newMataKuliah = new MataKuliah(dto.kode, dto.nama, dto.sks, dto.semester, dto.jurusan);
        this.mataKuliah.push(newMataKuliah);
        return newMataKuliah;
    }
    findAll(): MataKuliah[] {
        return this.mataKuliah;
    }
    findOne(kode: string): MataKuliah | undefined {
        return this.mataKuliah.find(mk => mk.kode === kode);
    }
    update(kode: string, dto: UpdateMataKuliahDto): MataKuliah | null {
        try {
            const index = this.mataKuliah.findIndex(mk => mk.kode === kode);
            if (index === -1) return null;
            if (dto.kode && dto.kode !== kode) {
                const existingIndex = this.mataKuliah.findIndex(mk => mk.kode === dto.kode);
                if (existingIndex !== -1) {
                    throw new Error(`MataKuliah dengan kode ${dto.kode} sudah ada.`);
                }
            }

            const sksValue = dto.sks !== undefined ? Number(dto.sks) : this.mataKuliah[index].sks;

            const updatedMataKuliah = new MataKuliah(
                dto.kode || this.mataKuliah[index].kode,
                dto.nama || this.mataKuliah[index].nama,
                sksValue,
                dto.semester || this.mataKuliah[index].semester,
                dto.jurusan || this.mataKuliah[index].jurusan,
            );

            this.mataKuliah[index] = updatedMataKuliah;
            return updatedMataKuliah;
        } catch (error) {
            this.logger.error('Update failed', error.stack);
            throw error;
        }
    }
    remove(kode: string): MataKuliah | null {
        const index = this.mataKuliah.findIndex(mk => mk.kode === kode);
        if (index === -1) return null;
        const deletedMataKuliah = this.mataKuliah[index];
        this.mataKuliah.splice(index, 1);
        return deletedMataKuliah;
    }
}
