type ChainedFunction<T> = (input: T) => T;
export function chain<T>(fns: ChainedFunction<T>[]): T;

export function equality<T>(a: T, b: T): boolean;

export function match<T extends Record<string, unknown>>(props: T): (item: T) => boolean;

export function not<T>(value: T): (value: T) => boolean;
export function not<T>(values: T[]): (value: T) => boolean;
export function not<T>(...values: T[]): (value: T) => boolean;

export function nub<T>(values: T[]): T[];

export function pluck(propertyName: string): unknown;
export function pluck(...properties: string[]): Record<string, unknown>;

export function range(start: number): (end: number) => number[];
export function range(start: number, end: number): number[];

export function sum<T>(a: T, b: T): T;
export function sum<T>(a: T[]): T;

export function times(count: number): number[];

export function within<T>(items: T[]): (testItem: T) => boolean;

export function zip(...sources: unknown[][]): (value: unknown) => unknown[];
