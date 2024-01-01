
const { LinkedList, Node } = require('/Users/sparshkarna/projects/linkedList/js/main.js'); // Replace this with the path to your LinkedList implementation

describe('LinkedList', () => {
    let linkedList;

    beforeEach(() => {
        linkedList = new LinkedList();
    });

    test('appending elements to the linked list', () => {
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);

        expect(linkedList.length).toBe(3);
        expect(linkedList.getByIndex(0)).toBe(1);
        expect(linkedList.getByIndex(1)).toBe(2);
        expect(linkedList.getByIndex(2)).toBe(3);
    });

    test('inserting elements at the beginning of the linked list', () => {
        linkedList.insertAtBeginning(3);
        linkedList.insertAtBeginning(2);
        linkedList.insertAtBeginning(1);

        expect(linkedList.length).toBe(3);
        expect(linkedList.getByIndex(0)).toBe(1);
        expect(linkedList.getByIndex(1)).toBe(2);
        expect(linkedList.getByIndex(2)).toBe(3);
    });

    test('removing elements from the linked list', () => {
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);

        linkedList.remove(2);

        expect(linkedList.length).toBe(2);
        expect(linkedList.getByIndex(0)).toBe(1);
        expect(linkedList.getByIndex(1)).toBe(3);
    });

    test('checking if an element exists in the linked list', () => {
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);

        expect(linkedList.contains(2)).toBe(true);
        expect(linkedList.contains(4)).toBe(false);
    });

    test('pop elements from the linked list', () => {
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);

        const poppedElement = linkedList.pop();
        expect(poppedElement).toBe(3);
        expect(linkedList.length).toBe(2);

        const poppedElementAtIndex = linkedList.pop(0);
        expect(poppedElementAtIndex).toBe(1);
        expect(linkedList.length).toBe(1);
    });

    test('get element by index from the linked list', () => {
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);

        expect(linkedList.getByIndex(1)).toBe(2);
        expect(() => linkedList.getByIndex(5)).toThrow('Linked list index out of range');
    });

    test('index of element in the linked list', () => {
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);

        expect(linkedList.indexOf(2)).toBe(1);
        expect(() => linkedList.indexOf(5)).toThrow('5 not in linked list');
    });

    test('concatenating two linked lists', () => {
        linkedList.append(1);
        linkedList.append(2);
        const otherList = new LinkedList();
        otherList.append(3);
        otherList.append(4);

        const concatenatedList = linkedList.concat(otherList);

        expect(concatenatedList.length).toBe(4);
        expect(concatenatedList.getByIndex(2)).toBe(3);
        expect(concatenatedList.getByIndex(3)).toBe(4);
    });

    test('multiplying elements in the linked list', () => {
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);

        const multipliedList = linkedList.multiply(3);

        expect(multipliedList.length).toBe(9);
        expect(multipliedList.getByIndex(7)).toBe(2);
        expect(multipliedList.getByIndex(8)).toBe(3);
    });

});
