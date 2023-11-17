//   Constructor

(() => {
  class House {
    public street: string;

    constructor(n: string) {
      this.street = n;
    }
  }

  const house1 = new House('Holodnogorskaya');
  const house2 = new House('Poltavsky shlah');
  const house3 = new House('Permska');

  console.log(house1.street);
  console.log(house2.street);
  console.log(house3.street);

  // .....

  class Animal {
    public say() {
      console.log('Nothing to say');
    }
  }

  new Animal().say();

  class Cat extends Animal {
    public say() {
      console.log('Meow');
    }
  }

  new Cat().say();

  class Dog extends Animal {
    public say() {
      console.log('Woof');
    }
  }
  new Dog().say();
})();

//   Methods

(() => {
  class Animal {
    public name: string;

    constructor(n: string) {
      this.name = n;
    }

    showName(this: Animal): void {
      console.log("It's name is :" + this.name);
    }
  }

  const dog = new Animal('Boni');
  dog.showName();

  const otherDog = { name: 'Han', showName: dog.showName };

  otherDog.showName();

  // ...

  class House {
    street: string;

    constructor(n: string) {
      this.street = n;
    }

    showAddress(this: House) {
      console.log('Address: ' + this.street);
    }
  }

  const house = new House('Middle-earth');
  house.showAddress();

  const houseCopy = { street: 'Dummy', showAddress: house.showAddress };
  houseCopy.showAddress();
})();

//   Access modifire

(() => {
  class Train {
    private name: string;
    private carriages: string[] = [];

    constructor(n: string) {
      this.name = n;
    }

    public showName(): void {
      console.log(this.name);
    }

    public addCarriages(carriage: string): void {
      this.carriages.push(carriage);
    }

    public showCarriages(): void {
      console.log(this.carriages);
    }
  }
  const train = new Train('The Polar Express');

  train.showName();
  train.addCarriages('first-carriage');
  train.addCarriages('second-carriage');
  train.addCarriages('third-carriage');
  train.showCarriages();

  class A {
    private privateProp: string = 'private';
    protected protectedProp: string = 'protected';
    public publicProp: string = 'public';

    showPrivateProp() {
      console.log(this.privateProp);
    }
  }

  class B extends A {
    showProtectedProp() {
      console.log(this.protectedProp);
    }
  }
  const a = new A();
  const b = new B();

  console.log(a.publicProp);

  a.showPrivateProp();
  b.showProtectedProp();
})();

(() => {
  class House {
    private street: string;
    private tenants: string[] = [];

    constructor(n: string) {
      this.street = n;
    }

    public showAddress(this: House) {
      console.log('Address: ' + this.street);
    }

    public addTenant(tenant: string) {
      this.tenants.push(tenant);
    }

    public showTenants() {
      console.log(this.tenants);
    }
  }

  const house = new House('Middle-earth');

  house.showAddress();
  house.addTenant('Vlad');
  house.addTenant('Alina');

  house.showTenants();
})();

//   Short initializetion

(() => {
  class A {
    constructor(private id: number, private name: string) {
      this.id = id;
      this.name = name;
    }

    showThings() {
      console.log('id: ' + this.id);
      console.log('name: ' + this.name);
    }
  }

  new A(1, 'Valera').showThings();

  class House {
    constructor(private type: string, private name: string) {}

    public showType(): void {
      console.log('House type is a ' + this.type);
    }

    public showName(): void {
      console.log('House name is a ' + this.name);
    }
  }

  const woodHouse = new House('Wood', 'House');

  woodHouse.showName();
  woodHouse.showType();

  const rockHouse = new House('Rock', 'House');

  rockHouse.showName();
  rockHouse.showType();
})();

//   Readonly

(() => {
  class House {
    constructor(private readonly type: string) {
      this.type == type;
    }

    showType() {
      console.log('Type: ' + this.type);
    }

    // changeType(type: string): void {
    //   this.type = type;
    // }
    //  Error! = Cannot assign to "type" because it is a read-only property.
  }

  new House('NEW TYPE OF CLASS').showType();

  class A {
    constructor(public readonly type: string) {}

    public aType() {
      console.log(this.type);
    }
  }

  const classA = new A('new type classes - A');

  classA.aType();
})();

//   Inheritance

