import { Test, TestingModule } from '@nestjs/testing';
import { LinkExtrasService } from './link-extras.service';

describe('LinkExtrasService', () => {
   let service: LinkExtrasService;

   beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
         providers: [LinkExtrasService],
      }).compile();

      service = module.get<LinkExtrasService>(LinkExtrasService);
   });

   it('should be defined', () => {
      expect(service).toBeDefined();
   });
});
