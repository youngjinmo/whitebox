import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LinkExtrasService } from '../service/link-extras.service';
import { CreateLinkExtraDto, UpdateLinkExtraDto } from '../link-extras.dto';

@Controller('link-extras')
export class LinkExtrasController {
   constructor(private readonly linkExtrasService: LinkExtrasService) {}

   @Post()
   create(@Body() createLinkExtraDto: CreateLinkExtraDto) {
      return this.linkExtrasService.create(createLinkExtraDto);
   }

   @Get(':id')
   findById(@Param('id') id: number) {
      return this.linkExtrasService.findById(id);
   }

   @Get(':linkId')
   findByLinkId(@Param('linkId') linkId: number) {
      return this.linkExtrasService.findByLinkId(linkId);
   }

   @Patch(':linkId')
   updateByLinkId(@Param('linkId') targetLink: number, @Body() updateLinkExtraDto: UpdateLinkExtraDto) {
      return this.linkExtrasService.updateByLinkId(targetLink, updateLinkExtraDto);
   }

   @Delete(':linkId')
   deleteByLinkId(@Param('linkId') targetLink: number) {
      return this.linkExtrasService.removeByLinkId(targetLink);
   }
}
