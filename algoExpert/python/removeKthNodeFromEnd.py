class LinkedList:
    def __init__(self, value):
        self.value = value
        self.next = None

def length(node):
    if node is None:
        return 0
    while node:
        return 1 + length(node.next)

def removeKthNodeFromEnd(head, k):
    counter = length(head) - k
    curNode = head
    if counter == 0:
        head = head.next 
        return head
    
    while curNode:
        if counter == 1:
            curNode.next = curNode.next.next
            return head
        else:
            curNode = curNode.next 
            counter -= 1
    return head

# nodes = LinkedList(1, LinkedList(2, LinkedList(3, LinkedList(4, LinkedList(5))))) 
nodes = LinkedList(1)
nodes.next = LinkedList(2)
print(removeKthNodeFromEnd(nodes, 2))
  