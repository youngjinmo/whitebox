import { TypeUtil } from '@util/type-util';
import { Link } from './link.entity';

import PickSpecificAndPartialType = TypeUtil.PickSpecificAndPartialType;

export type CreateLinkDto = Pick<Link, 'uri' | 'redirectionUri' | 'userId'>;
export type UpdateLinkDto = PickSpecificAndPartialType<Link, 'id'>;
