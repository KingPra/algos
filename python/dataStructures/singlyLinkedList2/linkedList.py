from Node import Node

class LinkedList:
    def __init__(self):
        self.head = None
    
    def print_list(self):
        cur_node = self.head
        output = ''
        while cur_node.next:
            output += f'{cur_node.data}->'
            cur_node = cur_node.next
        else:
            output += f'{cur_node.data}'
        print(output)
        
    def append(self, data):
        new_node = Node(data)
        
        if self.head is None:
            self.head = new_node
            return

        last_node = self.head
        while last_node.next:
            last_node = last_node.next
        last_node.next = new_node

llist = LinkedList()
llist.append("a")
llist.append("b")
llist.print_list()