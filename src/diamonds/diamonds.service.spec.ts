import { Test, TestingModule } from '@nestjs/testing';
import { DiamondsService } from '../diamonds/diamonds.service';
import { Diamond } from '../diamonds/Interfaces/diamond.interface';

describe('DiamondsService', () => {
  let service: DiamondsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiamondsService],
    }).compile();

    service = module.get<DiamondsService>(DiamondsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getHash',() => {
    it('should get hash for diamond 1', async () => {
        const expectedHash = "f5d3371a8aae3719a939534879186c75ee8c9beac5f59a1a135a4de0d3ea194e";
        const diamondModel : Diamond = {
          color : "G",
          cut : "D",
          clarity : "SI1",
          caratWeight : 1
        };
        const hash = service.getHash(diamondModel);
        expect(hash).toEqual(expectedHash);
      });

      it('should get hash for diamond 2', async () => {
        const expectedHash = "e06fc79cbaa86c9243e7aa3cd172325b86b3cf0ffc0b6976902d6128b5514962";
        const diamondModel : Diamond = {
          color : "G",
          cut : "GD",
          clarity : "VS1",
          caratWeight : 0.8
        };
        const hash = service.getHash(diamondModel);
        expect(hash).toEqual(expectedHash);
      });
    });
});

