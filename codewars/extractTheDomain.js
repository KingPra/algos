// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

//steps
//1)create var string answer
//2)create a boolean isEnd that is false
//3)create an array protocols and store possible protocols
//4)parse through input
//5)check if it matchs a protocol turn isEnd true. 
//6)add chars to answer if a protcol is present and isEnd is true until you hit "."
//7)return answer

// is derin.com a complete url?
// http://, https:// , www. http://www. https://www.
// 

function domainName(url){ //time complexity: o(n*m), space complexity: o(n)

    if(url == null || url == undefined || url == "" ){
      return 'check input';
    }
    
    let answer = "";
    let isEnd = false;
    let protocols = ["http://", "https://", "www." ];
    let preCheckProtocols =  ["http", "www." ];
    let preCheck = url[0] + url[1] + url[2] + url[3];
  
   if(preCheckProtocols.includes(preCheck)) {
      console.log("passes precheck ", preCheck);
      for(let i = 0; i < url.length; i++){
        answer = answer + url[i];
  
        if(isEnd == true && url[i] == "."){
          answer = answer.slice(0, -1);
          return answer;
        }
  
        if(protocols.includes(answer)){
          let result = url[i + 1] + url[i + 2] + url[i + 3] + url[i + 4];
          if(result == "www.") {
            i += 4;        
          }
          isEnd = true;
          answer = "";
        }
      }
  } else {
    console.log("else statement")
    isEnd = true;
    for(let i = 0; i < url.length; i++){
      answer = answer + url[i];
  
      if(isEnd == true && url[i] == "."){
        answer = answer.slice(0, -1);
        return answer;
      }
  }}
    
  }
  console.log(domainName('http://noodoo.io'));
  module.exports = {
    domainName : domainName
  };
  
  
  //v06df3lf3h2e.fr/index.php