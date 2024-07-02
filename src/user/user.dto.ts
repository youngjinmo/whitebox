import { TypeUtil } from '../util/type-util';
import { User } from './user.entity';

import CreateDtoType = TypeUtil.CreateDtoType;

export type CreateUserDto = CreateDtoType<User, 'id'>;
