import { describe, it, expect, vi } from 'vitest';
import { tellName } from '..';

describe('程序的间接输入-常量', () => {
  vi.mock('../config.ts', async (importOriginal) => {
    // 这是原本 config 导出的
    const original = (await importOriginal()) as Object;
    // 或者通过
    const original1 = await vi.importActual('../config');
    return {
      ...original,
      name: 'zio',
    };
  });
  it('常量', () => {
    expect(tellName()).toBe('zio111');
  });
});
