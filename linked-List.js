class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    head(){
        return this.head;
    }
    tail(){
        return this.tail;
    }
    size(){
        return this.size
    }
    index(index){
        return node.index
    }
    append(value){
        let node = new Node(value);
        if(this.head === null){
            this.head = node;
            this.index = 0
        }else{
            this.tail.nextNode = node;
        }
        this.tail = node;
        this.size++;
        node.index = this.size;
    }
    prepend(value){
        let node = new Node(value);
        node.nextNode = this.head.nextNode;
        this.head.nextNode = node;
        this.size++;
        node.index = this.size
    }
    toString(){
        return console.log();
    }
}
class Node {
    constructor(value = null, nextNode= null, index = null) {
        this.value = value;
        this.nextNode = nextNode;
        this.index = index; 
    };
}
const listOne = new LinkedList()
listOne.append("one");
listOne.append("two");
listOne.append("three");
listOne.prepend(2)
console.log(listOne.head);