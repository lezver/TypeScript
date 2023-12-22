import { useState } from 'react';
import { AddTodo } from '../AddTodo';
import { TodoList } from '../TodoList';
import { ITodo } from '../types/todo';

export const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodoInArr = (todo: ITodo): void =>
    setTodos(prevState => [...prevState, todo]);

  const removeTodoinArr = (id: string): void =>
    setTodos(todos.filter(item => item.id !== id));

  return (
    <>
      <AddTodo addTodoInArr={addTodoInArr} />
      <TodoList todos={todos} removeTodoinArr={removeTodoinArr} />
    </>
  );
};
