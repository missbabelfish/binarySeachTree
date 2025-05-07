class Node {
    constructor(value) {
        this.left = null,
        this.right = null,
        this.value = value
    }
}

class Tree {
    constructor(data) {
        this.data = [...data].sort((a, b) => a - b)
        this.root = this.buildTree(data, 0, data.length-1)
    }

    buildTree(data, start, end) {
        if (start > end) return null;

        let mid = start + Math.floor((end - start) / 2);

        let root = new Node(data[mid])

        root.left = this.buildTree(data, start, mid-1);

        root.right = this.buildTree(data, mid+1, end);

        return root;
    }

    insert(value) {
        let currNode = this.root
        const newNode = new Node(value)
        while (currNode.left || currNode.right) {
            currNode = value < currNode.value ? currNode.left : currNode.right
        }
        console.log(currNode)
        if (value < currNode.value) {
            currNode.left = newNode
        } else {
            currNode.right = newNode
        }
    }

    find(value, node) {
        let currNode = node
        console.log({value})
        console.log(currNode.value)
        if (currNode.value === value) return currNode
        if (value < currNode.value) {
            return this.find(value, currNode.left)
        } else {
            return this.find(value, currNode.right)
        }
    }
}

export { Node, Tree }