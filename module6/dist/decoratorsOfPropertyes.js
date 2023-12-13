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
console.log('---> decoratorsOfPropertyes <---');
function Required(target, propertyName) {
    console.log('Required');
    console.log(target, propertyName);
}
function PositiveNumber(target, propertyName) {
    console.log('PosibiveNumber');
    console.log(target, propertyName);
}
class SomeClass {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
}
__decorate([
    Required,
    __metadata("design:type", String)
], SomeClass.prototype, "name", void 0);
__decorate([
    PositiveNumber,
    __metadata("design:type", Number)
], SomeClass.prototype, "age", void 0);
const registeredValidators = {};
function Required1(target, propName) {
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: ['required'] });
}
function PositiveNumber1(target, propName) {
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: ['positive'] });
}
function validate(obj) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }
    let isValid = true;
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}
class SomeClass1 {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
}
__decorate([
    Required1,
    __metadata("design:type", String)
], SomeClass1.prototype, "name", void 0);
__decorate([
    PositiveNumber1,
    __metadata("design:type", Number)
], SomeClass1.prototype, "age", void 0);
const validateClass = (cls) => !validate(cls)
    ? console.log('Validator error!')
    : console.log('Validator ok!');
validateClass(new SomeClass1('', -1));
validateClass(new SomeClass1('Alex', 33));
const regValid = {};
function Needed(target, propName) {
    regValid[target.constructor.name] = Object.assign(Object.assign({}, regValid[target.constructor.name]), { [propName]: ['required'] });
}
function Age(target, propName) {
    regValid[target.constructor.name] = Object.assign(Object.assign({}, regValid[target.constructor.name]), { [propName]: ['positive'] });
}
function validation(obj) {
    const objValidation = regValid[obj.constructor.name];
    if (!objValidation) {
        return true;
    }
    let isValid = true;
    for (const prop in objValidation) {
        for (const validProp of objValidation[prop]) {
            switch (validProp) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}
class People {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
}
__decorate([
    Needed,
    __metadata("design:type", String)
], People.prototype, "name", void 0);
__decorate([
    Age,
    __metadata("design:type", Number)
], People.prototype, "age", void 0);
const ShowPeople = (cls) => !validation(cls)
    ? console.log('Validation Error!')
    : console.log('Validation Ok!');
ShowPeople(new People('Alexandra', 23));
ShowPeople(new People('', 1));
ShowPeople(new People('Valera', 33));
ShowPeople(new People('some name', -11));
//# sourceMappingURL=decoratorsOfPropertyes.js.map