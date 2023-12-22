import React from 'react';
import './App.scss';
import {
  TodoList,
  GetPokemon,
  ClickStatistic,
  NewTodo,
  AddTodo,
  NewAddTodo,
} from '..';
import { IItem } from '../types/todo';

// Create component of function

const someTodo: IItem[] = [
  { id: '1', text: 'first' },
  { id: '2', text: 'second' },
  { id: '3', text: 'third' },
];

export const App: React.FC = () => (
  <>
    <TodoList items={someTodo} />
    <ClickStatistic />
    <GetPokemon />
    <NewTodo todos={someTodo} />
    <AddTodo />
    <NewAddTodo />
  </>
);

// Create component of class

// class App extends React.Component {
//   render() {
//     return <div className="App"></div>;
//   }
// }
