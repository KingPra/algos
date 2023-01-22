from node import Node

class LinkedList:
    def __init__(self, head=None):
        self.head = head
    
    def append(self, data):
        if self.head is None:
            self.head = Node(data)
        


    def print_list(self):
        if self.head is not None:
            output = ""
            cur_node = self.head
            print(cur_node)
        
llist = LinkedList()
llist.append("A")
llist.append("B")
llist.print_list()