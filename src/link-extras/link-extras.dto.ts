import { LinkExtra } from './link-extra.entity';
import { TypeUtil } from '../util/type-util';

import PickSpecificAndPartialType = TypeUtil.PickSpecificAndPartialType;

export type CreateLinkExtraDto = PickSpecificAndPartialType<Omit<LinkExtra, 'id'>, 'targetLink'>;
export type UpdateLinkExtraDto = Partial<Omit<LinkExtra, 'id'>>;
