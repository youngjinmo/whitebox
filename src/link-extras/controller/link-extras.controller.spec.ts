import { Test, TestingModule } from '@nestjs/testing';
import { LinkExtrasController } from './link-extras.controller';
import { LinkExtrasService } from '../service/link-extras.service';

describe('LinkExtrasController', () => {
   let controller: LinkExtrasController;

   beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
         controllers: [LinkExtrasController],
         providers: [LinkExtrasService],
      }).compile();

      controller = module.get<LinkExtrasController>(LinkExtrasController);
   });

   it('should be defined', () => {
      expect(controller).toBeDefined();
   });
});
