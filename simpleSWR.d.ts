// index.d.ts

declare module 'simple-swr' {
  export interface SimpleSWROptions {
    cacheDuration: number;
  }

  export function setup(options?: SimpleSWROptions): void;

  export function get(url: string): Promise<any>;
}
