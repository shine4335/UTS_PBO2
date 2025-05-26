import { IsString, IsEmail, IsNumber, Length } from 'class-validator';

export class CreateMahasiswaDto {
  @IsString()
  @Length(8, 10)
  nim: string;

  @IsString()
  nama: string;

  @IsString()
  prodi: string;

  @IsNumber()
  angkatan: number;

  @IsEmail()
  email: string;
}