import { IsString, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateMataKuliahDto {
  @IsString()
  kode: string;

  @IsString()
  nama: string;

  @Type(() => Number)
  @IsNumber()
  sks: number;

  @IsString()
  semester: string;

  @IsString()
  jurusan: string;
}
