"use strict";
function getPromise() {
    return new Promise(resolve => {
        resolve(['Text', 50]);
    });
}
getPromise().then(date => console.log(date));
const compare = (top, bottom) => ({
    name: top.name,
    color: top.name,
    position: bottom.position,
    weight: bottom.weight,
});
const merge = (objA, objB) => Object.assign({}, objA, objB);
class Component {
    constructor(props) {
        this.props = props;
    }
}
class Page extends Component {
    pageInfo() {
        console.log(this.props.title);
    }
}
//# sourceMappingURL=practice.js.map