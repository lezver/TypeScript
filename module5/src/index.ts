//   Intersection Types

(() => {
  // about type
  type Admin = {
    name?: string;
    privilegs?: string[];
  };

  type Employee = {
    name?: string;
    startDate: Date;
  };
  type ElevatedEmployee = Admin & Employee;

  const e1: ElevatedEmployee = {
    name: 'Anita',
    privilegs: ['drop-all', 'assist'],
    startDate: new Date(),
  };

  console.log(e1);

  type Pro = {
    name: string;
    hours: number;
  };
  type Default = {
    name: string;
    startDate: Date;
  };

  type Symbiosis = Pro & Default;

  const user1: Symbiosis = {
    name: 'Topic',
    hours: 11111,
    startDate: new Date(),
  };

  console.log(user1);
})();

(() => {
  // about interface

  interface IAdmin {
    name?: string;
    privilegs?: string[];
  }

  interface IEmployee {
    name?: string;
    startDate: Date;
  }

  interface IElevatedEmployee extends IEmployee, IAdmin {}

  const e1: IElevatedEmployee = {
    name: 'Illidan',
    privilegs: ['boss', 'hard'],
    startDate: new Date(),
  };

  console.log(e1);

  interface Pro {
    name: string;
    hours: number;
  }
  interface Default {
    name: string;
    startDate: Date;
  }

  interface Symbiosis extends Pro, Default {}

  const user1: Symbiosis = {
    name: 'asdf',
    hours: 123,
    startDate: new Date(),
  };

  console.log(user1);
})();

//   Type of Guards

(() => {
  type ComplexType = string | number;

  const combine = (a: ComplexType, b: ComplexType) =>
    typeof a === 'string' || typeof b === 'string'
      ? a.toString() + ' ' + b.toString()
      : a + b;

  console.log(combine('Hello', 'there!'));
  console.log(combine(55, 45));
  console.log(combine('test', 45));

  type someType = number | string;

  const reviewOfType = (a: someType, b: someType) =>
    typeof a === 'string' || typeof b === 'string'
      ? console.log(a.toString() + ' ' + b.toString())
      : console.log(a + b);

  reviewOfType('madic of', 'battle');
  reviewOfType(55, 33);
  reviewOfType('Your number is:', 33);
})();

(() => {
  type Admin = {
    name: string;
    privileges: string[];
  };

  type Employee = {
    name: string;
    startDate: Date;
  };

  type UnknownOblect = Employee | Admin;

  const el: UnknownOblect = {
    name: 'Death',
    privileges: ['imortal', "kill's of everything"],
    startDate: new Date(),
  };

  const showFilds = (el: UnknownOblect) => {
    console.log('Name: ' + el.name);

    if ('privileges' in el) {
      console.log(el.privileges);
    }
    if ('startDate' in el) {
      console.log(el.startDate);
    }
  };

  showFilds(el);

  type AsusTuf = {
    name: string;
    rgb: boolean;
  };

  type AsusRog = {
    name: string;
    coolers: number;
  };

  type GPU = AsusTuf | AsusRog;

  const g1: GPU = {
    name: 'TUF-RTX4090',
    rgb: true,
  };

  const g2: GPU = {
    name: 'ROG-RTX4090',
    coolers: 3,
  };

  const gpu = (el: GPU): void => {
    console.log('Name: ' + el.name);

    if ('rgb' in el) {
      console.log(el.rgb);
    }

    if ('coolers' in el) {
      console.log(el.coolers);
    }
  };

  gpu(g1);
  gpu(g2);
})();

//   Type of Guards for classes

(() => {
  class Car {
    public drive(): void {
      console.log('Driving a car ...');
    }
  }

  class Track {
    public drive(): void {
      console.log('Driving a track ...');
    }

    public loadCargo(amount: number): void {
      console.log('Loading cargo ...' + amount);
    }
  }

  type Vehicle = Car | Track;

  const car = new Car();
  const track = new Track();

  const useVehicle = (vehicle: Vehicle): void => {
    vehicle.drive();

    if (vehicle instanceof Track) vehicle.loadCargo(1000);
  };

  useVehicle(car);
  useVehicle(track);

  abstract class Guy {
    constructor(public name: string) {}
  }

  class GoodGuy extends Guy {
    public advice(): void {
      console.log(this.name + ' sey: ADVICE');
    }
  }
  class BadGuy extends Guy {
    public insult(): void {
      console.log(this.name + ' sey: INSULT');
    }
  }

  const goodGuy = new GoodGuy('Grisha');
  const badGuy = new BadGuy('Petya');

  const askSomeGuy = (guy: Guy): void => {
    if (guy instanceof GoodGuy) {
      guy.advice();
    }
    if (guy instanceof BadGuy) {
      guy.insult();
    }
  };

  askSomeGuy(goodGuy);
  askSomeGuy(badGuy);
})();

