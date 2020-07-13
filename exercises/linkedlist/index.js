// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
		return this;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertFirst(data) {
		if (this.head === null) {
			this.head = new Node(data);
		} else {
			this.head = new Node(data, this.head);
		}
	}

	size() {
		let count = 0;
		let current = this.head;
		while (current) {
			count++;
			current = current.next;
		}
		return count;
	}

	getFirst() {
		return this.head;
	}

	getLast() {
		let current = this.head;

		while (current.next !== null) {
			current = current.next;
		}

		return current;
	}

	clear() {
		this.head = null;
	}

	removeFirst() {
		this.head = this.head.next;
	}

	removeLast() {
		if (this.head === null) {
			return null;
		}

		if (this.head.next === null) {
			this.head = null;
		} else {
			let current = this.head;
			let prev;

			while (current.next !== null) {
				prev = current;
				current = current.next;
			}

			prev.next = null;
		}
	}

	insertLast(data) {
		this.getLast().next = new Node(data);
	}
}

module.exports = { Node, LinkedList };
