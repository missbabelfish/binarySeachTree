import { Node, Tree } from "./nodeTree.js";
import prettyPrint from "./prettyPrint.js";

const newTree =  new Tree([1,2,3,4,5,6,7])


// newTree.insert(20)
// newTree.insert(5)
// newTree.insert(8)
// newTree.insert(9)
// newTree.delete(5, newTree.root)
// newTree.delete(5, newTree.root)
// newTree.delete(4, newTree.root)

// newTree.levelOrder(cb)

// newTree.preOrder(cb, newTree.root)
// newTree.inOrder(cb, newTree.root)
// newTree.postOrder(cb, newTree.root)

// console.log(newTree.depth(9, newTree.root))
// console.log(newTree.height(6, newTree.root))

// console.log(newTree.treeBalanced(newTree.root))

prettyPrint(newTree.root)
