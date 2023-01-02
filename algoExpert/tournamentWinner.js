//still wip

// function tournamentWinner(competitions, results) {
//     let outcome = new Map();
//     let bestTeam = "test";
//     outcome.set(bestTeam, 0);

//     for(let i = 0; i < competitions.length; i++) {
        
//         let homeAway = 0;
//         if(results[i] == 0) {
//             homeAway = 1;
//         }

//         let winner = competitions[i][homeAway];

//         if(!outcome.has(winner)) {
//             outcome.set(winner, 3);
//         } else {
//             outcome.set(winner, outcome.get(winner)+= 3);
//         }

//         if(outcome.get(bestTeam) < outcome.get(winner)) {
//             bestTeam = winner;
//         }

//     }
//     return bestTeam;
// }

// ran into issues using Map and built in Map methods, code below uses object map
// function tournamentWinner(competitions, results) {
//     let outcome = {};
//     let bestTeam = "";
//     outcome[bestTeam] = 0;

//     for(let i = 0; i < competitions.length; i++) {
//         let winnerIdx = results[i] === 0 ? 1 : 0;
//         let winner = competitions[i][winnerIdx];

//         if(!outcome[winner]) {
//             outcome[winner] = 3;
//         } else {
//             outcome[winner] += 3;
//         }

//         if(outcome[bestTeam] < outcome[winner]) {
//             bestTeam = winner;
//         }
//     }
//     return bestTeam;
// }


function tournamentWinner(competitions, results) {
    let bestTeam = "";
    let outcome = {};
    outcome[bestTeam] = 0;

    for(let i = 0; i < competitions.length; i++) {
        let resultsIdx = results[i] === 0 ? 1 : 0;
        let winner = competitions[i][resultsIdx];
        
        if(outcome[winner]) {
            outcome[winner] += 3;
        } else {
            outcome[winner] = 3;
        }

        if(outcome[winner] > outcome[bestTeam]) {
            bestTeam = winner;
        }
    }
    return bestTeam;
}

console.log(tournamentWinner([["HTML", "C#"],["Python", "C#"],["HTML", "Python"]],[0,1,1]))
