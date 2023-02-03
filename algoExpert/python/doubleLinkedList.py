# This is an input class. Do not edit.
class Node:
    def __init__(self, value):
        self.value = value
        self.prev = None
        self.next = None


# Feel free to add new properties and methods to the class.
class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def setHead(self, node):
        if self.head is None:
            self.head = node 
        else:
            node.next = self.head
            self.head = node

    def setTail(self, node):
        if self.head is None:
            self.head = node 
        else:
            curNode = self.head
            while curNode:
                curNode = curNode.next 
            node.prev = curNode
            curNode.next = node 
    ### need to fix ###       
    def insertBefore(self, node, nodeToInsert):
        if self.head is None:
            self.head = node 
            return
        curNode = self.head 
        while curNode:
            if curNode.value == node.value:
                if curNode.prev is not None:
                    prevNode = curNode.prev
                    curNode.prev = nodeToInsert
                    nodeToInsert.next = curNode
                    prevNode.next = curNode              
                    return
                curNode.prev = nodeToInsert
                nodeToInsert.next = curNode
                return
            curNode = curNode.next 

    def insertAfter(self, node, nodeToInsert):
        if self.head is None:
            self.head = node 
            return
        curNode = self.head
        while curNode:
            if curNode.value == nodeToInsert:
                node.next = curNode.next 
                curNode.next = node 
                node.prev = curNode
                return
            curNode = curNode.next 

    def insertAtPosition(self, position, nodeToInsert):
        if self.head is None:
            self.head = nodeToInsert
            return
        curNode = self.head 
        while curNode:
            if curNode.value == position.data:
                position.next = curNode
                position.prev = curNode.prev
                curNode.prev = position 
                curNode.next = curNode.next.next
                return
            curNode = curNode.next 
            
    def removeNodesWithValue(self, value):
        curNode = self.head 
        while curNode:
            if curNode.value == value:
                curNode = curNode.next 
                curNode.prev = None
                return
            curNode = curNode.next 

    def remove(self, node):
        curNode = self.head 
        while curNode:
            if curNode.value == node.value:
                lastNode = curNode.prev
                lastNode.next = curNode.next 
                curNode = curNode.next 
                curNode.prev = lastNode
                return
            curNode = curNode.next 
            
    def containsNodeWithValue(self, value):
        curNode = self.head 
        while curNode:
            if curNode.next.value == value:
                return True
        return False
    
    def print_list(self):
        nodesStr = ''
        curNode = self.head 
        while curNode.next:
            nodesStr += f'{curNode.value}->'
            curNode = curNode.next 
        nodesStr += curNode.value 
        print(nodesStr)  
            



x = DoublyLinkedList()
x.setHead(Node('A'))
x.insertAfter(Node('B'), 'A')
x.insertAfter(Node('C'), 'A')
x.insertAfter(Node('D'), 'A')
x.insertAfter(Node('E'), 'A')
print(x.containsNodeWithValue('E'))
x.insertBefore(Node('A'), Node('F'))
x.print_list()

