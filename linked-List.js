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
        while(actual !== null && actual.nextNode !== null){  
            actual = actual.nextNode;
            if(actual.nextNode.nextNode === null){
                this.tail = actual;
                actual.nextNode = null;
            } 
        }
        this.size--;
    }
    find(value){
        let aux = this.head;
        let index = 0;
        let actualIndex = null;
        if(aux.value === value)return index;
        while(aux.nextNode !== null){
            aux = aux.nextNode;
            index++;
            if(aux.value === value){
                actualIndex = index;
                break;
            }
        }
        return actualIndex;
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
        let actualNode = this.head;
        let list =` ( ${actualNode.value} ) -> `
        while(actualNode.nextNode !== null){
            actualNode = actualNode.nextNode
            list += `( ${actualNode.value} ) -> `
        }
        return list += `( ${this.tail.nextNode} )`;
    }
    insertAt(value, i){
        let index = 0;
        let actualNode = this.head;
        while(actualNode.nextNode !== null){
           let aux = actualNode.nextNode
           if(i === index){              
                let node = new Node(value);
                actualNode = node;
                actualNode.nextNode = aux;
                console.log(actualNode)
                break;
            }
            actualNode = actualNode.nextNode
            index++;
        }
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
listOne.append("fourth")
listOne.prepend(2)
listOne.insertAt("dos",1)
console.log(listOne.toString())
console.log(listOne)