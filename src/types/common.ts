export type Primitive = null | undefined | string | number | boolean | symbol | bigint;
export type BrowserNativeObject = Date | FileList | File;

export type ArrayKey = number;

export type IsTuple<T extends ReadonlyArray<any>> = number extends T['length'] ? false : true;
export type TupleKeys<T extends ReadonlyArray<any>> = Exclude<keyof T, keyof any[]>;
