import { IPropsList } from '../types/todo';
import './TodoList.scss';

export const TodoList: React.FC<IPropsList> = ({ todos, removeTodoinArr }) => {
  return (
    <section className="todo-list">
      <h2>Todo List</h2>

      {!todos.length ? (
        <p>sorry, but you don't have any To-Do</p>
      ) : (
        <ol>
          {todos?.map(({ id, text }) => (
            <li key={id}>
              <span>{text}</span>
              <button type="button" onClick={() => removeTodoinArr(id)}>
                Delete
              </button>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
};
