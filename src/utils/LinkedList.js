class LinkedList {
    constructor(values) {
        this.localKey = 0;
        this.count = 0;
        if(values != undefined && values instanceof Array) {
            this.pushArray(values);
        }
    }

    push(value) {
        let newNode = this.createNode(value);
        newNode.preNode = this.current;
        if(!('head' in this)) {
            this.head = newNode;
        }else {
            this.current.nextNode = newNode;
        }
        this.current = newNode;
        this.count++;
        return newNode.key;
    }
    pushArray(values) {
        let keys = [];
        for(value of values) {
            keys.push(this.push(value));
        }
        return keys;
    }

    pop(node) {
        if(node == this.head) {
            node.nextNode.preNode = null;
            this.head = node.nextNode;
        }else if(node == this.current) {
            node.preNode.nextNode = null;
            this.current = node.preNode;
        }else {
            node.nextNode.preNode = node.preNode;
            node.preNode.nextNode = node.nextNode;
        }
        this.count--;
    }
    popByKey(key) {
        if(!('head' in this)) {return;}
        let tempNode = this.head;
        do {
            if(tempNode.key == key) {
                this.pop(tempNode);
                return;
            }
            tempNode = tempNode.nextNode;
        }while(this.hasNext(tempNode))
    }
    popByIndex(index) {
        if(!('head' in this)) {return;}
        let tempNode = this.head;
        for(let i = 0; i < index; i++) {
            if(!this.hasNext(tempNode)) return;
            tempNode = this.next(tempNode);
        }
        this.pop(tempNode);
    }

    getByKey(key) {
        if(!('head' in this)) {return;}
        let tempNode = this.head;
        do {
            if(tempNode.key == key) {
                return tempNode.value;
            }
            tempNode = tempNode.nextNode;
        }while(this.hasNext(tempNode))
        return null;
    }
    getByIndex(index) {
        if(!('head' in this)) {return;}
        let tempNode = this.head;
        for(let i = 0; i < index; i++)  {
            if(!this.hasNext(tempNode)) return null;
            tempNode = this.next(tempNode);
        }
        return tempNode.value;
    }

    next(node) {
        return node.nextNode;
    }

    hasNext(node) {
        if(node.nextNode == null) return false;
        else return true;
    }

    createNode(value) {
        return {
            value: value,
            key: this.localKey++,
            preNode: null,
            nextNode: null,
        }
    }
}

export default LinkedList;