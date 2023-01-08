// const letters = new Set(["a","b","c"]);

//     for (i in letters) {
//         console.log(i);
//     }
// console.log(letters.values(0));

// let text = "test";
// let counter = 0;
// let news = ""
// letters.forEach (function(value) {
//     counter++;
//     // console.log('counter:', counter);
//     // news = value;
//     // console.log('value,', value);

//     text += value;
//     console.log('text :',text);
//     // console.log("inside output: ",news);
// })

// console.log(letters.size);
// console.log(letters.has('a'));
// letters.add('d');
// console.log('after adding d, ', letters);
// letters.delete('a');
// console.log('after deleting a,', letters);
// console.log('just a log', letters);

// console.log("last output: ",news);

/**
 * test
 * testa
 * testatestab
 */


// let test = "test";

// for(let i = 0; i <4; i++ ){
//     console.log(test+= test);
    
// }

const letters = ["a","b","c"];

    for (i in letters) {
        console.log(i);
    }
console.log(letters.values(0));

let text = "test";
let counter = 0;
let news = ""
letters.forEach (function(value) {
    counter++;
    // console.log('counter:', counter);
    // news = value;
    // console.log('value,', value);
    text += value;
    console.log('text :',text);
    // console.log("inside output: ",news);
})