(() => {
  class House {
    private tenants: string[] = [];

    constructor(public readonly type: string, private street: string) {}

    public showAddress(this: House): void {
      console.log('Address: ' + this.street);
    }

    public showType(this: House): void {
      console.log('House type: ' + this.type);
    }

    public addTenant(tenant: string) {
      this.tenants.push(tenant);
    }

    public showTenants(): void {
      if (this.tenants.length === 0) {
        console.log('Sorry, but house is empty');
      } else {
        console.log(this.tenants);
      }
    }
  }

  class StoneHouse extends House {
    private chargeOfTheHouse: string;

    constructor(street: string, generalTenant: string) {
      super('Stone-House', street);

      this.chargeOfTheHouse = generalTenant;
      this.addTenant(generalTenant);
    }

    public showTenants(): void {
      console.log('General: ' + this.chargeOfTheHouse);

      super.showTenants();
    }
  }

  const stoneHouse = new StoneHouse('Glory to Ukraine 333', 'Vlad');

  stoneHouse.showType();
  stoneHouse.showAddress();
  stoneHouse.addTenant('Valera');
  stoneHouse.addTenant('Grisha');
  stoneHouse.addTenant('Tolya');
  stoneHouse.showTenants();

  class WoodHouse extends House {
    private chargeOfTheHouse: string;

    constructor(street: string, generalTenant: string) {
      super('Wood-Houser', street);

      this.chargeOfTheHouse = generalTenant;
      this.addTenant(generalTenant);
    }

    public showAllTenants(): void {
      console.log('Geteral: ' + this.chargeOfTheHouse);

      super.showTenants();
    }
  }

  const woodHouse = new WoodHouse('AzGO', 'lezver');

  woodHouse.showType();
  woodHouse.showAllTenants();
  woodHouse.addTenant('rascul');
  woodHouse.addTenant('hick');
  woodHouse.showAllTenants();
  woodHouse.showAddress();
})();

//   Getter/Setter

(() => {
  type PersonInformation = {
    firstName?: string;
    lastName?: string;
  };

  class Person {
    private presonInfo: PersonInformation = {};

    set firstName(value: string) {
      console.log('firstName added');

      this.presonInfo.firstName = value;
    }

    set lastName(value: string) {
      console.log('lastName added');

      this.presonInfo.lastName = value;
    }

    get info() {
      const { presonInfo } = this;

      return `${presonInfo.firstName} ${presonInfo.lastName}`;
    }
  }

  const person = new Person();

  person.firstName = 'Petha';
  person.lastName = 'Pupkin';

  console.log(person.info);
})();

//   Static method and property

(() => {
  class UseStatic {
    private static count: number = 0;

    constructor() {
      UseStatic.count += 1;
    }

    public static itStaticMethod(): void {
      console.log('Run static method');
    }

    public showCount(): void {
      console.log(UseStatic.count);
    }
  }

  UseStatic.itStaticMethod();

  const obj1 = new UseStatic();
  const obj2 = new UseStatic();
  const obj3 = new UseStatic();

  obj1.showCount();
  obj2.showCount();
  obj3.showCount();

  class MyCalc {
    public static add(prop1: number, prop2: number): number {
      return prop1 + prop2;
    }
    public static subtract(prop1: number, prop2: number): number {
      return prop1 - prop2;
    }
    public static multiplication(prop1: number, prop2: number): number {
      return prop1 * prop2;
    }

    public static division(prop1: number, prop2: number): number {
      return prop1 / prop2;
    }
  }

  console.log(MyCalc.add(11, 22));
  console.log(MyCalc.subtract(11, 22));
  console.log(MyCalc.multiplication(11, 22));
  console.log(MyCalc.division(11, 22));
})();

//   Abstract classes

(() => {
  abstract class Plane {
    protected pilotInCabin: boolean = false;

    public sitInPlane() {
      this.pilotInCabin = true;
    }

    public abstract startEngine(): boolean;
  }

  class Maize extends Plane {
    public startEngine() {
      return true;
    }
  }

  class Boeing extends Plane {
    public startEngine() {
      return true;
    }
  }

  const maize = new Maize();
  const boeing = new Boeing();

  maize.sitInPlane();
  boeing.sitInPlane();

  console.log(maize);
  console.log(boeing);

  console.log(maize.startEngine());
  console.log(boeing.startEngine());

  abstract class Taxi {
    protected driverInCar: boolean = false;

    public sitInCar(): void {
      this.driverInCar = true;
    }

    public abstract startEngine(): string;
  }

  class Tesla extends Taxi {
    public startEngine(): string {
      return 'Pe-e-e-e-e-e';
    }
  }

  class Audi extends Taxi {
    public startEngine(): string {
      return 'Drt-tr-tr-tr-tr';
    }
  }

  const tesla = new Tesla();
  const audi = new Audi();

  tesla.sitInCar();
  audi.sitInCar();

  console.log(tesla.startEngine());
  console.log(audi.startEngine());
})();

//   Interface

(() => {
  interface IPerson {
    name: string;
    age: number;

    greet(phrase1: string, phrase2: string): void;
  }

  let user: IPerson;

  user = {
    name: 'Anthony',
    age: 21,

    greet(phrase1, phrase2) {
      console.log(phrase1 + this.name + ', ' + phrase2 + this.age + ' old.');
    },
  };

  user.greet('Hi, my name is: ', ' i`m ');
})();

