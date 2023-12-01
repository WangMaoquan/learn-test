import { describe, it, expect, vi } from 'vitest';
import { getGlobalObjectUserAge } from '..';

describe('程序的间接输入-全局对象', () => {
  /**
   * 比如处理 获取 window.innerHeight 时 我们可以用 stubGlobal
   */
  it('user', () => {
    vi.stubGlobal('user', {
      age: 18,
    });
    expect(getGlobalObjectUserAge()).toBe(18);
  });
});
