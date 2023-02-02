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
            
    def insertBefore(self, node, nodeToInsert):
        if self.head is None:
            self.head = node 
            return
        curNode = self.head 
        while curNode:
            if curNode.value == nodeToInsert:
                node.next = curNode
                node.prev = curNode.prev
                curNode.prev = curNode
                curNode = curNode.next
                curNode.prev = node 
                return
            curNode == curNode.next 

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

    def containsNodeWithValue(self, value):
        # Write your code here.
        pass
