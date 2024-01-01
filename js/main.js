class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(data = null) {
        this.head = null;
        if (data !== null) {
            if (typeof data === 'string') {
                data = data.split('');
            }
            this.extend(data);
        }
    }

    insertAtBeginning(data) {
        const node = new Node(data, this.head);
        this.head = node;
    }

    append(data) {
        if (this.head === null) {
            this.head = new Node(data);
        } else {
            let itr = this.head;
            while (itr.next !== null) {
                itr = itr.next;
            }
            itr.next = new Node(data);
        }
    }

    extend(dataList) {
        for (const data of dataList) {
            this.append(data);
        }
    }

    get length() {
        let length = 0;
        let itr = this.head;
        while (itr) {
            length++;
            itr = itr.next;
        }
        return length;
    }

    getByIndex(index) {
        let itr = this.head;
        let currentIndex = 0;
        while (itr) {
            if (currentIndex === index) {
                return itr.data;
            }
            currentIndex++;
            itr = itr.next;
        }
        throw new Error('Linked list index out of range');
    }

    pop(index = -1) {
        if (index < 0) {
            index += this.length;
        }
        if (index >= this.length) {
            throw new Error('Linked list index out of range');
        }
        let itr = this.head;
        if (index === 0) {
            this.head = itr.next;
            return itr.data;
        }
        for (let i = 0; i < index - 1; i++) {
            itr = itr.next;
        }
        const popValue = itr.next.data;
        itr.next = itr.next.next;
        return popValue;
    }

    remove(data) {
        let itr = this.head;
        if (itr.data === data) {
            this.head = itr.next;
            return;
        }
        while (itr.next !== null) {
            if (itr.next.data === data) {
                itr.next = itr.next.next;
                return;
            }
            itr = itr.next;
        }
        throw new Error('Data not found in linked list');
    }

    contains(value) {
        let current = this.head;
        while (current) {
            if (current.data === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    [Symbol.iterator]() {
        let itrNode = this.head;
        return {
            next: () => {
                if (itrNode !== null) {
                    const current = itrNode;
                    itrNode = itrNode.next;
                    return { value: current.data, done: false };
                }
                return { done: true };
            },
        };
    }

    indexOf(value) {
        let index = 0;
        for (const item of this) {
            if (item === value) {
                return index;
            }
            index++;
        }
        throw new Error(`${value} not in linked list`);
    }

    concat(otherList) {
        const newList = new LinkedList();
        for (const item of this) {
            newList.append(item);
        }
        for (const item of otherList) {
            newList.append(item);
        }
        return newList;
    }

    multiply(times) {
        if (times <= 0) {
            return new LinkedList();
        }

        const newList = new LinkedList();
        for (let i = 0; i < times; i++) {
            for (const item of this) {
                newList.append(item);
            }
        }
        return newList;
    }
}
