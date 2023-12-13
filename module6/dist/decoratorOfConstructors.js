"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log('---> decoratorOfConstructors <---');
function Logger(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function AddProperty() {
    return function (constructor) {
        console.log('Modify');
        constructor.prototype.modify = true;
    };
}
let Controller = class Controller {
    constructor() {
        this.id = 1;
    }
};
Controller = __decorate([
    Logger('LOGGING - CONTROLLER'),
    AddProperty()
], Controller);
const controller = new Controller();
console.log('Mdified classes', controller.modify);
function ControllerDecoration(config) {
    return function (constructor) {
        const current = new constructor();
        const getParent = document.getElementById(config.parent);
        const createElement = document.createElement(config.template);
        createElement.innerHTML = current.content;
        constructor.prototype.element = createElement;
        constructor.prototype.parent = getParent;
        getParent.appendChild(createElement);
    };
}
let Controller2 = class Controller2 {
    constructor() {
        this.content = 'My custom controller!';
    }
};
Controller2 = __decorate([
    ControllerDecoration({ parent: 'app', template: 'h1' })
], Controller2);
const Test = (obj) => (constructor) => {
    const current = new constructor();
    const getParent = document.getElementById(obj.parent);
    const createElement = document.createElement(obj.template);
    createElement.textContent = current.content;
    constructor.prototype.element = createElement;
    constructor.prototype.parent = getParent;
    console.dir(constructor);
    getParent.appendChild(createElement);
};
let Controll = class Controll {
    constructor() {
        this.content = 'test string';
    }
};
Controll = __decorate([
    Test({ parent: 'app', template: 'h1' })
], Controll);
const Test2 = (value) => (constructor) => {
    const current = new constructor();
    const createElement = document.createElement(value);
    createElement.textContent = current.content;
    constructor.prototype.element = createElement;
    console.dir(constructor);
    document.body.append(createElement);
};
let Controll2 = class Controll2 {
    constructor() {
        this.content = 'learn more...';
    }
};
Controll2 = __decorate([
    Test2('span')
], Controll2);
function ControllerDecoration3(config) {
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(...arg) {
                super(...arg);
                this.parent = document.getElementById(config.parent);
                this.element = document.createElement(config.template);
                this.element.innerHTML = this.content;
                this.parent.appendChild(this.element);
            }
        };
    };
}
let Controller3 = class Controller3 {
    constructor() {
        this.content = ' My rewritten controller';
    }
};
Controller3 = __decorate([
    ControllerDecoration3({
        parent: 'app',
        template: 'h1',
    })
], Controller3);
const controllerFirst = new Controller3();
const controllerSecond = new Controller3();
const controllerThird = new Controller3();
const controllerFourth = new Controller3();
//# sourceMappingURL=decoratorOfConstructors.js.map