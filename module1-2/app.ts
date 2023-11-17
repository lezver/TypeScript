(() => {
  const button = document.querySelector('button')! as HTMLButtonElement;
  const input1 = document.getElementById('num1')! as HTMLInputElement;
  const input2 = document.getElementById('num2')! as HTMLInputElement;

  const add = (in1: number, in2: number) => in1 + in2;

  button?.addEventListener('click', () =>
    console.log(add(Number(input1.value), Number(input2.value)))
  );
})();

(() => {
  let arrAny: any[];

  arrAny = [1, 'test', 2];

  console.log(arrAny);

  let arrString: string[] = [];

  console.log(arrString);

  let arrNumber: number[] = [];

  arrNumber = [1, 2, 3];

  console.log(arrNumber);
})();

(() => {
  const obj: { name: string } = { name: 'Vlad' };

  obj.name = 'test';

  console.log(obj);
})();

(() => {
  const obj: { name?: string } = {};

  console.log(obj);

  obj.name = 'Vlad';

  console.log(obj);
})();

(() => {
  const data: {
    id: number;
    price: number;
    permission: string[];
    details: {
      title: string;
      description?: string;
    };
  } = {
    id: 1,
    price: 10.88,
    permission: ['read', 'write'],
    details: {
      title: 'New product',
      description: 'This is awesome product!',
    },
  };

  console.log(data);
})();

// Any

(() => {
  let some: any;

  some = 'test';

  let num: number;

  num = some;

  console.log(num);
})();

//   Unknown

(() => {
  let some: unknown;
  some = 10;

  let num: number;

  if (typeof some === 'number') console.log((num = some));
})();

//   Tuple

(() => {
  let fixed: [string, number];

  fixed = ['test', 11];

  console.log(fixed);

  // push - don't use!

  fixed.push('add this text');

  console.log("push - don't use!: ", fixed);
})();

//   Enum

(() => {
  enum Role {
    ADMIN,
    USER,
  }

  const person = {
    admin: Role.ADMIN,
    user: Role.USER,
  };

  if (person.admin === Role.ADMIN) console.log('Role: ', Role.ADMIN);
  if (person.user === Role.USER) console.log('Role: ', Role.USER);
})();

//   Union Type

(() => {
  let union: string | number;

  union = 'text';
  console.log(union);

  union = 12;
  console.log(union);
})();

(() => {
  const combine = (param1: string | number, param2: string | number) =>
    typeof param1 === 'number' && typeof param2 === 'number'
      ? param1 + param2
      : param1.toString() + ' ' + param2.toString();

  console.log(combine(1, 2));
  console.log(combine('this is', 'a test'));
})();

//   Literal type

(() => {
  let literal: 'first' | 'second';

  literal = 'first';

  const greeting = (action: 'hello' | 'bye') =>
    action === 'hello' ? console.log('Hello user!') : console.log('Bye user!');

  greeting('bye');
  greeting('hello');

  const fruit: string[] = [];

  const workWithFruit = (
    arr: string[],
    value: string,
    action: 'add' | 'delete'
  ) => (action === 'add' ? arr.push(value) : arr.splice(arr.indexOf(value), 1));

  workWithFruit(fruit, 'Banana', 'add');
  workWithFruit(fruit, 'Apple', 'add');
  workWithFruit(fruit, 'Pear', 'add');
  workWithFruit(fruit, 'Arange', 'add');
  workWithFruit(fruit, 'Arange', 'delete');
  workWithFruit(fruit, 'Orange', 'add');

  console.log(fruit);
})();

//   Return type

(() => {
  const returnResult = (firstValue: number, secondValue: number): number =>
    firstValue * secondValue;

  console.log(returnResult(4, 4));

  const person = (name: string): { name: string } => ({ name });

  console.log(person('lezver'));
})();

//   Void

(() => {
  const printSome = (): void => {
    console.log('Some text');
  };

  printSome();
})();

//   Never
(() => {
  const customError = (message: string, status: number): never => {
    throw new Error(`${message}, status: ${status}`);
  };

  // customError("Some Error", 400);
})();

//   Function type

