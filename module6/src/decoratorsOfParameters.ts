//  DECORATORS OF PARAMETERS

console.log('---> decoratorOfParameters <---');

function CheckEmail(target: any, name: string, position: number) {
  console.log('target ---> ', target);
  console.log('position ---> ', position);
  console.log('name ---> ', name);
}

class Person {
  setEmail(@CheckEmail email: string) {
    console.log(email);
  }
}

const person = new Person();

person.setEmail('test@email.com');

function CheckText(target: any, name: string, position: number) {
  console.log('target ---> ', target);
  console.log('name ---> ', name);
  console.log('position ---> ', position);
}

class Pag {
  someFoo(value: number): number {
    return value;
  }
  setText(value: number, @CheckText text: string): void {
    console.log(text, value);
  }
}

const pag = new Pag();
pag.setText(29, 'some number...');

//

function CheckEmail1(target: any, name: string, position: number) {
  if (!target[name].validation) {
    target[name].validation = {};
  }
  Object.assign(target[name].validation, {
    [position]: (value: string) => {
      if (value.includes('@')) {
        return value;
      }
      throw new Error('No valid field');
    },
  });
}

function Validation(_: any, _2: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value;

  return {
    configurable: true,
    enumerable: false,
    get() {
      return (...args: any[]) => {
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
  @Validation
  setEmail(@CheckEmail1 email: string) {
    console.log(email);
  }
}

const person1 = new Person1();

person1.setEmail('test@email.com');

function CheckUser(target: any, nameMethod: string, position: number) {
  const method = target[nameMethod];

  if (!method.validation) {
    method.validation = {};
  }

  Object.assign(method.validation, {
    [position]: (value: string) => {
      if (value.includes('@')) {
        return value;
      }

      throw new Error('Not valid user');
    },
  });
}

function Verification(_: any, _2: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value;

  return {
    configurable: true,
    enumerable: false,
    get() {
      return (...args: any[]) => {
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
  @Verification
  setUser(@CheckUser user: string): void {
    console.log(user);
  }
}

const human = new Human();

human.setUser('Valera@');

// ... test of function

console.log('---> test of function <---');

function someFoo(position: number): void {
  const someObj = Object.assign(
    {},
    {
      [position]: (value: string) =>
        value.includes('@') ? value : new Error('afsdf'),
    }
  );
  console.log(someObj);
}

type SomeObj = {
  name: string;
  age?: number;
};

const valid: SomeObj = { name: 'sadf', age: 23 };

someFoo.validation = valid;

someFoo(1);

console.dir(someFoo);
