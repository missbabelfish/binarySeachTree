import { Node, Tree } from "./nodeTree.js";
import prettyPrint from "./prettyPrint.js";

const newTree =  new Tree([1,2,3,4,5,6,7])

console.log(newTree)
console.log(newTree.root)
console.log(newTree.data)


newTree.insert(20)
newTree.insert(5)
newTree.insert(8)
prettyPrint(newTree.root)

console.log(newTree.find(5, newTree.root))