(() => {
  let callback: (num: number) => void;

  callback = num => {
    console.log(num);
  };

  callback(4);

  const calc = (
    param1: number,
    param2: number,
    callback: (num1: number, num2: number) => number
  ): void => {
    console.log('Result: ', callback(param1, param2));
  };

  calc(1, 1, (num1, num2) => num1 + num2);
  calc(13, 43, (num1, num2) => num1 - num2);

  //............................................

  const practicCalc = (
    firstValue: number,
    secondValue: number,
    callback: (firstValue: number, secondValue: number) => number
  ): number => callback(firstValue, secondValue);

  console.log(
    practicCalc(33, 33, (firstValue, secondValue) => firstValue * secondValue)
  );

  console.log(
    practicCalc(11, 33, (firstValue, secondValue) => firstValue + secondValue)
  );
})();

//   Custom types

(() => {
  type DatabaseDate = {
    readonly id: number; // only read this key
    price: number;
    permission: string[];
    details: {
      title: string;
      description?: string;
    };
  };

  const data: DatabaseDate = {
    id: 1,
    price: 2,
    permission: ['red', 'green', 'blue'],
    details: {
      title: 'New product',
      description: 'This is awesome product!',
    },
  };

  console.log(data);

  const article: DatabaseDate = {
    id: 2,
    price: 999,
    permission: ['yes', 'no'],
    details: {
      title: 'Apple',
      description: 'Original product',
    },
  };

  console.log(article);

  type UserSchema = {
    readonly firstName: string;
    readonly secondName: string;
    age?: number;
  };

  const firstUser: UserSchema = {
    firstName: 'Vladislav',
    secondName: 'Gulida',
    age: 29,
  };

  console.log(firstUser);

  const secondUser: UserSchema = {
    firstName: 'Alina',
    secondName: 'Gulida',
  };

  console.log(secondUser);

  secondUser.age = 30;

  console.log(secondUser);
})();

(() => {
  const optional = (num?: number): void => {
    console.log(num);
  };

  optional(); // undefined

  optional(9); // 9
})();

(() => {
  type CustomType = {
    name: string;
    sex?: 'male' | 'female';
  };

  const person: CustomType = {
    name: 'Valera',
  };

  console.log(person);

  person.sex = 'male';

  console.log(person);

  const person1: CustomType = {
    name: 'Jesika',
  };

  console.log(person1);

  person1.sex = 'female';

  console.log(person1);
})();

//   Practice

(() => {
  let age: number = 50;
  let name: string = 'Max';
  let toggle: boolean = true;
  let empty: null = null;
  let notInitialize: undefined = undefined;
  let callback = (a: number): number => 100 + a;
  console.log(notInitialize, empty, toggle, name, age, callback(10));

  let anything: any = -20;
  anything = 'text';
  anything = {};

  console.log(anything);

  let some: unknown;

  some = 'text';

  let str: string;

  if (typeof some === 'string') console.log((str = some));

  let person: [string, number] = ['max', 21];

  console.log(person);

  enum Status {
    LOADING,
    READY,
  }

  const download = {
    loading: Status.LOADING,
    ready: Status.READY,
  };

  if (download.loading === Status.LOADING) console.log('loading...');
  if (download.ready === Status.READY) console.log('ready!');

  let union: string | number;

  union = 333;

  console.log(union);

  union = '333';

  console.log(union);

  const colors: string[] = [];

  const workWithColors = (
    arr: string[],
    value: string,
    action: 'enable' | 'disable'
  ) =>
    action === 'enable' ? arr.push(value) : arr.splice(arr.indexOf(value), 1);

  workWithColors(colors, 'red', 'enable');
  workWithColors(colors, 'blue', 'enable');
  workWithColors(colors, 'sadfasf', 'enable');
  workWithColors(colors, 'sadfasf', 'disable');
  workWithColors(colors, 'green', 'enable');

  console.log(colors);

  const showMessage = (message: string): void => {
    console.log(message);
  };

  showMessage('test void function');

  const calc = (num1: number, num2: number): number => num1 + num2;

  console.log(calc(213, 532));

  const customError = (message: string, status: number): never => {
    throw new Error(`message: ${message}, status: ${status}`);
  };

  // customError('some error', 400);

  type CustomPage = {
    readonly title: string;
    likes: number;
    accounts: string[];
    status: 'open' | 'close';
    details?: {
      createAt: Date;
      updateAt: Date;
    };
  };

  const page1: CustomPage = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
      createAt: new Date('2021-01-01'),
      updateAt: new Date('2021-05-01'),
    },
  };

  const page2: CustomPage = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
  };
})();
