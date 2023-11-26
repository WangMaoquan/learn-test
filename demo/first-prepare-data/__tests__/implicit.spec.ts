import { describe, it, expect, beforeEach } from 'vitest';
import { createTodo } from '../helpers/todo';
import { addTodo, todos } from '..';
describe('准备数据-隐式', () => {
  /**
   * 隐式创建,
   * 解决代码重复
   */

  let todo;

  beforeEach(() => {
    todos.length = 0;
    todo = createTodo('decade');
  });

  it('first', () => {
    // given beforeEach 中赋值
    // when
    addTodo(todo);
    // then
    expect(todos[0]).toBe(todo);
  });

  it('second', () => {
    // given beforeEach 中赋值
    // when
    addTodo(todo);
    // then
    expect(todos[0]).toBe(todo);
  });
});
