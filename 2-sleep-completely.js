/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function calculateSum(sec){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Hi There");
        }, sec);
    });
}

async function sleep (seconds) {
       console.log("Before 10 seconds")
       let val = await calculateSum(seconds)
       console.log("Done 10 seconds", val)
}

sleep(5000)