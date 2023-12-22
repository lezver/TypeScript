export interface ITodo {
  id: string;
  text: string;
}

export interface IPropsTodo {
  addTodoInArr: (todo: ITodo) => void;
}

export interface IPropsList {
  todos: ITodo[];
  removeTodoinArr: (id: string) => void;
}
