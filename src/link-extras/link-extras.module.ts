import { Module } from '@nestjs/common';
import { LinkExtrasService } from './service/link-extras.service';
import { LinkExtrasController } from './controller/link-extras.controller';

@Module({
   controllers: [LinkExtrasController],
   providers: [LinkExtrasService],
})
export class LinkExtrasModule {}
