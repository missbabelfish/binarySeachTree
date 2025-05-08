class Node {
    constructor(value) {
        this.left = null,
        this.right = null,
        this.value = value
    }
}

class Tree {
	constructor(data) {
		this.data = [...data].sort((a, b) => a - b);
		this.root = this.buildTree(data, 0, data.length - 1);
	}

	buildTree(data, start, end) {
		if (start > end) return null;

		let mid = start + Math.floor((end - start) / 2);

		let root = new Node(data[mid]);

		root.left = this.buildTree(data, start, mid - 1);

		root.right = this.buildTree(data, mid + 1, end);

		return root;
	}

	insert(value) {
		let currNode = this.root;
		const newNode = new Node(value);
		while (currNode.left || currNode.right) {
			currNode = value < currNode.value ? currNode.left : currNode.right;
		}
		if (value < currNode.value) {
			currNode.left = newNode;
		} else {
			currNode.right = newNode;
		}
	}

	delete(value, root) {
		function getSuccessor(node) {
			node = node.right;
			while (node !== null && node.left !== null) {
				node = node.left;
				console.log(node);
			}
			return node;
		}

		if (root === null) return root;
		if (root.value > value) {
			root.left = this.delete(value, root.left);
		} else if (root.value < value) {
			root.right = this.delete(value, root.right);
		} else {
			if (root.left === null) return root.right;
			if (root.right === null) return root.left;

			let replacement = getSuccessor(root);
			root.value = replacement.value;
			root.right = this.delete(replacement.value, root.right);
		}
		return root;
	}

	find(value, node) {
		let currNode = node;
		if (currNode.value === value) return currNode;
		if (value < currNode.value) {
			return this.find(value, currNode.left);
		} else {
			return this.find(value, currNode.right);
		}
	}

    // currently only works with boolean callbacks
	levelOrder(cb) {
		if (typeof cb !== 'function') throw new Error('please pass a function');
		if (this.root === null) return;

		let queue = [this.root];

		while (queue.length > 0) {
			let currNode = queue[0];
			let pass = cb(currNode);
            if (!pass) return false;
			if (currNode.left) queue.push(currNode.left);
			if (currNode.right) queue.push(currNode.right);
			queue.shift();
		}

		return true;
	}

	inOrder(cb, root) {
		if (typeof cb !== 'function') throw new Error('please pass a function');
		if (root === null) return;

		this.inOrder(cb, root.left);
		cb(root);
		this.inOrder(cb, root.right);
	}

	preOrder(cb, root) {
		if (typeof cb !== 'function') throw new Error('please pass a function');
		if (root === null) return;

		cb(root);
		this.preOrder(cb, root.left);
		this.preOrder(cb, root.right);
	}

	postOrder(cb, root) {
		if (typeof cb !== 'function') throw new Error('please pass a function');
		if (root === null) return;

		this.postOrder(cb, root.left);
		this.postOrder(cb, root.right);
		cb(root);
	}

	subHeight(node) {
		let currNode = node;
        if (currNode === null) return -1
        if (currNode.left === null && currNode.right === null) {
            return 0
        }
        return Math.max(this.subHeight(currNode.left), this.subHeight(currNode.right)) + 1
    }

    height(value, node) {
        const target = this.find(value, node)
        console.log({target})
        return this.subHeight(target)
    }

	depth(value, node, count = 0) {
		let currNode = node;
		if (currNode.value === value) return count;
		if (value < currNode.value) {
			return this.depth(value, currNode.left, ++count);
		} else {
			return this.depth(value, currNode.right, ++count);
		}
	}

    nodeBalanced(node) {
        return Math.abs(this.subHeight(node.left) - this.subHeight(node.right)) <=1
    }

    treeBalanced(root) {
        return this.levelOrder(root => this.nodeBalanced(root))
    }
}

export { Node, Tree }