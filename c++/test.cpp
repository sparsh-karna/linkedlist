#include <iostream>
#include "main.cpp" 

void testLinkedList() {
    LinkedList list1;
    list1.append(1);
    list1.append(2);
    list1.append(3);

    LinkedList list2("456");

    LinkedList combined = list1 + list2;
    std::cout << "Combined list: " << combined.toString() << std::endl;
    LinkedList multiplied = list1 * 3;
    std::cout << "Multiplied list: " << multiplied.toString() << std::endl;
}

int main() {
    testLinkedList();
    return 0;
}
