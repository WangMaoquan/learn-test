import { describe, it, expect } from 'vitest';
import { agsIs18, tellAge } from '../use-object';
import { config } from '../config';

describe('程序的间接输入-全局配置对象', () => {
  /**
   * 我们可以直接修改 对象的属性
   */
  it('config-属性', () => {
    config.allowTellAge = true;
    expect(tellAge()).toBe(18);
  });

  it('config-function', () => {
    expect(agsIs18()).toBe('no');
  });
});
