import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Repository } from 'typeorm';

import { LinkExtra } from '../link-extra.entity';
import { Link } from '../../link/link.entity';
import { ObjectUtil } from '../../util/object-util';
import { CreateLinkExtraDto, UpdateLinkExtraDto } from '../link-extras.dto';

@Injectable()
export class LinkExtrasService {
   private readonly linkExtraRepository: Repository<LinkExtra>;
   private readonly linkRepository: Repository<Link>;

   create(linkExtra: CreateLinkExtraDto) {
      return this.linkExtraRepository.save(linkExtra);
   }

   findById(id: number) {
      return this.linkExtraRepository.findBy({ id: id });
   }

   findByLinkId(linkId: LinkExtra['targetLink']) {
      return this.linkExtraRepository.findBy({ targetLink: linkId });
   }

   async updateByLinkId(linkId: LinkExtra['targetLink'], updateLinkExtras: UpdateLinkExtraDto) {
      const linkExtras = await this.linkExtraRepository.findBy({ targetLink: linkId });
      if (ObjectUtil.isEmpty(linkExtras)) {
         throw new InternalServerErrorException(`Link ${linkExtras} not found`);
      }
      return this.linkExtraRepository.update(linkId, updateLinkExtras);
   }

   async removeByLinkId(linkId: LinkExtra['targetLink']) {
      const linkExtras = await this.linkExtraRepository.findBy({ targetLink: linkId });
      if (ObjectUtil.isEmpty(linkExtras)) {
         throw new InternalServerErrorException(`Link ${linkExtras} not found`);
      }
      return this.linkExtraRepository.delete(linkId);
   }
}
