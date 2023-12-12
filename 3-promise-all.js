/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Hi There");
        }, 1000);
    });
}

function waitTwoSecond() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Hi There");
        }, 2000);
    });
}

function waitThreeSecond() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Hi There");
        }, 3000);
    });

}

async function calculateTime() {
    let before= new Date()
    await waitOneSecond()
    await waitTwoSecond()
    await waitThreeSecond()
    let after= new Date()
    let timeTaken = after - before
    console.log(timeTaken)

}

calculateTime()