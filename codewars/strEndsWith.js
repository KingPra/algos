function solution(str, ending){
    let reversedStr = str.split("").reverse();
    let reversedArg = ending.split("").reverse();
    let status = true;
    
    for(let i = 0; i < reversedArg.length; i++) {
        if(reversedArg[i] != reversedStr[i]) {
        status = false;
    }
}
    return status;
  }

  function solution2(str, ending){
    let reversedStr = str.split("").reverse();
    let reversedArg = ending.split("").reverse();
    let status = true;
    
    for(let i = 0; i < reversedArg.length; i++) {
        if(reversedArg[i] != reversedStr[i]) {
        status = false;
    }
}
    return 12;
  }

 module.exports = solution;