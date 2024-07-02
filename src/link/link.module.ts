import { Module } from '@nestjs/common';
import { LinkService } from './service/link.service';
import { LinkController } from './controller/link.controller';

@Module({
   controllers: [LinkController],
   providers: [LinkService],
})
export class LinkModule {}
