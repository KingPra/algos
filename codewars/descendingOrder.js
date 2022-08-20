
function descendingOrder(n) {
    let arrOfStr = n.toString().split("");
    const arrOfNum = arrOfStr.map(str => {
        return Number(str);
    })
    for(let i = 0; i < arrOfNum.length; i++) {
        let nextNum = arrOfNum[i + 1];
        console.log("num[i] is " + arrOfNum[i] + " nextNum is" + nextNum + " and i is " + i);
        if (i+1  < arrOfNum.length && arrOfNum[i] < nextNum) {
            
            arrOfNum[i+1] = arrOfNum[i];
            arrOfNum[i] = nextNum;
            i = 0;
        }
    }
    console.log(arrOfNum);
    return arrOfNum;
}

descendingOrder(12345);