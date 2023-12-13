//   DECORATORS Of CONSTRUCTORS

console.log('---> decoratorsOfConstructors <---');

function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function AddProperty() {
  return function (constructor: Function) {
    console.log('Modify');
    constructor.prototype.modify = true;
  };
}

@Logger('LOGGING - CONTROLLER')
@AddProperty()
class Controller {
  public id: number = 1;
  public modify?: boolean;
}

const controller = new Controller();

console.log('Mdified classes', controller.modify);

function Decor1(text: string) {
  return function (constructor: Function) {
    console.log(text);
    constructor.prototype.name = 'Ajaxd';
  };
}

function Decor2(text: string) {
  return function (constructor: Function) {
    console.log(text);
    constructor.prototype.age = 23;
  };
}

@Decor1('First Decorator')
@Decor2('Second Decorator')
class RemoteControl {
  public name?: string;
  public age?: number;
}

const remoteControl = new RemoteControl();

console.log(remoteControl);

//

interface IDecorator {
  parent: string;
  template: string;
}

function ControllerDecoration(config: IDecorator) {
  return function (constructor: any) {
    const current = new constructor();
    const getParent = document.getElementById(config.parent)!;
    const createElement = document.createElement(config.template);

    createElement.innerHTML = current.content;

    constructor.prototype.element = createElement;
    constructor.prototype.parent = getParent;

    getParent.appendChild(createElement);
  };
}

@ControllerDecoration({ parent: 'app', template: 'h1' })
class Controller2 {
  public content: string = 'My custom controller!';
}

//

const Test = (obj: IDecorator) => (constructor: any) => {
  const current = new constructor();
  const getParent = document.getElementById(obj.parent) as HTMLDivElement;
  const createElement = document.createElement(obj.template);

  createElement.textContent = current.content;

  constructor.prototype.element = createElement;
  constructor.prototype.parent = getParent;

  console.dir(constructor);

  getParent.appendChild(createElement);
};

@Test({ parent: 'app', template: 'h1' })
class Controll {
  public content: string = 'test string';
}

const Test2 = (value: string) => (constructor: any) => {
  const current = new constructor();
  const createElement = document.createElement(value);

  createElement.textContent = current.content;

  constructor.prototype.element = createElement;

  console.dir(constructor);

  document.body.append(createElement);
};

@Test2('span')
class Controll2 {
  public content: string = 'learn more...';
}

interface IOfTags {
  parentTeg: string;
  childTeg: string;
}

function createTags(obj: IOfTags) {
  return function (constructor: any) {
    const newConstructor = new constructor();

    const createUl = document.createElement(obj.parentTeg);
    const createLi = document.createElement(obj.childTeg);

    document.body.append(createUl);

    createLi.textContent = newConstructor.content;
    createUl.style.marginLeft = 'auto';
    createUl.style.marginRight = 'auto';
    createUl.style.width = 'fit-content';
    createUl.style.listStyle = 'none';
    createUl.style.paddingLeft = '0px';

    constructor.prototype.parentTeg = createUl;
    constructor.prototype.childTeg = createLi;

    createUl.append(createLi);
  };
}

@createTags({
  parentTeg: 'ul',
  childTeg: 'li',
})
class Tags {
  public content = 'some information...';
}
//

function ControllerDecoration3(config: IDecorator) {
  return function <T extends { new (...args: any[]): { content: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      private element: HTMLElement;
      private parent: HTMLElement;
      constructor(...arg: any[]) {
        super(...arg);

        this.parent = document.getElementById(config.parent)!;
        this.element = document.createElement(config.template);

        this.element.innerHTML = this.content;
        this.parent.appendChild(this.element);
      }
    };
  };
}

@ControllerDecoration3({
  parent: 'app',
  template: 'h1',
})
class Controller3 {
  public content = ' My rewritten controller';
}

const controllerFirst = new Controller3();
const controllerSecond = new Controller3();
const controllerThird = new Controller3();
const controllerFourth = new Controller3();

function CreateTags1(obj: IOfTags) {
  return function <T extends { new (...arg: any[]): { content: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      private elementUl: HTMLElement;
      private elementLi: HTMLElement;

      constructor(...args: any[]) {
        super(...args);

        this.elementUl = document.createElement(obj.parentTeg);
        this.elementLi = document.createElement(obj.childTeg);

        document.body.append(this.elementUl);

        this.elementLi.textContent = this.content;
        this.elementUl.append(this.elementLi);
      }
    };
  };
}

@CreateTags1({
  parentTeg: 'ul',
  childTeg: 'li',
})
class Tags1 {
  public content = 'rewritten decorator with generic';
}

const getNewTags = new Tags1();
