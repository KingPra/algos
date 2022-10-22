// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

//steps
//1)create answer array
//2)parse through array and check for 0
//3)if we find 0 slice it out and push to end of array
//4)return answer
function moveZeros(arr) { //space: o(n+m) time: o(n + m)
    let answer = [];
    let zeroCounter = 0;
    for(let i = 0; i <arr.length; i++){
        if(arr[i] === 0){
            zeroCounter ++
        }else{
            answer.push(arr[i]);
        }
    }

    for(let j = 0; j < zeroCounter; j++){
        answer.push(0);
    }
    return answer;
}

// console.log(moveZeros([1,0,1,2,0,2,0,1,3,'a']));

function moveZerosLessCode(arr){ //time: o(n^2) space: o(n + m)
    let answer = [];

    for(let i = arr.length -1; i >= 0; i-- ){
        if(arr[i] === 0){
            answer.unshift(0);
        } else {
            answer.push(arr[i]);
        }
    }
    return answer.reverse();
}

console.log(moveZerosLessCode([1,0,1,2,0,2,0,1,3,'a']));
module.exports = {
    moveZeros : moveZeros,
    moveZerosLessCode : moveZerosLessCode
};