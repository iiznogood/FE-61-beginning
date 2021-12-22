class LinkedList {
  constructor() {
      this.root = {
          data: null,    //Пустой связанный список
          next: null,
      }
  }

  append (value) {
      const node = {
          data: value,
          next: null,
      }

  let lastNode = this.root;

  while (lastNode.next !== null) {
      lastNode = lastNode.next;
  }

      lastNode.next = node
  }

  git
  find(value) {
    let targetNode = this.root;

    while(targetNode.data !== value && targetNode.next !== null){
      targetNode = targetNode.next;
    }

    return targetNode.data === value ? targetNode : null;
    }

  add (valueToAdd, valueAfter) {
      let addNode = this.root;

      while (addNode.data !== valueAfter && addNode.next !== null) {
        addNode = addNode.next
      }

      addNode.next = {
        data: valueToAdd,
        next: addNode.next
      }
  }

  delete(value){
    let deleteNode = this.root;
    let previousNode;

    while(deleteNode.data !== value && deleteNode.next !== null){
      previousNode = deleteNode;
      deleteNode = deleteNode.next;
    }

    previousNode.next = deleteNode.next;
  }


  print() {
    console.log(this.root)
  }
}

const linkedList1 = new LinkedList ();

linkedList1.append(1);
linkedList1.append(42);
linkedList1.append(228);

linkedList1.delete(42)

console.log(linkedList1.root);
console.log(linkedList1.find(228));