//   Type Casting

(() => {
  const inputEmail = document.createElement('input');
  inputEmail.id = 'inputEmail';
  document.body.append(inputEmail);

  const input = document.getElementById('inputEmail') as HTMLInputElement;
  input.value = 'test@email.com';
})();
// or
(() => {
  const inputName = document.createElement('input');
  inputName.id = 'inputName';

  document.body.append(inputName);

  if (inputName) {
    (inputName as HTMLInputElement).value = 'Alina';
  }
})();

(() => {
  const inputTest = document.createElement('input');
  inputTest.id = 'inputTest1';
  document.body.append(inputTest);

  const inputTest1 = document.getElementById('inputTest1');

  if (inputTest1) {
    (inputTest1 as HTMLInputElement).value = 'test1';
  }
})();

(() => {
  const inputTest = document.createElement('input');
  inputTest.id = 'inputTest2';
  document.body.append(inputTest);

  const inputTest2 = document.getElementById('inputTest2') as HTMLInputElement;

  inputTest2.value = 'test2';
})();

//   Index Properties

(() => {
  type Person = {
    name: string;
    [x: string]: string | boolean;
  };
  const user1: Person = {
    name: 'Alex',
    gender: 'male',
    countre: 'Ukraine',
    isYoung: true,
  };

  const user2: Person = {
    name: 'Masha',
    gender: 'female',
    countre: 'Poland',
    isYoung: false,
  };

  console.log(user1);
  console.log(user2);
})();
// equally
(() => {
  interface Person {
    name: string;
    [x: string]: string | number;
  }

  const user1: Person = {
    name: 'Alex',
    gender: 'male',
    countre: 'Ukraine',
    age: 33,
  };

  const user2: Person = {
    name: 'Masha',
    gender: 'female',
    countre: 'Poland',
    age: 22,
  };

  console.log(user1);
  console.log(user2);
})();

//   Optional Chaining

(() => {
  interface Person {
    name: string;
    additionInfo?: {
      someInfo: string;
    };
  }

  const user: Person = {
    name: 'Alex',
  };
  console.log(user?.additionInfo?.someInfo);
  // without potional chaining
  console.log(user.additionInfo && user.additionInfo.someInfo);
})();

//   Nullish Coalescing

(() => {
  const userInput: string = '';

  const store = userInput ?? 'DEFAULT';

  console.log(store);
})();

//   Function overloads

(() => {
  type combineOfTypes = string | number;

  function add(a: number, b: number): number;
  function add(a: string, b: string): string;
  function add(a: string, b: number): string;
  function add(a: number, b: string): string;

  function add(a: combineOfTypes, b: combineOfTypes) {
    if (typeof a === 'string' || typeof b === 'string')
      return a.toString() + ' ' + b.toString();
    return a + b;
  }

  console.log('function add: ' + add(1, 1));
  console.log('function add: ' + add('Hi', 'Alex'));
})();

//   Generics

(() => {
  let arr: Array<string | number> = [];

  arr.push('test');
  arr.push(11);
  arr.push(3);
  arr.push('generic');

  console.log(arr);

  const promise: Promise<string> = new Promise(resolve =>
    setInterval(() => resolve('Done!'), 1000)
  );

  promise.then(data => {
    console.log(data);
  });
})();

//   Generics function - method

(() => {
  type Name = {
    name: string;
  };
  type Age = {
    age: number;
  };

  function merge(objA: Name, objB: Age) {
    return Object.assign({}, objA, objB);
  }
  const merged = merge({ name: 'Alisa' }, { age: 28 });

  console.log(merged.name);
})();

(() => {
  type Person = {
    name: string;
  };
  type AdditionFields = {
    age: number;
  };
  function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
  }
  const merged = merge<Person, AdditionFields>({ name: 'Alisa' }, { age: 28 });
  console.log(merged.age);

  function merge1<T, U>(objA: T, objB: U) {
    return Object.assign({}, objA, objB);
  }

  const merged1 = merge1({ name: 'Alosha' }, { age: 44 });
  console.log(merged1.name, merged1.age);
})();

(() => {
  function merge<T, U>(objA: T, objB: U) {
    return Object.assign({}, objA, objB);
  }

  type Name = {
    name: string;
  };
  type Age = {
    age: number;
  };

  const merged = merge<Name, Age>({ name: 'BlaBla' }, { age: 4321 });

  console.log(merged.name, merged.age);
})();

//   Extends