//   Interface of classes

(() => {
  interface IPerson {
    name: string;
    age: number;

    greet(phrase1: string, phrase2: string): void;
  }

  interface IPilot {
    flyMessage(): void;
  }

  class Pilot implements IPerson, IPilot {
    constructor(public name: string, public age: number) {
      if (this.age < 28) {
        throw new Error('Pilot to young');
      }
    }

    public greet(phrase: string): void {
      console.log(phrase + ' ' + this.name);
    }

    public flyMessage(): void {
      console.log('The plane is climbing, have a nice flight');
    }
    public ageOfCaptain(): void {
      console.log('The age of our captain ' + this.age);
    }
  }

  const pilot = new Pilot('Anthony', 29);

  pilot.greet('You are greeted by the captain of the ship');
  pilot.flyMessage();
  pilot.ageOfCaptain();
})();

(() => {
  interface IPerson {
    name: string;
    age: number;

    greet(phrase: string): void;
  }

  interface IPilot {
    flyMessage(): void;
  }

  class Pilot implements IPerson, IPilot {
    constructor(public name: string, public age: number) {
      if (this.age < 28) {
        throw new Error('Pilot to young!');
      }
    }

    greet(phrase: string): void {
      console.log(phrase + ' ' + this.name + ', his age ' + this.age);
    }

    flyMessage(): void {
      console.log('The plane is climbing, have a nice flight!');
    }
  }

  abstract class Plane {
    protected pilot?: IPilot;

    public sitInPlane(pilot: IPilot): void {
      this.pilot = pilot;
    }
    public abstract startEngine(): boolean;
  }

  class Boeing extends Plane {
    public startEngine(): boolean {
      if (!this.pilot) {
        throw new Error('No pilot in cabin');
      }

      console.log('Start engine');

      this.pilot.flyMessage();

      return true;
    }
  }

  const boeing = new Boeing();
  const pilot = new Pilot('Anthony', 33);

  pilot.greet('You are greeted by the captain of the ship!');
  boeing.sitInPlane(pilot);
  boeing.startEngine();

  class Terrorist implements IPilot {
    bluff(phrase: string): void {
      console.log(phrase);
    }

    flyMessage(): void {
      console.log(
        'Our requirements 9 million, otherwise we can kills everybody hostages'
      );
    }
  }

  const terrorist = new Terrorist();

  terrorist.bluff("We've taken the plane!");
  boeing.sitInPlane(terrorist);
  boeing.startEngine();
})();

//   Readonly

(() => {
  interface ITest {
    readonly name: string;
  }

  const person: ITest = {
    name: 'Anthony',
  };

  console.log(person.name);

  //person.name = 'Ralf'; Cannot assign to "name" because it's a read-only property!
})();

//   Extending Interfaces

(() => {
  interface IPerson {
    name?: string;
    age?: number;

    greet(phrase: string): void;
  }

  interface IPilot extends IPerson {
    flyMessage(): void;
  }

  const pilot: IPilot = {
    name: ' Valentin',
    age: 33,

    greet(phrase: string): void {
      console.log(phrase + ' ' + this.name);
    },

    flyMessage(): void {
      console.log('GO GO GO');
    },
  };

  pilot.greet('Welcome');
  pilot.flyMessage();
  console.log(pilot.age);
})();

(() => {
  // first example
  type AddFunc = (n1: number, n2: number) => number;

  let add: AddFunc;

  add = (n1: number, n2: number) => n1 + n2;

  console.log(add(33, 67));
})();
//  or
(() => {
  // second example

  interface AddFunc {
    (n1: number, n2: number): number;
  }

  let add: AddFunc;
  add = (n1: number, n2: number) => n1 + n2;

  console.log(add(33, 67));
})();

(() => {
  interface IPerson {
    name: string;
    age?: number;
  }

  class Preson implements IPerson {
    age?: number;

    constructor(public name: string) {}

    setPers(n: string, a: number) {
      this.name = n;
      this.age = a;
    }
  }

  const person = new Preson('Vlad');

  console.log(person.name);

  person.setPers('Alosha', 33);

  console.log(person);
})();

//   Unified Modeling Language (UML)

(() => {
  class Animal {
    constructor(public name: string) {}

    say() {
      console.log('Nothing to say');
    }
  }

  class Cat extends Animal {
    constructor(name: string, private speed: number) {
      super(name);
    }

    say() {
      console.log('Meow!');
    }

    run(time: number) {
      return `${this.name} run at speed ${this.speed} in the course of ${time} seconds`;
    }
  }

  const cat = new Cat('Murka', 10);

  cat.say();
  console.log(cat.run(30));
})();

//   Dependence

