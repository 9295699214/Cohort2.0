// <!-- Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM) -->



function Timer() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let am = "AM"
    let pm = "PM"

    // Ensure single digits are formatted with leading zeros
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    if(hours >=12 && hours <=23){
        console.log(`${hours}:${minutes}:${seconds} ${pm}`);
    }else{
        console.log(`${hours}:${minutes}:${seconds} ${am}`);
    }
    
    setTimeout(() =>{
        Timer()
    },1000)
    
}

Timer()