(() => {
  function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
  }
  const merged = merge({ name: 'Alisa' }, { age: 23 });

  console.log(merged);

  interface ILength {
    length: number;
  }

  function getLength<T extends ILength>(value: T) {
    return value.length;
  }

  console.log(getLength([1, 2, 3]));
  console.log(getLength('test'));

  const test = <T>(value: T): T[] => [value];

  const try1 = test<string>('bla-bla car');
  const try2 = test<number>(123);

  console.log(try1, try2);

  type someObj = {
    name: string;
    age: number;
    sex: string;
    isMerrid: boolean;
  };

  const someFoo = <T extends someObj>(obj: T): void => console.log(obj);

  someFoo<someObj>({ name: 'Alisha', age: 22, sex: 'female', isMerrid: false });
})();

//   keyof

(() => {
  function extractValue<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key];
  }

  console.log(extractValue({ name: 'Sergai' }, 'name'));

  interface User {
    name: string;
    age?: number;
    date?: Date;
    sex: string;
    isLove: boolean;
  }

  const anjela: User = {
    name: 'Anjela',
    age: 18,
    sex: 'female',
    isLove: false,
  };

  const foo = <T extends User, U extends keyof T>(obj: T, key: U) =>
    console.log(obj[key]);

  foo(anjela, 'name');
  foo(anjela, 'age');
  foo(anjela, 'isLove');
})();

//   Generic classes
(() => {
  class StoreClass<T> {
    private data: T[] = [];

    addItem(item: T): void {
      this.data.push(item);
    }

    getItems(): T[] {
      return this.data;
    }
  }

  const store = new StoreClass<string>();

  store.addItem('test1');
  store.addItem('test2');
  store.addItem('test3');
  console.log(store.getItems());

  class ListOfNumbers<T extends number> {
    private list: T[] = [];

    public addNumber(item: T): void {
      this.list.push(item);
    }

    public showList(): T[] {
      return this.list;
    }
  }

  const listOfNumbers = new ListOfNumbers();

  listOfNumbers.addNumber(1);
  listOfNumbers.addNumber(2);
  listOfNumbers.addNumber(3);
  console.log('this is: LIST OF NUMBERS', listOfNumbers.showList());

  interface ExampleObj {
    name: string;
    price: number;
    id: number;
  }

  class ListOfObj<T extends ExampleObj> {
    private list: T[] = [];

    public addObj(obj: T): void {
      this.list.push(obj);
    }

    public showList(): T[] {
      return this.list;
    }

    public removeObj(id: number): T[] {
      return (this.list = this.list.filter(item => item.id !== id));
    }
  }

  const listOfObj = new ListOfObj();

  listOfObj.addObj({ id: 1, name: 'potato', price: 10 });
  listOfObj.addObj({ id: 2, name: 'banana', price: 50 });
  listOfObj.addObj({ id: 3, name: 'orange', price: 80 });

  console.log(listOfObj.showList());

  listOfObj.removeObj(2);

  console.log(listOfObj.showList());
})();

//   Utility types - Partial

(() => {
  interface IPerson {
    name: string;
    age: number;
  }

  function createPerson(name: string, age: number): IPerson {
    const person: Partial<IPerson> = {};

    person.name = name;
    person.age = age;

    return person as IPerson;
  }

  console.log(createPerson('Valdemart', 9999));

  type IUser = {
    name: string;
    age: number;
    sex?: 'male' | 'female';
  };

  const arrowFoo = (
    name: string,
    age: number,
    sex: 'male' | 'female'
  ): IUser => {
    const user: Partial<IUser> = {
      name,
      age,
      sex,
    };

    return user as IUser;
  };

  console.log(arrowFoo('Sukuna', 99999, 'male'));
})();

//   Utility types - Readonly
(() => {
  const arr: Readonly<string[]> = ['one', 'two', 'three', 'four', 'five'];

  console.log(arr);

  type Environment = {
    temperanture: number;
  };
  const temp: Readonly<Environment> = {
    temperanture: 33,
  };

  console.log(temp);

  interface IUser {
    name: string;
  }

  let listOfUsers: Readonly<IUser>[] = [];

  const addUser = <T extends IUser>(obj: T) => listOfUsers.push(obj);

  addUser({ name: 'Lich' });
  addUser({ name: 'Thrall' });
  addUser({ name: 'Bolaff' });
  addUser({ name: 'Deathstar' });

  console.log(listOfUsers);
})();

//   Utility types - Pick

(() => {
  interface Page {
    title: string;
    annotation: string;
    numberPage: number;
    list: string[];
    isOpen: boolean;
  }

  const pageAnnotation: Pick<Page, 'title' | 'annotation'> = {
    title: 'title',
    annotation: 'Short page',
  };
  console.log(pageAnnotation);

  const pageInfo: Pick<Page, 'list' | 'isOpen' | 'numberPage'> = {
    list: ['one', 'two', 'three'],
    isOpen: true,
    numberPage: 99,
  };

  console.log(pageInfo);
})();
