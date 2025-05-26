import { Test, TestingModule } from '@nestjs/testing';
import { MataKuliahService } from './matakuliah.service';

describe('MatakuliahService', () => {
  let service: MataKuliahService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MataKuliahService],
    }).compile();

    service = module.get<MataKuliahService>(MataKuliahService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
