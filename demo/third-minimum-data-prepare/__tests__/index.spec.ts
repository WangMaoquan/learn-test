import { describe, it, expect } from 'vitest';
import { User } from '../User';
import { Product } from '../Product';

describe('最小准备数据原则', () => {
  /**
   * 什么是最小准备数据原则?
   *
   * 即在准备测试数据时, 和当前测试的功能无关的数据不需要提供
   *
   * 目的是为了保持单元测试的可读性(数据越少, 单测越容易阅读)
   *
   * 可读性/可维护性
   */

  describe('User', () => {
    /**
     * 下面的测试我们其实只是测试 buy 这个方法,
     * 而且buy 方法关联的 也只是 user.name 和 produce.name, 别的数据其实是没有必要的
     */
    it('buy', () => {
      // 20, '1111@qq.com', '广东省广州市' 没有必要的 和 buy 无关
      const user = new User('decade', 20, '1111@qq.com', '广东省广州市');
      // 20, 'this is book' 没有必要的 和 buy 无关
      const book = new Product('book', 20, 'this is book');

      const r = user.buy(book);
      expect(r).toBe('User decade bought book');
    });

    /**
     * 所以我们怎么 能省略掉 后面的无用的参数呢?
     *
     * 1. 函数给默认值就好了
     *
     * 这样是不是就修改了我们代码, 合适嘛?
     *
     * 其实写单测就是 站在用户的角度 考虑, 一般来说是合适的哈哈哈
     *
     * 2. 委托来隐藏
     *
     * 3. ts 中其实可以使用 as
     */

    const createUser = (name: string) => {
      return new User(name, 0, '', '');
    };

    const createProduct = (name: string) => {
      return new Product('book', 20, '');
    };

    it('buy 委托', () => {
      const user = createUser('decade');
      const book = createProduct('book');

      const r = user.buy(book);
      expect(r).toBe('User decade bought book');
    });

    it('buy 虚拟对象', () => {
      const user = createUser('decade');
      const book = { name: 'book' } as Product;

      const r = user.buy(book);
      expect(r).toBe('User decade bought book');
    });
  });
});
