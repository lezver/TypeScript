//  DECORATORS OF PROPERTYES

console.log('---> decoratorsOfPropertyes <---');

function Required(target: any, propertyName: string | Symbol): void {
  console.log('Required');
  console.log(target, propertyName);
}

function PositiveNumber(target: any, propertyName: string | Symbol): void {
  console.log('PosibiveNumber');
  console.log(target, propertyName);
}

class SomeClass {
  @Required
  public name: string;
  @PositiveNumber
  public age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }
}

//

interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[];
  };
}

const registeredValidators: ValidatorConfig = {};

function Required1(target: any, propName: string): void {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ['required'],
  };
}

function PositiveNumber1(target: any, propName: string): void {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ['positive'],
  };
}

function validate(obj: any) {
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
  @Required1
  name: string;
  @PositiveNumber1
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }
}

const validateClass = (cls: SomeClass) =>
  !validate(cls)
    ? console.log('Validator error!')
    : console.log('Validator ok!');

validateClass(new SomeClass1('', -1));
validateClass(new SomeClass1('Alex', 33));

//  more practice

type exampleObj = {
  [prop: string]: {
    [validProp: string]: string[];
  };
};

const regValid: exampleObj = {};

function Needed(target: any, propName: string): void {
  regValid[target.constructor.name] = {
    ...regValid[target.constructor.name],
    [propName]: ['required'],
  };
}

function Age(target: any, propName: string): void {
  regValid[target.constructor.name] = {
    ...regValid[target.constructor.name],
    [propName]: ['positive'],
  };
}

function validation(obj: any) {
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
  @Needed
  public name: string;
  @Age
  public age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }
}

const ShowPeople = (cls: People) =>
  !validation(cls)
    ? console.log('Validation Error!')
    : console.log('Validation Ok!');

ShowPeople(new People('Alexandra', 23));
ShowPeople(new People('', 1));
ShowPeople(new People('Valera', 33));
ShowPeople(new People('some name', -11));
