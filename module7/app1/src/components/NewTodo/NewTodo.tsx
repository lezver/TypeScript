import React from 'react';
import './NewTodo.scss';
import { IItem } from '../types/todo';

interface IProps {
  todos: IItem[];
}

interface IState {
  count: number;
  title?: string;
}

export class NewTodo extends React.Component<IProps, IState> {
  state: IState = {
    count: 0,
    title: 'NewTodoList',
  };
  stateHandler = (value: number): void => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };
  render() {
    const { title, count } = this.state;
    const { todos } = this.props;
    return (
      <section className="new-todo-list">
        <h2>{title}</h2>

        <ol>
          {todos.map(({ id, text }) => (
            <li key={id}>
              <span>{text}</span>
            </li>
          ))}
        </ol>
        <button onClick={() => this.stateHandler(1)}>Show State</button>
        <p>{count}</p>
      </section>
    );
  }
}
