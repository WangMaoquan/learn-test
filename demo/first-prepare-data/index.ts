export interface Todo {
  title: string;
  content: string;
}

export enum State {
  active,
  completed,
  removed,
}

export const todos: Todo[] = [];
export const addTodo = (todo: Todo) => {
  todos.push(todo);
};
