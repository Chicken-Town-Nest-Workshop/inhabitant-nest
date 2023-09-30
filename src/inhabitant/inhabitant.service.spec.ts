import { Test, TestingModule } from '@nestjs/testing';
import { InhabitantService } from './inhabitant.service';

describe('InhabitantService', () => {
  let service: InhabitantService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InhabitantService],
    }).compile();

    service = module.get<InhabitantService>(InhabitantService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
