import { reactive } from '@vue/reactivity';
import { defineStore } from 'pinia';

interface Todo {
  title: string;
  content: string;
  id: number;
  completed?: boolean;
}

const useTodoStore = defineStore('todo', () => {
  const todos = reactive<Todo[]>([]);

  const addTodo = (todo: Todo) => {
    todos.push({ completed: false, ...todo });
  };

  const removeTodo = (id: number) => {
    const index = todos.findIndex((todo) => todo.id === id);
    todos.splice(index, 1);
  };

  return {
    todos,
    addTodo,
    removeTodo,
  };
});

export default useTodoStore;
