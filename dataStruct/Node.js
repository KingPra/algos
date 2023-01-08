class Node {
     data;
     next;

     Node(data) {
        this.data = data;
     }

     countNodes(head) {
        let counter = 1;
        let pointer = head;

        while(pointer.next != null) {
            pointer = pointer.next;
            counter++;
        }
        return counter;
     }

}

