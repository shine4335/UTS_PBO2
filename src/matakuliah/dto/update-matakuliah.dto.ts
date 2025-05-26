import { PartialType } from '@nestjs/mapped-types';
import { CreateMataKuliahDto } from './create-matakuliah.dto';
export class UpdateMataKuliahDto extends PartialType(CreateMataKuliahDto) {}