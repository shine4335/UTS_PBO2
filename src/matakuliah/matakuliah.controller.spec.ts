import { Test, TestingModule } from '@nestjs/testing';
import { MataKuliahController } from './matakuliah.controller';
import { MataKuliahService } from './matakuliah.service';

describe('MataKuliahController', () => {
  let controller: MataKuliahController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MataKuliahController],
      providers: [MataKuliahService],
    }).compile();

    controller = module.get<MataKuliahController>(MataKuliahController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
