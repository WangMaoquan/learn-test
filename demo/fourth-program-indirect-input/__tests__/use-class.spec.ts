import { describe, it, expect, vi } from 'vitest';
import {
  getDoubleUserAgeByClassProperty,
  getDoubleUserAgeByClassFun,
} from '..';

describe('程序的间接输入-class', () => {
  vi.mock('../User.ts', () => {
    return {
      User: class User {
        age = 2;
        getAge() {
          return 2;
        }
      },
    };
  });
  it('class-属性', () => {
    const r = getDoubleUserAgeByClassProperty();
    expect(r).toBe(4);
  });

  it('class-function', () => {
    const r = getDoubleUserAgeByClassFun();
    expect(r).toBe(4);
  });
});
