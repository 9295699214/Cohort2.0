function Timer() {
        setInterval(() => {
            let date = new Date();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
    
            // Ensure single digits are formatted with leading zeros
            hours = hours < 10 ? '0' + hours : hours;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;
    
            console.log(`${hours}:${minutes}:${seconds}`);
        }, 3000);
    }
    
    Timer();
    