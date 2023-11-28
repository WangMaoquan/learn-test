import { describe, it, expect, vi, beforeEach } from 'vitest';
import { add, doubleUserAge } from '..';

// vi.mock  回调中的 userAge 会替换掉下面 这个 userAge
// import { userAge } from '../User';

// vi.mock 会被编译到顶部, 所以 打印出来的还是 mock 中的 那个 userAge
// console.log(userAge());

describe('程序的间接输入', () => {
  /**
   * 有间接输入就有直接输入!
   * 直接输入:
   * 函数 形参不需要别的方法提供 函数内也没有别的 函数提供这种
   *
   * 比如 add
   */

  // mock3 注释
  // it('add', () => {
  //   expect(add(1, 1)).toBe(2);
  // });

  /**
   * 那么间接输入
   * 我们需要 从另外一个函数 获取形参, 在函数体内 调用另外的函数处理 最后返回结果
   *
   * 比如我们的 doubleUserAge
   *
   * 依赖了 userAge 这个方法, 这个方法返回一个值,
   *
   */

  // 模拟 User 的到处, 第二个参数返回 User 的导出
  /**
   * vi.mock  回调中的 userAge 会替换掉 userAge
   * vi.mock 会被编译到顶部
   *
   * 但是我们如果在别的测例想用原本的!!
   * 怎么办?
   */
  // mock1
  // vi.mock('../User', () => {
  //   return {
  //     userAge: () => 2,
  //   };
  // });

  // 解决 别的测例不想用 mock 中的 userAge, 注释掉上面的
  // mock2
  // vi.mock('../User');

  // it('doubleUserAge use mock1', () => {
  //   const r = doubleUserAge();
  //   // 这里是2 是因为我们知道 userAge 返回1, 如果修改返回值, 我们测例就不会通过
  //   // 所以我们需要控制 这个间接值
  //   // 这时我们需要 是用 vi.mock,
  //   // stub 替换掉真实的实现
  //   expect(r).toBe(4);
  // });

  // mock3 注释掉
  // it('doubleUserAge use mock2', () => {
  //   vi.mocked(userAge).mockReturnValue(2);
  //   const r = doubleUserAge();
  //   expect(r).toBe(4);
  // });

  // mock3 配合 beforeEach

  beforeEach(() => {
    // 必须在 doMock 之后引用, 并且保证之前测例没有使用 await 文件中的导出
    vi.doMock('../User', () => {
      return {
        userAge: () => 8,
      };
    });
  });

  it('doubleUserAge use mock3', async () => {
    // // 必须在 doMock 之后引用, 并且保证之前测例没有使用 await 文件中的导出
    // vi.doMock('../User', () => {
    //   return {
    //     userAge: () => 8,
    //   };
    // });
    const { doubleUserAge } = await import('../index');
    const r = doubleUserAge();
    expect(r).toBe(16);
  });
});
