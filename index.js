import { Node, Tree } from "./nodeTree.js";
import prettyPrint from "./prettyPrint.js";

const newTree =  new Tree([1,2,3,4,5,6,7])


newTree.insert(20)
newTree.insert(5)
newTree.insert(8)
newTree.delete(5, newTree.root)
newTree.delete(5, newTree.root)
newTree.delete(4, newTree.root)

const cb = node => console.log(node.value)

newTree.levelOrder(cb)

prettyPrint(newTree.root)
