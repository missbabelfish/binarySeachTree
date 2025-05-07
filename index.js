import { Node, Tree } from "./nodeTree.js";

const newTree =  new Tree([1,2,3,4,5,6,7])

console.log(newTree)
console.log(newTree.root)
console.log(newTree.data)

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node === null) {
        return;
    }
    if (node.right !== null) {
        prettyPrint(
            node.right,
            `${prefix}${isLeft ? '│   ' : '    '}`,
            false
        );
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
    if (node.left !== null) {
        prettyPrint(
            node.left,
            `${prefix}${isLeft ? '    ' : '│   '}`,
            true
        );
    }
};

prettyPrint(newTree.root)

