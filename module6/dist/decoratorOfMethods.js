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
console.log('---> decoratorOfMethods <---');
function ShowMeParams(target, name, descriptor) {
    console.log('target', target);
    console.log('name', name);
    console.log('descriptor', descriptor);
}
class Notifier {
    showMessage() {
        console.log('Show message');
    }
}
__decorate([
    ShowMeParams,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Notifier.prototype, "showMessage", null);
function AutoBind(_, _2, descriptor) {
    const method = descriptor.value;
    return {
        configurable: true,
        enumerable: false,
        get() {
            return method.bind(this);
        },
    };
}
class Notifier1 {
    showMessage() {
        console.log('Show message!!!');
    }
}
__decorate([
    AutoBind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Notifier1.prototype, "showMessage", null);
const notifier1 = new Notifier1();
notifier1.showMessage();
function AddTax(taxPercent) {
    return (_, _2, descriptor) => {
        const method = descriptor.value;
        return {
            configurable: true,
            enamerable: false,
            get() {
                return (...args) => {
                    const result = method.apply(this, args);
                    return result + (result / 100) * taxPercent;
                };
            },
        };
    };
}
class Payment {
    pay(money) {
        return money;
    }
}
__decorate([
    AddTax(20),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Number)
], Payment.prototype, "pay", null);
const payment = new Payment();
console.log('Amount with tax ', payment.pay(100));
//# sourceMappingURL=decoratorOfMethods.js.map