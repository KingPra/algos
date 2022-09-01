
// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
// steps
// 1)create answer string var
// 2)parse through the string that is passed in.
// 3)check each char for upper case, if upper case add space plus current char to 
// answer, else push current char 
function solution(string) {
    
   let answer = "";
   
   if (string == undefined || string == null){
       return "input is not correct";
   }
   for(let i = 0; i < string.length; i++) {

       if(string[i].toUpperCase() == string[i]) {
           answer += " " + string[i];
       } else {
           answer += string[i];
       }
   }
   return answer;
}


module.exports = solution;