(() => {
  type ItemType = {
    name: string;
  };

  class Catalog {
    showCatalog(items: ItemType[]) {
      items.forEach(item => console.log(item.name));
    }
  }

  class Items {
    private items: ItemType[] = [];
    setItem(name: string) {
      this.items.push({ name });
    }

    getItems(): ItemType[] {
      return this.items;
    }
  }

  const items = new Items();
  const catalog = new Catalog();

  items.setItem('Catalog 1');
  items.setItem('Catalog 2');
  items.setItem('Catalog 3');

  catalog.showCatalog(items.getItems());
})();

//   Association

(() => {
  class DB {
    connection(): void {
      console.log('Db connected');
    }
  }

  class Server {
    constructor(private database: DB) {}

    init() {
      this.database.connection();
    }
  }

  const db = new DB();
  const server = new Server(db);

  server.init();
})();

//   Aggregation

(() => {
  class Person {
    constructor(public name: string) {}
  }

  class Party {
    private guests: Person[] = [];

    addGuest(guest: Person): void {
      this.guests.push(guest);
    }

    showGuests(): void {
      console.log(this.guests);
    }
  }

  const party = new Party();

  const guest1 = new Person('Max');
  const guest2 = new Person('Anton');
  const guest3 = new Person('Nikita');

  party.addGuest(guest1);
  party.addGuest(guest2);
  party.addGuest(guest3);

  party.showGuests();
})();

//   Composition

(() => {
  class Person {
    constructor(public name: string) {}
  }

  class Party {
    private friends: Person[] = [];

    addFriend(name: string): void {
      const friend = new Person(name);

      this.friends.push(friend);
    }

    showAllFriends(): void {
      console.log(this.friends);
    }
  }

  const party = new Party();

  party.addFriend('Max');
  party.addFriend('Anton');
  party.addFriend('Nikita');

  party.showAllFriends();
})();

//   Singleton

(() => {
  class Singleton {
    private static instance: Singleton;

    private constructor() {}

    public static getInstance(): Singleton {
      if (!Singleton.instance) Singleton.instance = new Singleton();

      return Singleton.instance;
    }

    public someBusinessLogic() {
      //...
    }
  }

  const s1 = Singleton.getInstance();
  const s2 = Singleton.getInstance();

  if (s1 === s2) {
    console.log('The same object');
  } else {
    console.log('Something is wrong, we received different objects');
  }
})();

//  or

(() => {
  class Singleton {
    private static instance: Singleton;

    constructor() {
      if (Singleton.instance) {
        return Singleton.instance;
      }

      Singleton.instance = this;

      return Singleton.instance;
    }

    public someBusinessLogic() {
      // ...
    }
  }

  const s1 = new Singleton();
  const s2 = new Singleton();

  if (s1 === s2) {
    console.log('The same object');
  } else {
    console.log('Something is wrong, we received different objects');
  }
})();

//   Factory

(() => {
  abstract class Creator {
    public abstract factoryMethod(): IProduct;

    public someOperation(): string {
      const product = this.factoryMethod();

      return `Creator: I'm starting ${product.operation()}`;
    }
  }

  interface IProduct {
    operation(): string;
  }

  class ConcreteProduct1 implements IProduct {
    public operation(): string {
      return 'ConcreteProduct1';
    }
  }

  class ConcreteProduct2 implements IProduct {
    public operation(): string {
      return 'ConcreteProduct2';
    }
  }

  class ConcreteCreator1 extends Creator {
    public factoryMethod(): IProduct {
      return new ConcreteProduct1();
    }
  }

  class ConcreteCreator2 extends Creator {
    public factoryMethod(): IProduct {
      return new ConcreteProduct2();
    }
  }
  const concrete1 = new ConcreteCreator1();
  const concrete2 = new ConcreteCreator2();

  console.log(concrete1.someOperation());
  console.log(concrete2.someOperation());
})();

//

(() => {
  interface IProduct {
    getInfo(): void;
  }

  class Small implements IProduct {
    getInfo(): void {
      console.log("I'm small");
    }
  }

  class Big implements IProduct {
    getInfo(): void {
      console.log("I'm Big");
    }
  }

  class Factory {
    private obj = {
      small: Small,
      big: Big,
    } as any;

    create(type: string): IProduct {
      const { obj } = this;

      type = type.toLowerCase();

      if (!obj[type]) {
        throw new Error('No classes to create');
      }

      return new obj[type]();
    }
  }

  const factory = new Factory();

  const small = factory.create('small');
  const big = factory.create('big');

  small.getInfo();
  big.getInfo();

  // const test = factory.create('test'); Error! No classes to create
})();

//

(() => {
  const obj: { name: string; foo: Function } = {
    name: 'test',
    foo(): void {
      console.log(this.name);
    },
  };

  obj.foo();
})();

//

(() => {})();

//
