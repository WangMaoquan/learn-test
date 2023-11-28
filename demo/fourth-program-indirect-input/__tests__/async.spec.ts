import { describe, it, expect, vi } from 'vitest';
import { FetchDoubleUserAge } from '..';

describe('程序的间接输入-异步', () => {
  vi.mock('../User', () => {
    return {
      fetchUserAge: () => Promise.resolve(10),
    };
  });
  it('fetchUserage', async () => {
    const r = await FetchDoubleUserAge();
    expect(r).toBe(20);
  });
});
