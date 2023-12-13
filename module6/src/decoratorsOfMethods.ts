// DECORATORS OF METHODS

console.log('---> decoratorsOfMethods <---');

function ShowMeParams(
  target: any,
  name: string,
  descriptor: PropertyDescriptor
) {
  console.log('target', target);
  console.log('name', name);
  console.log('descriptor', descriptor);
}

class Notifier {
  @ShowMeParams
  showMessage() {
    console.log('Show message');
  }

  someFoo(): void {
    console.log('some function');
  }
}

//

function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
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
  @AutoBind
  showMessage() {
    console.log('Show message!!!');
  }
}

const notifier1 = new Notifier1();

notifier1.showMessage();

//

function AddTax(taxPercent: number) {
  return (_: any, _2: string, descriptor: PropertyDescriptor) => {
    const method = descriptor.value as Function;

    return {
      configurable: true,
      enamerable: false,
      get() {
        return (...args: any[]) => {
          const result = method.apply(this, args);

          return result + (result / 100) * taxPercent;
        };
      },
    };
  };
}

class Payment {
  @AddTax(20)
  pay(money: number): number {
    return money;
  }
}

const payment = new Payment();

console.log('Amount with tax ', payment.pay(100));

//

function NewAddTax(taxPercent: number) {
  return function (_: any, _2: string, descriptor: PropertyDescriptor) {
    const method = descriptor.value as Function;

    return {
      configurable: true,
      enumrable: false,
      get() {
        return (...args: any[]) => {
          const result = method.apply(this, args);

          return result + (result / 100) * taxPercent;
        };
      },
    };
  };
}

class NewPayment {
  @NewAddTax(19.5)
  pay(money: number): number {
    return money;
  }
}

const newPayment = new NewPayment();

console.log(newPayment.pay(1000));
