import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LinkService } from '../service/link.service';
import { CreateLinkDto, UpdateLinkDto } from '../link.dto';

@Controller('link')
export class LinkController {
   constructor(private readonly linkService: LinkService) {}

   @Post()
   create(@Body() createLinkDto: CreateLinkDto) {
      return this.linkService.create(createLinkDto);
   }

   @Get()
   findAll() {
      return this.linkService.findAll();
   }

   @Get(':id')
   findOne(@Param('id') id: string) {
      return this.linkService.findOne(+id);
   }

   @Patch(':id')
   update(@Param('id') id: string, @Body() updateLinkDto: UpdateLinkDto) {
      return this.linkService.update(+id, updateLinkDto);
   }

   @Delete(':id')
   remove(@Param('id') id: string) {
      return this.linkService.remove(+id);
   }
}
