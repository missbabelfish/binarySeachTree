import { Node, Tree } from "./nodeTree.js";
import prettyPrint from "./prettyPrint.js";

const newTree =  new Tree([1,2,3,4,5,6,7])

console.log(newTree)
console.log(newTree.root)
console.log(newTree.data)


prettyPrint(newTree.root)

