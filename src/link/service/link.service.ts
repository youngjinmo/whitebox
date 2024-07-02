import { Injectable, NotFoundException } from '@nestjs/common';
import { PinoLogger } from 'nestjs-pino';
import { Repository } from 'typeorm';

import { CreateLinkDto, UpdateLinkDto } from '../link.dto';
import { Link } from '../link.entity';

@Injectable()
export class LinkService {
   private readonly linkRepository: Repository<Link>;
   private readonly logger: PinoLogger;

   constructor(linkRepository) {
      this.linkRepository = linkRepository;
   }

   create(link: CreateLinkDto) {
      this.logger.info('created link=%o', link);
      return this.linkRepository.save(link);
   }

   findAll() {
      return this.linkRepository.find();
   }

   findById(id: number) {
      return this.linkRepository.findBy({ id });
   }

   findByUri(uri: string) {
      return this.linkRepository.findBy({ redirectionUri: uri });
   }

   findByOriginUri(originUri: string) {
      return this.linkRepository.findBy({ uri: originUri });
   }

   findByUserId(userId: number) {
      return this.linkRepository.findBy({ userId });
   }

   update(id: number, updateLink: UpdateLinkDto) {
      const link = this.linkRepository.findBy({ id });
      if (!link) {
         throw new NotFoundException(`Link ${id} not found`);
      }
      return this.linkRepository.update(id, updateLink);
   }

   remove(id: number) {
      return this.linkRepository.delete(id);
   }
}
