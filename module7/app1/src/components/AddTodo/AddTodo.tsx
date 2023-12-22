import { useRef } from 'react';

export const AddTodo: React.FC = () => {
  const titleInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(titleInputRef.current?.value);
    const {
      0: { value },
    }: any = e.target;
    console.dir(value);
  };
  return (
    <section>
      <h2>AddTodo</h2>
      <form onSubmit={submitHandler}>
        <input type="text" ref={titleInputRef} />
        <button type="submit">Add Todo</button>
      </form>
    </section>
  );
};
