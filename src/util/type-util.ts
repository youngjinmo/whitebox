export namespace TypeUtil {
   export type LiterType = string | number;
   export type ObjectType = LiterType | object;
   export type PickSpecificAndPartialType<T, K extends keyof T> = Pick<T, K> & Partial<Omit<T, K>>;
}
