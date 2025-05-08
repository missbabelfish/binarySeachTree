import { Node, Tree } from "./nodeTree.js";
import prettyPrint from "./prettyPrint.js";

const newData = Array.from({ length: 10 }, e => Math.ceil(Math.random() * 100)).sort((a, b) => a - b);
// console.log(newData)
let newTree = new Tree([1, 7, 14, 22, 30, 51, 52, 67, 71, 72]);
console.log(newTree)

// console.log(newTree.isBalanced(newTree.root))

const cb = (node) => console.log(node)


// prettyPrint(newTree.root)
// console.log('preorder')
// newTree.preOrder(cb, newTree.root)
// console.log('inorder')
// newTree.inOrder(cb, newTree.root)
// console.log('postorder')
// newTree.postOrder(cb, newTree.root)

newTree.insert(150)
newTree.insert(113)
newTree.insert(141)
newTree.insert(109)

console.log(newTree.isBalanced(newTree.root))

prettyPrint(newTree.root)

newTree.rebalance(newTree.root)
console.log(newTree.isBalanced(newTree.root))
prettyPrint(newTree.root)

prettyPrint(newTree.root)
console.log('preorder')
newTree.preOrder(cb, newTree.root)
console.log('inorder')
newTree.inOrder(cb, newTree.root)
console.log('postorder')
newTree.postOrder(cb, newTree.root)