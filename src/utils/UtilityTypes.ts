export type PartiallyRequired<T, K extends keyof T> = Omit<T, K> &
  Required<Pick<T, K>>;

export type PartiallyOptional<T, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>;

export type Nullable<T> = { [K in keyof T]: T[K] | null };

export type ErrorWithName<T extends string = never> = T extends string
  ? Error & { name: T }
  : never;

type ResultOf<T> = T extends void
  ? { value?: never; error: Error | null }
  : { value: T | null; error: Error | null };

export type AsyncResultOf<T> = Promise<ResultOf<T>>;

export type SelectiveKeyTypes<
  T,
  RequiredKeys extends keyof T = never,
  OptionalKeys extends Exclude<keyof T, RequiredKeys> = never,
> = {
  [K in RequiredKeys]: T[K];
} & {
  [K in OptionalKeys]?: T[K];
};
