#include <iostream>
#include <vector>

class Node {
public:
    int data;
    Node* next;
    
    Node(int data = 0, Node* next = nullptr) : data(data), next(next) {}
};

class LinkedList {
private:
    Node* head;

public:
    LinkedList() : head(nullptr) {}
    
    LinkedList(std::string data) : head(nullptr) {
        if (!data.empty()) {
            std::vector<char> dataList(data.begin(), data.end());
            extend(dataList);
        }
    }
    
    void insert_at_beginning(int data) {
        Node* node = new Node(data, head);
        head = node;
    }

    std::string toString() {
        if (head == nullptr) {
            return "Linked list is empty";
        }

        std::string linkedList;
        Node* itr = head;
        while (itr != nullptr) {
            linkedList += std::to_string(itr->data) + " --> ";
            itr = itr->next;
        }
        return linkedList;
    }

    void append(int data) {
        if (head == nullptr) {
            head = new Node(data);
        } else {
            Node* itr = head;
            while (itr->next != nullptr) {
                itr = itr->next;
            }
            itr->next = new Node(data);
        }
    }

    void extend(std::vector<char> dataList) {
        for (char data : dataList) {
            append(int(data));
        }
    }

    int size() {
        int length = 0;
        Node* itr = head;
        while (itr != nullptr) {
            length++;
            itr = itr->next;
        }
        return length;
    }

    int operator[](int key) {
        Node* itr = head;
        if (key < 0 || key >= size()) {
            throw std::out_of_range("linked list index out of range");
        }
        for (int i = 0; i < key; i++) {
            itr = itr->next;
        }
        return itr->data;
    }

    int pop(int index = -1) {
        if (index < 0) {
            index += size();
        }
        if (index >= size()) {
            throw std::out_of_range("linked list index out of range");
        }
        Node* itr = head;
        for (int i = 0; i < index - 1; i++) {
            itr = itr->next;
        }
        int popValue = itr->next->data;
        itr->next = itr->next->next;
        return popValue;
    }

    void remove(int data) {
        Node* itr = head;
        while (itr->next != nullptr && itr->next->data != data) {
            itr = itr->next;
        }
        if (itr->next != nullptr) {
            itr->next = itr->next->next;
        } else {
            throw std::invalid_argument("Value not in linked list");
        }
    }

    bool contains(int value) {
        Node* current = head;
        while (current != nullptr) {
            if (current->data == value) {
                return true;
            }
            current = current->next;
        }
        return false;
    }

    class Iterator {
    private:
        Node* _iter_node;

    public:
        Iterator(Node* head) : _iter_node(head) {}

        bool hasNext() {
            return _iter_node != nullptr;
        }

        int next() {
            if (hasNext()) {
                int current = _iter_node->data;
                _iter_node = _iter_node->next;
                return current;
            } else {
                throw std::out_of_range("Iterator out of range");
            }
        }
    };

    Iterator getIterator() {
        return Iterator(head);
    }

    int index(int value) {
        Iterator iter = getIterator();
        int index = 0;
        while (iter.hasNext()) {
            if (iter.next() == value) {
                return index;
            }
            index++;
        }
        throw std::invalid_argument("Value not in linked list");
    }

    LinkedList operator+(const LinkedList& other) {
        LinkedList new_list;
        Node* itr = head;
        while (itr != nullptr) {
            new_list.append(itr->data);
            itr = itr->next;
        }
        itr = other.head;
        while (itr != nullptr) {
            new_list.append(itr->data);
            itr = itr->next;
        }
        return new_list;
    }

    LinkedList operator*(int times) {
        if (times <= 0) {
            return LinkedList();
        }

        LinkedList new_list;
        for (int i = 0; i < times; i++) {
            Node* itr = head;
            while (itr != nullptr) {
                new_list.append(itr->data);
                itr = itr->next;
            }
        }
        return new_list;
    }
};