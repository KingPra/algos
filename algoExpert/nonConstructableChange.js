function nonConstructableChange(coins) {
    coins.sort((a,b) => a - b);
    let currentChange = 0;

    for(let i = 0; i < coins.length; i++) {
        if (coins[i] > currentChange + 1) {
            return currentChange + 1;
        }
        currentChange += coins[i];
    }

    return currentChange + 1;
}

nonConstructableChange([5,7,1,1,2,3,22]);
module.exports = nonConstructableChange;