function getPromise(): Promise<Array<string | number>> {
  return new Promise(resolve => {
    resolve(['Text', 50]);
  });
}

getPromise().then(date => console.log(date));

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

const compare = (
  top: Pick<AllType, 'name' | 'color'>,
  bottom: Pick<AllType, 'position' | 'weight'>
): AllType => ({
  name: top.name,
  color: top.name,
  position: bottom.position,
  weight: bottom.weight,
});

const merge = <T extends object, U extends object>(objA: T, objB: U) =>
  Object.assign({}, objA, objB);

class Component<T> {
  constructor(public props: T) {}
}

interface IProps {
  title: string;
}

class Page extends Component<IProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}
