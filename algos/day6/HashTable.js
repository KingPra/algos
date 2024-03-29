//https://linuxhint.com/javascript-hash-tables/
class HashTable {
    constructor() {
        this.object = {};
        this.size = 0;
        this.length = 0;
    }

    hashFunc(key) {
        return key.toString().length % this.size;
        }
    
    addPair(key, value) {
        const hash = this.hashFunc(key);
        if(!this.object.hasOwnProperty(hash)) {
            this.object[hash] = {};
        }
        if(!this.object[hash].hasOwnProperty(key)) {
            this.length++;
        }
        this.object[hash][key] = value;
    }

    searchFunction(key) {
        const hash = this.hashFunc(key);
        if(this.object.hasOwnProperty(hash) && this.object[hash].hasOwnProperty(key)){
            return this.object[hash][key];
        } else {
            return null;
        }
    }
}



const hashTable = new HashTable();
hashTable.addPair('King', 'Software Engineer');
hashTable.addPair('Tom', 'Principle Software Engineer');
console.log(hashTable.searchFunction('King'));
console.log(hashTable.searchFunction('Jim'));