import axios from 'axios';
import { describe, it, expect, vi } from 'vitest';
import { getDoubleUserAgeByAxios } from '../User';

vi.mock('axios');

describe('程序的间接输入-第三方模块的处理', () => {
  it('axios', async () => {
    // axios 是异步 所以使用 mockResolvedValue
    // vi.mocked(axios).mockResolvedValue({
    vi.mocked(axios.get).mockResolvedValue({
      name: 'decade',
      age: 2,
    });
    const r = await getDoubleUserAgeByAxios();
    expect(r).toBe(4);
  });
});
