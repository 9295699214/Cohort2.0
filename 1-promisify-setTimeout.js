/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return Promise = new Promise((resolve) => {
        resolve(n)
    })
}

wait(100).then((data) =>{
    sum = 0
    for(let i=0;i<100;i++){
        sum = sum +i
    }
    console.log(sum)
})