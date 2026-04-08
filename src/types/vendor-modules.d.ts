declare module 'child-process-promise' {
  import type { ChildProcess, SpawnOptions } from 'child_process';

  export interface ChildProcessPromise extends Promise<unknown> {
    childProcess: ChildProcess;
  }

  export function spawn(
    command: string,
    args?: readonly string[],
    options?: SpawnOptions,
  ): ChildProcessPromise;
}

declare module 'semver-compare' {
  export default function compare(a: string, b: string): number;
}
