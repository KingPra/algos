function filter_list(l) {
    // Return a new array with the strings filtered out
    //arguement will always be array
    // return null if no integers are found
    //create variable "filtered" to store integers
    //parse array
    // return variable "filtered"
    let filtered = [];
    for(let i = 0; i < l.length; i++) {
      if(typeof l[i] == "number") {
        filtered.push(l[i]);
      }
    }
    filtered.length = 0 ? null : filtered
  }

//   In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]


module.exports = filter_list;