(function () {
    var button = document.querySelector('button');
    var input1 = document.getElementById('num1');
    var input2 = document.getElementById('num2');
    var add = function (in1, in2) { return in1 + in2; };
    button === null || button === void 0 ? void 0 : button.addEventListener('click', function () {
        return console.log(add(Number(input1.value), Number(input2.value)));
    });
})();
(function () {
    var arrAny;
    arrAny = [1, 'test', 2];
    console.log(arrAny);
    var arrString = [];
    console.log(arrString);
    var arrNumber = [];
    arrNumber = [1, 2, 3];
    console.log(arrNumber);
})();
(function () {
    var obj = { name: 'Vlad' };
    obj.name = 'test';
    console.log(obj);
})();
(function () {
    var obj = {};
    console.log(obj);
    obj.name = 'Vlad';
    console.log(obj);
})();
(function () {
    var data = {
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
(function () {
    var some;
    some = 'test';
    var num;
    num = some;
    console.log(num);
})();
//   Unknown
(function () {
    var some;
    some = 10;
    var num;
    if (typeof some === 'number')
        console.log((num = some));
})();
//   Tuple
(function () {
    var fixed;
    fixed = ['test', 11];
    console.log(fixed);
    // push - don't use!
    fixed.push('add this text');
    console.log("push - don't use!: ", fixed);
})();
//   Enum
(function () {
    var Role;
    (function (Role) {
        Role[Role["ADMIN"] = 0] = "ADMIN";
        Role[Role["USER"] = 1] = "USER";
    })(Role || (Role = {}));
    var person = {
        admin: Role.ADMIN,
        user: Role.USER,
    };
    if (person.admin === Role.ADMIN)
        console.log('Role: ', Role.ADMIN);
    if (person.user === Role.USER)
        console.log('Role: ', Role.USER);
})();
//   Union Type
(function () {
    var union;
    union = 'text';
    console.log(union);
    union = 12;
    console.log(union);
})();
(function () {
    var combine = function (param1, param2) {
        return typeof param1 === 'number' && typeof param2 === 'number'
            ? param1 + param2
            : param1.toString() + ' ' + param2.toString();
    };
    console.log(combine(1, 2));
    console.log(combine('this is', 'a test'));
})();
//   Literal type
(function () {
    var literal;
    literal = 'first';
    var greeting = function (action) {
        return action === 'hello' ? console.log('Hello user!') : console.log('Bye user!');
    };
    greeting('bye');
    greeting('hello');
    var fruit = [];
    var workWithFruit = function (arr, value, action) { return (action === 'add' ? arr.push(value) : arr.splice(arr.indexOf(value), 1)); };
    workWithFruit(fruit, 'Banana', 'add');
    workWithFruit(fruit, 'Apple', 'add');
    workWithFruit(fruit, 'Pear', 'add');
    workWithFruit(fruit, 'Arange', 'add');
    workWithFruit(fruit, 'Arange', 'delete');
    workWithFruit(fruit, 'Orange', 'add');
    console.log(fruit);
})();
//   Return type
(function () {
    var returnResult = function (firstValue, secondValue) {
        return firstValue * secondValue;
    };
    console.log(returnResult(4, 4));
    var person = function (name) { return ({ name: name }); };
    console.log(person('lezver'));
})();
//   Void
(function () {
    var printSome = function () {
        console.log('Some text');
    };
    printSome();
})();
//   Never
(function () {
    var customError = function (message, status) {
        throw new Error("".concat(message, ", status: ").concat(status));
    };
    // customError("Some Error", 400);
})();
//   Function type
(function () {
    var callback;
    callback = function (num) {
        console.log(num);
    };
    callback(4);
    var calc = function (param1, param2, callback) {
        console.log('Result: ', callback(param1, param2));
    };
    calc(1, 1, function (num1, num2) { return num1 + num2; });
    calc(13, 43, function (num1, num2) { return num1 - num2; });
    //............................................
    var practicCalc = function (firstValue, secondValue, callback) { return callback(firstValue, secondValue); };
    console.log(practicCalc(33, 33, function (firstValue, secondValue) { return firstValue * secondValue; }));
    console.log(practicCalc(11, 33, function (firstValue, secondValue) { return firstValue + secondValue; }));
})();
//   Custom types
(function () {
    var data = {
        id: 1,
        price: 2,
        permission: ['red', 'green', 'blue'],
        details: {
            title: 'New product',
            description: 'This is awesome product!',
        },
    };
    console.log(data);
    var article = {
        id: 2,
        price: 999,
        permission: ['yes', 'no'],
        details: {
            title: 'Apple',
            description: 'Original product',
        },
    };
    console.log(article);
    var firstUser = {
        firstName: 'Vladislav',
        secondName: 'Gulida',
        age: 29,
    };
    console.log(firstUser);
    var secondUser = {
        firstName: 'Alina',
        secondName: 'Gulida',
    };
    console.log(secondUser);
    secondUser.age = 30;
    console.log(secondUser);
})();
(function () {
    var optional = function (num) {
        console.log(num);
    };
    optional(); // undefined
    optional(9); // 9
})();
(function () {
    var person = {
        name: 'Valera',
    };
    console.log(person);
    person.sex = 'male';
    console.log(person);
    var person1 = {
        name: 'Jesika',
    };
    console.log(person1);
    person1.sex = 'female';
    console.log(person1);
})();
//   Practice
(function () {
    var age = 50;
    var name = 'Max';
    var toggle = true;
    var empty = null;
    var notInitialize = undefined;
    var callback = function (a) { return 100 + a; };
    console.log(notInitialize, empty, toggle, name, age, callback(10));
    var anything = -20;
    anything = 'text';
    anything = {};
    console.log(anything);
    var some;
    some = 'text';
    var str;
    if (typeof some === 'string')
        console.log((str = some));
    var person = ['max', 21];
    console.log(person);
    var Status;
    (function (Status) {
        Status[Status["LOADING"] = 0] = "LOADING";
        Status[Status["READY"] = 1] = "READY";
    })(Status || (Status = {}));
    var download = {
        loading: Status.LOADING,
        ready: Status.READY,
    };
    if (download.loading === Status.LOADING)
        console.log('loading...');
    if (download.ready === Status.READY)
        console.log('ready!');
    var union;
    union = 333;
    console.log(union);
    union = '333';
    console.log(union);
    var colors = [];
    var workWithColors = function (arr, value, action) {
        return action === 'enable' ? arr.push(value) : arr.splice(arr.indexOf(value), 1);
    };
    workWithColors(colors, 'red', 'enable');
    workWithColors(colors, 'blue', 'enable');
    workWithColors(colors, 'sadfasf', 'enable');
    workWithColors(colors, 'sadfasf', 'disable');
    workWithColors(colors, 'green', 'enable');
    console.log(colors);
    var showMessage = function (message) {
        console.log(message);
    };
    showMessage('test void function');
    var calc = function (num1, num2) { return num1 + num2; };
    console.log(calc(213, 532));
    var customError = function (message, status) {
        throw new Error("message: ".concat(message, ", status: ").concat(status));
    };
    var page1 = {
        title: 'The awesome page',
        likes: 100,
        accounts: ['Max', 'Anton', 'Nikita'],
        status: 'open',
        details: {
            createAt: new Date('2021-01-01'),
            updateAt: new Date('2021-05-01'),
        },
    };
    var page2 = {
        title: 'Python or Js',
        likes: 5,
        accounts: ['Alex'],
        status: 'close',
    };
})();
