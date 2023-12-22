import { useState } from 'react';
import { IItem } from '../types/todo';

interface IProps {
  items: IItem[];
}

const toDoArr = [
  { id: '1', title: 'TITLE1' },
  { id: '2', title: 'TITLE2' },
  { id: '3', title: 'TITLE3' },
];

export const TodoList: React.FC<IProps> = ({ items }) => {
  const [todos, setTodos] = useState<{ id: string; title: string }[]>([]);

  const openToDo = (): void => setTodos(toDoArr);

  const addTodo = (newTodo: { id: string; title: string }) => {
    setTodos([...todos, newTodo]);

    console.log(todos);
  };

  return (
    <section>
      <button onClick={() => addTodo({ id: '4', title: 'test' })}>test</button>
      <ul>
        {items.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <button type="button" onClick={openToDo}>
        Show To-Do list
      </button>
      <ol>
        {todos?.map(({ title }, index) => (
          <li key={index}>{title}</li>
        ))}
      </ol>
    </section>
  );
};
