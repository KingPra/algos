from Node import Node

class LinkedList:
    def __init__(self):
        self.head = None
    
    def append(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            return
        
        last_node = self.head
        while last_node.next:
            last_node = last_node.next
        last_node.next = new_node
       
    def print_nodes(self):
        cur_node = self.head
        nodes = ""
        
        while cur_node.next:
            nodes += f'{cur_node.data}->'
            cur_node = cur_node.next
        else:
            nodes += f'{cur_node.data}' 
        print(nodes)
        
llist = LinkedList()
llist.append('c')
llist.append('d')
llist.append('e')
llist.print_nodes()