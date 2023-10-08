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
        let previousNode = null
        let node = new Node(value);
        while(index <= i){
            let aux = actualNode.nextNode;
            if(index + 1 === i ){
                previousNode = actualNode;
            }
            if( i === 0 ){
                this.head = node; 
                this.head.nextNode = aux;
                break;
            } 
            if(i === this.size-1 && index === this.size-1){   
                this.tail = node; 
                previousNode.nextNode = this.tail; 
                break;
            }   
            console.log(index)
            if(i === index){           
                actualNode = node;
                actualNode.nextNode = aux;
                previousNode.nextNode = actualNode;
                break;
            }
            actualNode = actualNode.nextNode;
            index++;
        }
    }
    removeAt(i){
        let index = 0; 
        let aux = this.head;
        if ( i === 0 ){
            this.head = aux.nextNode;
            aux.nextNode = aux.nextNode;
        }
        while ( i < index ){
            aux = aux.nextNode; 
            console.log(aux);
            index++;
        } 
        this.size--;
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
listOne.removeAt(2)
console.log(listOne.toString())
