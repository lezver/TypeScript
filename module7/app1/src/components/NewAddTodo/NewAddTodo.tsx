import './NewAddTodo.scss';
import { IItem } from '../types/todo';
import { useId, useState } from 'react';

export const NewAddTodo: React.FunctionComponent = () => {
  const [item, setItem] = useState<Partial<IItem>>({});
  const [isEmpty, setIsEmpty] = useState<boolean>(true);
  const id = useId();

  const changeInput = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>): void => {
    if (value) {
      setIsEmpty(false);

      setItem({ id, text: value });
    } else {
      setIsEmpty(true);
    }
  };

  const submitHandler = (e: React.FormEvent): void => {
    e.preventDefault();

    if (item.text) {
      console.log(item);

      let {
        0: { value },
      }: any = e.target;

      value = '';
      value === '' ? setIsEmpty(true) : setIsEmpty(false);
    }
  };

  return (
    <section className="new-add-todo">
      <h2>NewAddTodo</h2>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={changeInput} />
        <button type="submit" disabled={isEmpty}>
          add todo
        </button>
      </form>
    </section>
  );
};
