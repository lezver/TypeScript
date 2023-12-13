"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
console.log('---> decoratorOfParameters <---');
function CheckEmail(target, name, position) {
    console.log('target ---> ', target);
    console.log('position ---> ', position);
    console.log('name ---> ', name);
}
class Person {
    setEmail(email) {
        console.log(email);
    }
}
__decorate([
    __param(0, CheckEmail),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Person.prototype, "setEmail", null);
const person = new Person();
person.setEmail('test@email.com');
function CheckText(target, name, position) {
    console.log('target ---> ', target);
    console.log('name ---> ', name);
    console.log('position ---> ', position);
}
class Pag {
    someFoo(value) {
        return value;
    }
    setText(value, text) {
        console.log(text, value);
    }
}
__decorate([
    __param(1, CheckText),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], Pag.prototype, "setText", null);
const pag = new Pag();
pag.setText(29, 'some number...');
function CheckEmail1(target, name, position) {
    if (!target[name].validation) {
        target[name].validation = {};
    }
    Object.assign(target[name].validation, {
        [position]: (value) => {
            if (value.includes('@')) {
                return value;
            }
            throw new Error('No valid field');
        },
    });
}
function Validation(_, _2, descriptor) {
    const method = descriptor.value;
    return {
        configurable: true,
        enumerable: false,
        get() {
            return (...args) => {
                if (method.validation) {
                    args.forEach((item, index) => {
                        if (method.validation[index]) {
                            args[index] = method.validation[index](item);
                        }
                    });
                }
                return method.apply(this, args);
            };
        },
    };
}
class Person1 {
    setEmail(email) {
        console.log(email);
    }
}
__decorate([
    Validation,
    __param(0, CheckEmail1),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Person1.prototype, "setEmail", null);
const person1 = new Person1();
person1.setEmail('test@email.com');
function CheckUser(target, nameMethod, position) {
    const method = target[nameMethod];
    if (!method.validation) {
        method.validation = {};
    }
    Object.assign(method.validation, {
        [position]: (value) => {
            if (value.includes('@')) {
                return value;
            }
            throw new Error('Not valid user');
        },
    });
}
function Verification(_, _2, descriptor) {
    const method = descriptor.value;
    return {
        configurable: true,
        enumerable: false,
        get() {
            return (...args) => {
                if (method.validation) {
                    args.forEach((item, index) => {
                        if (method.validation[index]) {
                            args[index] = method.validation[index](item);
                        }
                    });
                }
                return method.apply(this, args);
            };
        },
    };
}
class Human {
    setUser(user) {
        console.log(user);
    }
}
__decorate([
    Verification,
    __param(0, CheckUser),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Human.prototype, "setUser", null);
const human = new Human();
human.setUser('Valera@');
console.log('---> test of function <---');
function someFoo(position) {
    const someObj = Object.assign({}, {
        [position]: (value) => value.includes('@') ? value : new Error('afsdf'),
    });
    console.log(someObj);
}
const valid = { name: 'sadf', age: 23 };
someFoo.validation = valid;
someFoo(1);
console.dir(someFoo);
//# sourceMappingURL=decoratorsOfParameters.js.map