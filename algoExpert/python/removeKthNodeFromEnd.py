class LinkedList:
    def __init__(self, value, next = None):
        self.value = value
        self.next = next

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

def printList(head):
    listToPrint = ''
    while head.next:
        listToPrint += f'{head.value}->'
        head = head.next 
    listToPrint += f'{head.value}'
    print(listToPrint)

# nodes = LinkedList(1, LinkedList(2, LinkedList(3, LinkedList(4, LinkedList(5))))) 
nodes = LinkedList(1, LinkedList(2, LinkedList(3, LinkedList(4, LinkedList(5)))))
removeKthNodeFromEnd(nodes, 2)
printList(nodes)
  