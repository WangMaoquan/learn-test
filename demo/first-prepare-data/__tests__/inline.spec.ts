import { describe, it, expect, beforeEach } from 'vitest';
import { addTodo, todos } from '..';

beforeEach(() => {
  todos.length = 0;
});

describe('数据准备-内联方式', () => {
  /**
   * 测试 as 文档
   *
   * 优点:
   * 方法要啥, 我们直接准备啥, 很直接
   *
   * 缺点:
   * 重复代码会很多, 多个 const todo
   * 如果我们修改了 方法的形参, 改得地方就很多, 给 Todo 加一个字段后, 测例就会报错了, 需要我们重新给 每个测例的 todo 重新加字段
   * 准备的参数复杂 会导致可读性变差
   */
  it('first', () => {
    // given
    const todo = {
      title: 'decade',
      content: 'decade 1111',
    };
    // when
    addTodo(todo);
    // then
    expect(todos[0]).toBe(todo);
  });

  it('second', () => {
    // given
    const todo = {
      title: 'decade',
      content: 'decade 2222',
    };
    // when
    addTodo(todo);
    // then
    expect(todos[0]).toBe(todo);
  });
});
