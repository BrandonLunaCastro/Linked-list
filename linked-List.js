class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }
    head(){
        return this.head;
    }
    append(value){
        let node = new Node(value);
        if(this.head === null){
            this.head = node;
        }else{
            this.tail.nextNode = node;
        }
        this.tail = node;
    }
    prepend(value){
        let node = new Node(value);
        node.nextNode = this.head.nextNode
        this.head.nextNode = node;
    }
    toString(){
        return console.log();
    }
}
class Node {
    constructor(value = null, nextNode= null) {
        this.value = value;
        this.nextNode = nextNode;
    };
}
const listOne = new LinkedList()
listOne.append("one");
listOne.append("two");
listOne.append("three");
listOne.prepend(2)
console.log(listOne);