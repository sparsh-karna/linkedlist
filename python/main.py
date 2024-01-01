class Node:
    def __init__(self, data=None, next=None):
        self.data = data
        self.next = next

class LinkedList:
    def __init__(self, data=None):
        self.head = None
        if data != None:
            if str(type(data)) == "<class 'str'>":
                data = list(data)
            self.extend(data)
    
    def insert_at_beginning(self, data):
        node = Node(data, self.head)
        self.head = node

    def __str__(self):
        if self.head == None:
            return 'Linked list is empty'

        itr = self.head
        linkedList = ''
        while itr:
            linkedList += f'{itr.data} --> '
            itr = itr.next
        return linkedList

    def append(self, data):
        if self.head == None:
            self.head = Node(data)
        
        else:
            itr = self.head
            while itr.next: itr = itr.next
            itr.next = Node(data)

    def extend(self, dataList: list):
        for data in dataList:
            self.append(data)

    def __len__(self):
        length = 0
        itr = self.head
        while itr :
            length += 1
            itr = itr.next
        return length

    def __getitem__(self, key):
        itr = self.head
        if isinstance(key, slice):
            if key.step == 0:
                raise ValueError('slice step cannot be zero')
            key_start = key.start if key.start is not None else 0
            key_stop = key.stop if key.stop is not None else len(self)
            key_step = key.step if key.step is not None else 1

            if key_start < 0:
                key_start += len(self)
            if key_stop < 0:
                key_stop += len(self)

            key_stop, key_start = max(key_start, key_stop), min(key_start, key_stop)
            if key_stop >= len(self):
                raise IndexError('linked list index out of range')
            _temp = []
            itr = self.head
            for _ in range(key_start): itr = itr.next
            while key_start < key_stop:
                _temp.append(itr.data)
                for _ in range(abs(key_step)):
                    itr = itr.next
                    key_start += 1
                    if key_start == key_stop:
                        break
            if key_step < 0:
                _temp[::-1]
            return LinkedList(_temp)
        else:
            if key >= len(self):
                raise IndexError('linked list index out of range')
            if key < 0 : key += len(self)
            itr = self.head
            for _ in range(key): itr = itr.next
            return itr.data
        
    def pop(self, index=-1):
        if index < 0:
            index += len(self)
        if index >= len(self):
            raise IndexError('linked list index out of range')
        itr = self.head
        for i in range(index - 1):
            itr = itr.next
        popValue = itr.next.data
        itr.next = itr.next.next
        return popValue
    
    def remove(self, data):
        itr = self.head
        while itr.next.data != data and itr:
            itr = itr.next
        if itr:
            itr.next = itr.next.next
        else:
            raise ValueError('linkedList.remove(x): x not in linkedList')
        
    def __contains__(self, value):
        current = self.head
        while current:
            if current.data == value:
                return True
            current = current.next
        return False
    
    def __iter__(self):
        self._iter_node = self.head
        return self

    def __next__(self):
        if self._iter_node:
            current = self._iter_node
            self._iter_node = self._iter_node.next
            return current.data
        else:
            raise StopIteration
        
    def index(self, value):
        for index, i in enumerate(self):
            if i == value:
                return index
        raise ValueError(f'{value} not in linked list')
    
    def __add__(self, other):
        new_list = LinkedList()
        for item in self:
            new_list.append(item)
        for item in other:
            new_list.append(item)
        return new_list

    def __mul__(self, times):
        if times <= 0:
            return LinkedList()

        new_list = LinkedList()
        for _ in range(times):
            for item in self:
                new_list.append(item)
        return new_list