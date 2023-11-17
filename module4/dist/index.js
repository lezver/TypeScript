"use strict";
(() => {
    class House {
        constructor(n) {
            this.street = n;
        }
    }
    const house1 = new House('Holodnogorskaya');
    const house2 = new House('Poltavsky shlah');
    const house3 = new House('Permska');
    console.log(house1.street);
    console.log(house2.street);
    console.log(house3.street);
    class Animal {
        say() {
            console.log('Nothing to say');
        }
    }
    new Animal().say();
    class Cat extends Animal {
        say() {
            console.log('Meow');
        }
    }
    new Cat().say();
    class Dog extends Animal {
        say() {
            console.log('Woof');
        }
    }
    new Dog().say();
})();
(() => {
    class Animal {
        constructor(n) {
            this.name = n;
        }
        showName() {
            console.log("It's name is :" + this.name);
        }
    }
    const dog = new Animal('Boni');
    dog.showName();
    const otherDog = { name: 'Han', showName: dog.showName };
    otherDog.showName();
    class House {
        constructor(n) {
            this.street = n;
        }
        showAddress() {
            console.log('Address: ' + this.street);
        }
    }
    const house = new House('Middle-earth');
    house.showAddress();
    const houseCopy = { street: 'Dummy', showAddress: house.showAddress };
    houseCopy.showAddress();
})();
(() => {
    class Train {
        constructor(n) {
            this.carriages = [];
            this.name = n;
        }
        showName() {
            console.log(this.name);
        }
        addCarriages(carriage) {
            this.carriages.push(carriage);
        }
        showCarriages() {
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
        constructor() {
            this.privateProp = 'private';
            this.protectedProp = 'protected';
            this.publicProp = 'public';
        }
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
        constructor(n) {
            this.tenants = [];
            this.street = n;
        }
        showAddress() {
            console.log('Address: ' + this.street);
        }
        addTenant(tenant) {
            this.tenants.push(tenant);
        }
        showTenants() {
            console.log(this.tenants);
        }
    }
    const house = new House('Middle-earth');
    house.showAddress();
    house.addTenant('Vlad');
    house.addTenant('Alina');
    house.showTenants();
})();
(() => {
    class A {
        constructor(id, name) {
            this.id = id;
            this.name = name;
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
        constructor(type, name) {
            this.type = type;
            this.name = name;
        }
        showType() {
            console.log('House type is a ' + this.type);
        }
        showName() {
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
(() => {
    class House {
        constructor(type) {
            this.type = type;
            this.type == type;
        }
        showType() {
            console.log('Type: ' + this.type);
        }
    }
    new House('NEW TYPE OF CLASS').showType();
    class A {
        constructor(type) {
            this.type = type;
        }
        aType() {
            console.log(this.type);
        }
    }
    const classA = new A('new type classes - A');
    classA.aType();
})();
(() => {
    class House {
        constructor(type, street) {
            this.type = type;
            this.street = street;
            this.tenants = [];
        }
        showAddress() {
            console.log('Address: ' + this.street);
        }
        showType() {
            console.log('House type: ' + this.type);
        }
        addTenant(tenant) {
            this.tenants.push(tenant);
        }
        showTenants() {
            if (this.tenants.length === 0) {
                console.log('Sorry, but house is empty');
            }
            else {
                console.log(this.tenants);
            }
        }
    }
    class StoneHouse extends House {
        constructor(street, generalTenant) {
            super('Stone-House', street);
            this.chargeOfTheHouse = generalTenant;
            this.addTenant(generalTenant);
        }
        showTenants() {
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
        constructor(street, generalTenant) {
            super('Wood-Houser', street);
            this.chargeOfTheHouse = generalTenant;
            this.addTenant(generalTenant);
        }
        showAllTenants() {
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
(() => {
    class Person {
        constructor() {
            this.presonInfo = {};
        }
        set firstName(value) {
            console.log('firstName added');
            this.presonInfo.firstName = value;
        }
        set lastName(value) {
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
(() => {
    class UseStatic {
        constructor() {
            UseStatic.count += 1;
        }
        static itStaticMethod() {
            console.log('Run static method');
        }
        showCount() {
            console.log(UseStatic.count);
        }
    }
    UseStatic.count = 0;
    UseStatic.itStaticMethod();
    const obj1 = new UseStatic();
    const obj2 = new UseStatic();
    const obj3 = new UseStatic();
    obj1.showCount();
    obj2.showCount();
    obj3.showCount();
    class MyCalc {
        static add(prop1, prop2) {
            return prop1 + prop2;
        }
        static subtract(prop1, prop2) {
            return prop1 - prop2;
        }
        static multiplication(prop1, prop2) {
            return prop1 * prop2;
        }
        static division(prop1, prop2) {
            return prop1 / prop2;
        }
    }
    console.log(MyCalc.add(11, 22));
    console.log(MyCalc.subtract(11, 22));
    console.log(MyCalc.multiplication(11, 22));
    console.log(MyCalc.division(11, 22));
})();
(() => {
    class Plane {
        constructor() {
            this.pilotInCabin = false;
        }
        sitInPlane() {
            this.pilotInCabin = true;
        }
    }
    class Maize extends Plane {
        startEngine() {
            return true;
        }
    }
    class Boeing extends Plane {
        startEngine() {
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
    class Taxi {
        constructor() {
            this.driverInCar = false;
        }
        sitInCar() {
            this.driverInCar = true;
        }
    }
    class Tesla extends Taxi {
        startEngine() {
            return 'Pe-e-e-e-e-e';
        }
    }
    class Audi extends Taxi {
        startEngine() {
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
(() => {
    let user;
    user = {
        name: 'Anthony',
        age: 21,
        greet(phrase1, phrase2) {
            console.log(phrase1 + this.name + ', ' + phrase2 + this.age + ' old.');
        },
    };
    user.greet('Hi, my name is: ', ' i`m ');
})();
(() => {
    class Pilot {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            if (this.age < 28) {
                throw new Error('Pilot to young');
            }
        }
        greet(phrase) {
            console.log(phrase + ' ' + this.name);
        }
        flyMessage() {
            console.log('The plane is climbing, have a nice flight');
        }
        ageOfCaptain() {
            console.log('The age of our captain ' + this.age);
        }
    }
    const pilot = new Pilot('Anthony', 29);
    pilot.greet('You are greeted by the captain of the ship');
    pilot.flyMessage();
    pilot.ageOfCaptain();
})();
(() => {
    class Pilot {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            if (this.age < 28) {
                throw new Error('Pilot to young!');
            }
        }
        greet(phrase) {
            console.log(phrase + ' ' + this.name + ', his age ' + this.age);
        }
        flyMessage() {
            console.log('The plane is climbing, have a nice flight!');
        }
    }
    class Plane {
        sitInPlane(pilot) {
            this.pilot = pilot;
        }
    }
    class Boeing extends Plane {
        startEngine() {
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
    class Terrorist {
        bluff(phrase) {
            console.log(phrase);
        }
        flyMessage() {
            console.log('Our requirements 9 million, otherwise we can kills everybody hostages');
        }
    }
    const terrorist = new Terrorist();
    terrorist.bluff("We've taken the plane!");
    boeing.sitInPlane(terrorist);
    boeing.startEngine();
})();
(() => {
    const person = {
        name: 'Anthony',
    };
    console.log(person.name);
})();
(() => {
    const pilot = {
        name: ' Valentin',
        age: 33,
        greet(phrase) {
            console.log(phrase + ' ' + this.name);
        },
        flyMessage() {
            console.log('GO GO GO');
        },
    };
    pilot.greet('Welcome');
    pilot.flyMessage();
    console.log(pilot.age);
})();
(() => {
    let add;
    add = (n1, n2) => n1 + n2;
    console.log(add(33, 67));
})();
(() => {
    let add;
    add = (n1, n2) => n1 + n2;
    console.log(add(33, 67));
})();
(() => {
    class Preson {
        constructor(name) {
            this.name = name;
        }
        setPers(n, a) {
            this.name = n;
            this.age = a;
        }
    }
    const person = new Preson('Vlad');
    console.log(person.name);
    person.setPers('Alosha', 33);
    console.log(person);
})();
(() => {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        say() {
            console.log('Nothing to say');
        }
    }
    class Cat extends Animal {
        constructor(name, speed) {
            super(name);
            this.speed = speed;
        }
        say() {
            console.log('Meow!');
        }
        run(time) {
            return `${this.name} run at speed ${this.speed} in the course of ${time} seconds`;
        }
    }
    const cat = new Cat('Murka', 10);
    cat.say();
    console.log(cat.run(30));
})();
(() => {
    class Catalog {
        showCatalog(items) {
            items.forEach(item => console.log(item.name));
        }
    }
    class Items {
        constructor() {
            this.items = [];
        }
        setItem(name) {
            this.items.push({ name });
        }
        getItems() {
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
(() => {
    class DB {
        connection() {
            console.log('Db connected');
        }
    }
    class Server {
        constructor(database) {
            this.database = database;
        }
        init() {
            this.database.connection();
        }
    }
    const db = new DB();
    const server = new Server(db);
    server.init();
})();
(() => {
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    class Party {
        constructor() {
            this.guests = [];
        }
        addGuest(guest) {
            this.guests.push(guest);
        }
        showGuests() {
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
(() => {
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    class Party {
        constructor() {
            this.friends = [];
        }
        addFriend(name) {
            const friend = new Person(name);
            this.friends.push(friend);
        }
        showAllFriends() {
            console.log(this.friends);
        }
    }
    const party = new Party();
    party.addFriend('Max');
    party.addFriend('Anton');
    party.addFriend('Nikita');
    party.showAllFriends();
})();
(() => {
    class Singleton {
        constructor() { }
        static getInstance() {
            if (!Singleton.instance)
                Singleton.instance = new Singleton();
            return Singleton.instance;
        }
        someBusinessLogic() {
        }
    }
    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();
    if (s1 === s2) {
        console.log('The same object');
    }
    else {
        console.log('Something is wrong, we received different objects');
    }
})();
(() => {
    class Singleton {
        constructor() {
            if (Singleton.instance) {
                return Singleton.instance;
            }
            Singleton.instance = this;
            return Singleton.instance;
        }
        someBusinessLogic() {
        }
    }
    const s1 = new Singleton();
    const s2 = new Singleton();
    if (s1 === s2) {
        console.log('The same object');
    }
    else {
        console.log('Something is wrong, we received different objects');
    }
})();
(() => {
    class Creator {
        someOperation() {
            const product = this.factoryMethod();
            return `Creator: I'm starting ${product.operation()}`;
        }
    }
    class ConcreteProduct1 {
        operation() {
            return 'ConcreteProduct1';
        }
    }
    class ConcreteProduct2 {
        operation() {
            return 'ConcreteProduct2';
        }
    }
    class ConcreteCreator1 extends Creator {
        factoryMethod() {
            return new ConcreteProduct1();
        }
    }
    class ConcreteCreator2 extends Creator {
        factoryMethod() {
            return new ConcreteProduct2();
        }
    }
    const concrete1 = new ConcreteCreator1();
    const concrete2 = new ConcreteCreator2();
    console.log(concrete1.someOperation());
    console.log(concrete2.someOperation());
})();
(() => {
    class Small {
        getInfo() {
            console.log("I'm small");
        }
    }
    class Big {
        getInfo() {
            console.log("I'm Big");
        }
    }
    class Factory {
        constructor() {
            this.obj = {
                small: Small,
                big: Big,
            };
        }
        create(type) {
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
})();
(() => {
    const obj = {
        name: 'test',
        foo() {
            console.log(this.name);
        },
    };
    obj.foo();
})();
(() => { })();
//# sourceMappingURL=index.js.map