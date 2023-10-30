function createNode(data) {
  return { next: null, data };
}

function createLinkedList() {
  let head = null;
  let tail = null;

  return {
    append(data) {
      const newNode = createNode(data);

      if (!head) {
        head = newNode;
        tail = newNode;
      } else {
        tail.next = newNode;
        tail = newNode;
      }
    },
    prepend(data) {
      const newNode = createNode(data);

      if (!head) {
        head = newNode;
        tail = newNode;
      } else {
        newNode.next = head;
        head = newNode;
      }
    },
    size() {
      let currentNode = head;
      let count = 0;

      do {
        count++;
        currentNode = currentNode.next;
      } while (currentNode);

      return count;
    },
    head() {
      return head.data;
    },
    tail() {
      return tail.data;
    },
    at(index) {
      let node = null;
      let currentNode = head;

      while (currentNode && index > 0) {
        currentNode = currentNode.next;
        index--;
      }

      node = currentNode;

      return node ? node.data : "Out of bound";
    },
    pop() {
      let currentNode = head;
      let previousNode = null;

      while (currentNode.next) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = null;
      tail = previousNode;
    },
    contains(value) {
      let found = false;
      let currentNode = head;

      while (currentNode) {
        if (value === currentNode.data) found = true;
        currentNode = currentNode.next;
      }
      return found;
    },
    find(value) {
      let index = 0;
      let currentNode = head;

      while (currentNode) {
        if (value === currentNode.data) return index;
        index++;
        currentNode = currentNode.next;
      }
      return "not found";
    },
    toString() {
      let currentNode = head;
      let string = "";

      while (currentNode) {
        string += "( " + currentNode.data + " ) -> ";
        currentNode = currentNode.next;
        if (currentNode === null) {
          string += "null";
        }
      }
      return string;
    },
    insertAt(value, index) {
      if (index < 0 || index > linkedList.size()) {
        console.log("Out of bound");
        return;
      }
      const newNode = createNode(value);

      if (index === 0) {
        newNode.next = head;
        head = newNode;
      } else {
        let currentNode = head;
        let previousNode = null;

        while (index > 0) {
          previousNode = currentNode;
          currentNode = currentNode.next;
          index--;
        }

        previousNode.next = newNode;
        newNode.next = currentNode;
      }
    },
    removeAt(index) {
      if (index < 0 || index > linkedList.size()) {
        console.log("Out of bound");
        return;
      }
      let currentNode = head;
      let previousNode = null;

      if (index === 0) {
        head = head.next;
        return currentNode;
      }

      while (index > 0) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        index--;
      }
      previousNode.next = currentNode.next;
      return currentNode;
    },

    print() {
      let currentNode = head;

      if (currentNode === null) {
        return;
      }

      while (currentNode !== null) {
        console.log(currentNode.data);
        currentNode = currentNode.next;
      }
    },
  };
}

const linkedList = createLinkedList();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.prepend(4);
linkedList.prepend(10);

console.log("Size: " + linkedList.size());
console.log("Head: " + linkedList.head());
console.log("Tail: " + linkedList.tail());

console.log("Nodo richiesto: " + linkedList.at(1));

linkedList.print();

linkedList.pop();

console.log("-------------------------------");

linkedList.print();

console.log(linkedList.contains(15));

console.log("Indice nodo trovato: " + linkedList.find(15));

console.log(linkedList.toString());

linkedList.insertAt(5, 10);

console.log("-------------------------------");

linkedList.print();

linkedList.removeAt(1);

console.log("-------------------------------");

linkedList.print();
