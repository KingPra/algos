function splitString(str){
    
        let answer = [];
        let moddedStr = str;
        let currentPair = "";
    
        if ((!str.length % 2) == 0){
            moddedStr = moddedStr + "_";
        }
    
        for( let i = 0; i < moddedStr.length; i++){
           
            if((i % 2) == 0) {
                currentPair += moddedStr[i];
            } else {
                currentPair += moddedStr[i];
                answer.push(currentPair);
                currentPair = "";
            }
        }
        return answer;
    
}


module.exports = splitString;