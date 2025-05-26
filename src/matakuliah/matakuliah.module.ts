import { Module } from '@nestjs/common';
import { MataKuliahService } from './matakuliah.service';
import { MataKuliahController } from './matakuliah.controller';

@Module({
  controllers: [MataKuliahController],
  providers: [MataKuliahService],
})
export class MatakuliahModule {}
