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
        nodes = ''
        cur_node = self.head
        while cur_node.next:
            nodes += f'{cur_node.data}->'
            cur_node = cur_node.next
        else:
            nodes += f'{cur_node.data}'
        print(nodes)
        
    def print_back_forth(self):
        nodes = []
        cur_node = self.head
        while cur_node:
            nodes.append(cur_node.data)
            cur_node = cur_node.next
        
        i = len(nodes) - 2
        while i >= 0:
            nodes.append(nodes[i])
            i = i - 1
        print(nodes)
            
            
        
llist = LinkedList()
llist.append("A")
llist.append("b")
llist.append("c")
llist.print_nodes()
llist.print_back_forth()