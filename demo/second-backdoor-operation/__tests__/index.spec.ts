import { createPinia, setActivePinia } from 'pinia';
import { describe, it, expect, beforeEach } from 'vitest';
import useTodoStore from '../store/todo';

describe('后门操作准备数据', () => {
  /**
   * 什么是通过后门准备数据
   *
   * 比如我们其实要测试的 是 removeTodo 这个方法
   *
   * 我们是不是可以通过 先 add 然后再去 测试 remove, 这是不是常规的操作步骤? 那么走后门呢?
   *
   * 其实我们可以直接操作 todos
   */

  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('removeTodo normal', () => {
    const todoStore = useTodoStore();

    todoStore.addTodo({
      title: 'decade',
      content: 'decaed111',
      id: 1,
    });

    expect(todoStore.todos.length).toBe(1);

    todoStore.removeTodo(1);

    expect(todoStore.todos.length).toBe(0);
  });

  it('removeTodo backdoor', () => {
    const todoStore = useTodoStore();
    // 这就是走后门, 此时不存在 addTodo 方法
    // 这里直接暴漏的 todo 的数据结构, 也就是 数据结构变了, 这时的测试是会报错的, 但是其实我们不会影响我们的结果
    // 这种走后门的方法其实是不推荐的
    todoStore.todos.push({
      title: 'decade',
      content: 'decaed111',
      id: 1,
    });

    todoStore.removeTodo(1);

    expect(todoStore.todos.length).toBe(0);
  });
});
