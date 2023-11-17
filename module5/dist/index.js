"use strict";
(() => {
    const e1 = {
        name: 'Anita',
        privilegs: ['drop-all', 'assist'],
        startDate: new Date(),
    };
    console.log(e1);
    const user1 = {
        name: 'Topic',
        hours: 11111,
        startDate: new Date(),
    };
    console.log(user1);
})();
(() => {
    const e1 = {
        name: 'Illidan',
        privilegs: ['boss', 'hard'],
        startDate: new Date(),
    };
    console.log(e1);
    const user1 = {
        name: 'asdf',
        hours: 123,
        startDate: new Date(),
    };
    console.log(user1);
})();
(() => {
    const combine = (a, b) => typeof a === 'string' || typeof b === 'string'
        ? a.toString() + ' ' + b.toString()
        : a + b;
    console.log(combine('Hello', 'there!'));
    console.log(combine(55, 45));
    console.log(combine('test', 45));
    const reviewOfType = (a, b) => typeof a === 'string' || typeof b === 'string'
        ? console.log(a.toString() + ' ' + b.toString())
        : console.log(a + b);
    reviewOfType('madic of', 'battle');
    reviewOfType(55, 33);
    reviewOfType('Your number is:', 33);
})();
(() => {
    const el = {
        name: 'Death',
        privileges: ['imortal', "kill's of everything"],
        startDate: new Date(),
    };
    const showFilds = (el) => {
        console.log('Name: ' + el.name);
        if ('privileges' in el) {
            console.log(el.privileges);
        }
        if ('startDate' in el) {
            console.log(el.startDate);
        }
    };
    showFilds(el);
    const g1 = {
        name: 'TUF-RTX4090',
        rgb: true,
    };
    const g2 = {
        name: 'ROG-RTX4090',
        coolers: 3,
    };
    const gpu = (el) => {
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
(() => {
    class Car {
        drive() {
            console.log('Driving a car ...');
        }
    }
    class Track {
        drive() {
            console.log('Driving a track ...');
        }
        loadCargo(amount) {
            console.log('Loading cargo ...' + amount);
        }
    }
    const car = new Car();
    const track = new Track();
    const useVehicle = (vehicle) => {
        vehicle.drive();
        if (vehicle instanceof Track)
            vehicle.loadCargo(1000);
    };
    useVehicle(car);
    useVehicle(track);
    class Guy {
        constructor(name) {
            this.name = name;
        }
    }
    class GoodGuy extends Guy {
        advice() {
            console.log(this.name + ' sey: ADVICE');
        }
    }
    class BadGuy extends Guy {
        insult() {
            console.log(this.name + ' sey: INSULT');
        }
    }
    const goodGuy = new GoodGuy('Grisha');
    const badGuy = new BadGuy('Petya');
    const askSomeGuy = (guy) => {
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
(() => {
    const inputEmail = document.createElement('input');
    inputEmail.id = 'inputEmail';
    document.body.append(inputEmail);
    const input = document.getElementById('inputEmail');
    input.value = 'test@email.com';
})();
(() => {
    const inputName = document.createElement('input');
    inputName.id = 'inputName';
    document.body.append(inputName);
    if (inputName) {
        inputName.value = 'Alina';
    }
})();
(() => {
    const inputTest = document.createElement('input');
    inputTest.id = 'inputTest1';
    document.body.append(inputTest);
    const inputTest1 = document.getElementById('inputTest1');
    if (inputTest1) {
        inputTest1.value = 'test1';
    }
})();
(() => {
    const inputTest = document.createElement('input');
    inputTest.id = 'inputTest2';
    document.body.append(inputTest);
    const inputTest2 = document.getElementById('inputTest2');
    inputTest2.value = 'test2';
})();
(() => {
    const user1 = {
        name: 'Alex',
        gender: 'male',
        countre: 'Ukraine',
        isYoung: true,
    };
    const user2 = {
        name: 'Masha',
        gender: 'female',
        countre: 'Poland',
        isYoung: false,
    };
    console.log(user1);
    console.log(user2);
})();
(() => {
    const user1 = {
        name: 'Alex',
        gender: 'male',
        countre: 'Ukraine',
        age: 33,
    };
    const user2 = {
        name: 'Masha',
        gender: 'female',
        countre: 'Poland',
        age: 22,
    };
    console.log(user1);
    console.log(user2);
})();
(() => {
    var _a;
    const user = {
        name: 'Alex',
    };
    console.log((_a = user === null || user === void 0 ? void 0 : user.additionInfo) === null || _a === void 0 ? void 0 : _a.someInfo);
    console.log(user.additionInfo && user.additionInfo.someInfo);
})();
(() => {
    const userInput = '';
    const store = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
    console.log(store);
})();
(() => {
    function add(a, b) {
        if (typeof a === 'string' || typeof b === 'string')
            return a.toString() + ' ' + b.toString();
        return a + b;
    }
    console.log('function add: ' + add(1, 1));
    console.log('function add: ' + add('Hi', 'Alex'));
})();
(() => {
    let arr = [];
    arr.push('test');
    arr.push(11);
    arr.push(3);
    arr.push('generic');
    console.log(arr);
    const promise = new Promise(resolve => {
        setInterval(() => {
            resolve('Done!');
        }, 1000);
    });
    promise.then(data => {
        console.log(data);
    });
})();
(() => {
    function merge(objA, objB) {
        return Object.assign({}, objA, objB);
    }
    const merged = merge({ name: 'Alisa' }, { age: 28 });
    console.log(merged.name);
})();
(() => {
    function merge(objA, objB) {
        return Object.assign(objA, objB);
    }
    const merged = merge({ name: 'Alisa' }, { age: 28 });
    console.log(merged.age);
    function merge1(objA, objB) {
        return Object.assign({}, objA, objB);
    }
    const merged1 = merge1({ name: 'Alosha' }, { age: 44 });
    console.log(merged1.name, merged1.age);
})();
(() => {
    function merge(objA, objB) {
        return Object.assign({}, objA, objB);
    }
    const merged = merge({ name: 'BlaBla' }, { age: 4321 });
    console.log(merged.name, merged.age);
})();
(() => {
    function merge(objA, objB) {
        return Object.assign(objA, objB);
    }
    const merged = merge({ name: 'Alisa' }, { age: 23 });
    console.log(merged);
    function getLength(value) {
        return value.length;
    }
    console.log(getLength([1, 2, 3]));
    console.log(getLength('test'));
    const test = (value) => [value];
    const try1 = test('bla-bla car');
    const try2 = test(123);
    console.log(try1, try2);
    const someFoo = (obj) => console.log(obj);
    someFoo({ name: 'Alisha', age: 22, sex: 'female', isMerrid: false });
})();
(() => {
    function extractValue(obj, key) {
        return obj[key];
    }
    console.log(extractValue({ name: 'Sergai' }, 'name'));
})();
(() => {
    class StoreClass {
        constructor() {
            this.data = [];
        }
        addItem(item) {
            this.data.push(item);
        }
        getItems() {
            return this.data;
        }
    }
    const store = new StoreClass();
    store.addItem('test1');
    store.addItem('test2');
    store.addItem('test3');
    console.log(store.getItems());
})();
(() => {
    function createPerson(name, age) {
        const person = {};
        person.name = name;
        person.age = age;
        return person;
    }
    console.log(createPerson('Valdemart', 9999));
})();
(() => {
    const arr = ['one', 'two', 'three', 'four', 'five'];
    console.log(arr);
    const temp = {
        temperanture: 33,
    };
    console.log(temp);
})();
(() => {
    const pageAnnotation = {
        title: 'h1',
        numberPage: 3,
    };
    console.log(pageAnnotation);
})();
//# sourceMappingURL=index.js.map