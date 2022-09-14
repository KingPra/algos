// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

//steps
//1)create answer variable
//2)split string into array of words
//3)create array for punctuations
//4)create array to hold each chars
//5)create var to hold first letter of each word
//6)slice first char then push first char to end and add 'ay' as long as char does not match any of the char in punctuation array.
//time complexity: o(n^2 + m^2) space complexity: o(n + m + p)
function pigIt(str){
    let answer = "";
    let words = str.split(" ");
    let punctuations = [".", "?", '"', "'", ",", "-", "!", ":", ";", "(", ")", "[", "]", "...", "/"];

    for(i in words){
    let letters = words[i].split("");
      if(punctuations.includes(words[i])){
        answer += words[i]; 
      }else{
        let firstLetter = letters.shift();

        letters.push(firstLetter,"ay");
        answer += letters.join("");
        if(i < words.length - 1) {
          answer += " ";
        }
    }
    }
    return answer;
    
    
    
    }
    
    console.log(pigIt('Hello world !'));
    module.exports = {
      pigIt : pigIt
    };