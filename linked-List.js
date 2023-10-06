class LinkedList {
    append(value){
        return value = new node(value);
    }
    prepend(value){
        return value = new node(value);
    }
}
class node {
    constructor(value = null, nextNode= null) {
        this.value = value;
        this.nextNode = nextNode
    }
}

