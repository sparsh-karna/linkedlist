import unittest
from main import LinkedList  # Import your LinkedList class from your implementation file

class TestLinkedListMethods(unittest.TestCase):
    def setUp(self):
        # Set up the initial linked list for testing
        self.test_list = LinkedList()
        self.test_list.extend([1, 2, 3, 4, 5])

    def test_append(self):
        self.test_list.append(6)
        self.assertEqual(str(self.test_list), '1 --> 2 --> 3 --> 4 --> 5 --> 6 --> ')

    def test_extend(self):
        self.test_list.extend([7, 8, 9])
        self.assertEqual(str(self.test_list), '1 --> 2 --> 3 --> 4 --> 5 --> 7 --> 8 --> 9 --> ')

    def test_index(self):
        self.assertEqual(self.test_list.index(3), 2)
        with self.assertRaises(ValueError):
            self.test_list.index(10)

    def test_add(self):
        another_list = LinkedList()
        another_list.extend([11, 12, 13])
        combined_list = self.test_list + another_list
        self.assertEqual(str(combined_list), '1 --> 2 --> 3 --> 4 --> 5 --> 11 --> 12 --> 13 --> ')

    def test_mul(self):
        multiplied_list = self.test_list * 2
        self.assertEqual(str(multiplied_list), '1 --> 2 --> 3 --> 4 --> 5 --> 1 --> 2 --> 3 --> 4 --> 5 --> ')

    def test_pop(self):
        popped_value = self.test_list.pop()
        self.assertEqual(popped_value, 5)
        self.assertEqual(str(self.test_list), '1 --> 2 --> 3 --> 4 --> ')

    def test_remove(self):
        self.test_list.remove(3)
        self.assertEqual(str(self.test_list), '1 --> 2 --> 4 --> 5 --> ')

    def test_contains(self):
        self.assertTrue(4 in self.test_list)
        self.assertFalse(10 in self.test_list)

    def test_empty_list(self):
        empty_list = LinkedList()
        self.assertEqual(str(empty_list), 'Linked list is empty')
        self.assertEqual(len(empty_list), 0)

    def test_slice(self):
        sliced_list = self.test_list[1:4]
        self.assertEqual(str(sliced_list), '2 --> 3 --> 4 --> ')

    def test_iteration(self):
        iterated_list = LinkedList([10, 20, 30, 40])
        result = []
        for item in iterated_list:
            result.append(item)
        self.assertEqual(result, [10, 20, 30, 40])

    # Include more test methods for other functionalities as needed

if __name__ == '__main__':
    unittest.main()
