import { describe, it, expect, beforeEach } from 'vitest';
import { Todo, addTodo, todos } from '..';
import { createTodo } from '../helpers/todo';

beforeEach(() => {
  todos.length = 0;
});

describe('数据准备-委托方式', () => {
  /**
   * 解决了内联会导致 代码重复, 如果参数变化时, 需要多次修改, 我们可以使用 工厂函数来委托
   *
   * 函数 更可读
   *
   * 原则: 只传入测例关注 的数据
   *
   * 多个文件测例中使用到 封装的工厂函数, 我们可以放在 helpers 文件里面
   */
  // const createTodo = (title: string): Todo => ({ title, content: 'decade' });
  it('first', () => {
    // given
    const todo = createTodo('decade1');
    // when
    addTodo(todo);
    // then
    expect(todos[0]).toBe(todo);
  });

  it('second', () => {
    // given
    const todo = createTodo('decade222');
    // when
    addTodo(todo);
    // then
    expect(todos[0]).toBe(todo);
  });
});
