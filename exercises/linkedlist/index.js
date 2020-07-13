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

		while (current !== null) {
			if (current.next === null) {
				return current;
			}
			current = current.next;
		}
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
		if (this.getLast()) {
			this.getLast().next = new Node(data);
		} else {
			this.head = new Node(data);
		}
	}

	getAt(n) {
		if (this.head === null) {
			return null;
		}

		let current = this.head;
		let count = 0;
		while (count < n) {
			if (current === null) {
				return null;
			}
			current = current.next;
			count++;
		}

		return current;
	}

	removeAt(n) {
		if (this.getAt(n) === null) {
			return null;
		} else if (this.getAt(n) === this.head) {
			this.head = this.getAt(n + 1);
		} else {
			this.getAt(n - 1).next = this.getAt(n).next;
		}
	}
}

module.exports = { Node, LinkedList };
