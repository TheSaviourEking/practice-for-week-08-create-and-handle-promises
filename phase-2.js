function stretch(timeLeft) {
    // refactor your code from phase 1
    // Your code here
    const timeRequired = 1000 // 1s
    return new Promise((resolve, reject) => {
        if (!checkTime(timeRequired, timeLeft)) {
            reject("Error: you don't have enough time to stretch");
        } else {
            setTimeout(() => {
                console.log('done stretching');
                resolve(timeLeft - timeRequired);
            }, timeRequired);
        }
    });
}


function runOnTreadmill(timeLeft) {
    // refactor your code from phase 1
    // Your code here
    const timeRequired = 500; // 0.5s
    return new Promise((resolve, reject) => {
        if (!checkTime(timeRequired, timeLeft)) {
            reject("Error: you don't have enough time to run on treadmill")
        } else {
            setTimeout(() => {
                console.log('done running on treadmill');
                resolve(timeLeft - timeRequired);
            }, timeRequired);
        }

    });
}


function liftWeights(timeLeft) {
    // refactor your code from phase 1
    // Your code here
    const timeRequired = 2000; // 2s
    return new Promise((resolve, reject) => {
        if (!checkTime(timeRequired, timeLeft)) {
            reject("Error: you don't have enough time to lift weights")
        } else {
            setTimeout(() => {
                console.log('done lifting weights');
                resolve(timeLeft - timeRequired);
            }, timeRequired);
        }
    })
}


function workout(totalTime) {
    // refactor your code from phase 1
    // Your code here
    stretch(totalTime)
        .then(timeLeft => runOnTreadmill(timeLeft))
        .then(timeLeft => liftWeights(timeLeft))
        .then(timeLeft => console.log(`done working out with ${timeLeft/1000} seconds left`))
        .catch(error => console.error(error))
}

function checkTime(timeRequired, timeLeft) {
    if (timeLeft >= timeRequired) return true;
    return false;
}
/* ============================ TEST YOUR CODE ============================

Comment in each invocation of your workout function below and run the file
(node phase-2.js) to see if you get the expected output.
*/


// workout(500);
// should print out the following:
// Error:  you dont have enough time to stretch


// workout(1000);
// should print out the following:
// done stretching
// Error:  you dont have enough time to run on treadmill


// workout(2000);
// should print out the following:
// done stretching
// done running on treadmill
// Error:  you dont have enough time to lift weights


//  workout(4000);
// should print out the following:
//   done stretching
//   done running on treadmill
//   done lifting weights
//   done working out with 0.5 seconds left
