import { describe, it, expect, vi } from 'vitest';
import { getEnvUserAge } from '..';

describe('程序的间接输入-环境变量', () => {
  it('USER_AGE', () => {
    // process.env.USER_AGE = '18'; // 这种会导致环境变量值被修改, 不推荐
    vi.stubEnv('USER_AGE', '18');
    expect(getEnvUserAge()).toBe(18);

    vi.unstubAllEnvs(); // 恢复, 配合 afterEach
  });
});
