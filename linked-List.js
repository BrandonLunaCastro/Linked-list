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
    at(index){
        let actualNode = this.head;
        let actualIndex = 0;

        while (actualIndex !== index ){
            actualIndex++
            actualNode = actualNode.nextNode
        }
        return actualNode

    }
    contain(value){
        let aux = this.head;
        let isPresent = false;
        if(aux.value === value)return true;
        while (aux.nextNode !== null){
            aux = aux.nextNode;
            if (aux.value === value){
                isPresent = true;
                break;
            }
        };
        return isPresent; 
    }
    pop(){
        let actual = this.head;
        while(actual !== null && actual.nextNode.nextNode === null){  
            actual = actual.nextNode;
            if(actual.nextNode.nextNode === null){
                this.tail = actual;
                actual.nextNode = null;
            } 
        }
        this.size--;
    }
    append(value){
        let node = new Node(value);
        if(this.head === null){
            this.head = node;
        }else{
            this.tail.nextNode = node;
        }
        this.tail = node;
        this.size++;
    }
    prepend(value){
        let node = new Node(value);
        node.nextNode = this.head.nextNode;
        this.head.nextNode = node;
        this.size++;
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
listOne.pop()
console.log(listOne);
listOne.append(3);
console.log(listOne);
//console.log(listOne.tail)