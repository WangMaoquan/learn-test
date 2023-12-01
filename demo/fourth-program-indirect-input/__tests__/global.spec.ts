import { getDoubleInnerHeight } from '..';
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

describe('间接层的处理技巧', () => {
  it('innerHeight', () => {
    // innerHeight 之前我们可以使用 stubGlobal 来设置, 其实我们可以直接用一个方法返回, 这个方法返回的什么我们不关心

    vi.mock('../height.ts', () => {
      return {
        innerHeightFn: () => 100,
      };
    });
    expect(getDoubleInnerHeight()).toBe(200);

    // 也就是我们可以通过函数 把不确定的全局/环境/等等 包起来
    // 然后通过 mock 返回的值其实就是我们想要的
  });
});
