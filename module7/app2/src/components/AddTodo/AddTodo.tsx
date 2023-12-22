import { useState } from 'react';
import './AddTodo.scss';
import { IPropsTodo } from '../types/todo';

export const AddTodo: React.FC<IPropsTodo> = ({ addTodoInArr }) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const changeOfInput = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>): void =>
    !value ? setIsDisabled(true) : setIsDisabled(false);

  const heandlerSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    const target: any = e.target;

    addTodoInArr({
      id: Math.random().toString().slice(2, -1),
      text: target[0].value,
    });

    target[0].value = '';

    setIsDisabled(true);
  };

  return (
    <section className="add-todo">
      <h2>Add To-Do</h2>
      <form onSubmit={heandlerSubmit}>
        <input type="text" onChange={changeOfInput} />
        <button type="submit" disabled={isDisabled}>
          add new todo
        </button>
      </form>
    </section>
  );
};
