import { TypeUtil } from './type-util';

export namespace ObjectUtil {
   export function isEmpty(target: TypeUtil.ObjectType): boolean {
      if (target === undefined || target === null) {
         return true;
      }
      if (target instanceof Array && target.length === 0) {
         return true;
      }
      return false;
   }
}
