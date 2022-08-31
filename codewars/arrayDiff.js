
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

//steps
/**
 * 1. create an empty array named answer. We will store the the non-matching numbers in this variable
 * 2.parse through array b
 * 3.parse through array a. if match is found, do nothing. If match is not found, push the current value of array a to answer array.
 * 4. return answer array 
 * 
 * answerIndex = 0
 * outer for loop , answerIndex should increment at end of for loop
 * if match is found, answerIndex should decrement by 1 if answerIndex > 0
 * 
 */
//  function arrayDiff(a,b) { //time complexity:
    
//     let answer = [...a];
//     let answerIndex = 0;

//     for(let i = 0; i < a.length; i++){
//         for(let j = 0; j < b.length; j++){ 
//             console.log(answer); 
//             console.log('answerIndex is: ', answerIndex); 
//             if(a[i] == b[j]){  
//                 answer.splice(answerIndex,1);
//                 if(answerIndex != 0){
//                     answerIndex--;   
//                 }  
//             } 
            
//         }           
       
//     }
//     return answer;
// }

// module.exports = arrayDiff;

// console.log(arrayDiff([1,2,2,2,3,2],[1,2])); //[3]




// function arrayDiff1(a,b) { //time complexity:
//     let counter = a.length;
//     let answer = [...a];
//     console.log(typeof(answer));
//     for(let i = 0; i < a.length; i++){
//         console.log(answer.length);
//         for(let j = 0; j < b.length; j++){   
//             var filtered = array.filter(function(value, index, arr){ 
//                 return value !=;
//             });
//         }            
//     }
//     return answer;
// }



// console.log(arrayDiff1([1,2,2,2,3],[1,2])); //[3]


// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]
// arrayDiff([1,2,3],[1,2]) == [3]
//[0:true, ]
//steps:
/*
    1) create new map called answer(key:Index, value:current value of array ).
    2) loop through the first array a.
    3) inside loop goes through array b.
    4) 

*/
//  function arrayDiff(a,b) {

//  }

function arrayDiff(a,b){ //time complexity: o(n*m), space complexity: o(n)
    let answer = [];
    for( let i = 0; i < a.length; i++){

        let bContainsVaueOfA = false;

        for( let j = 0; j < b.length; j++){
            if(a[i] == b[j]){
                bContainsVaueOfA = true;
            }
        }

        if(bContainsVaueOfA == false){
            answer.push(a[i]);
        }

    }
    return answer;
}



module.exports = arrayDiff; 