function timer() {   
    let dateTime = new Date(),
        p = document.getElementsByTagName('p')[0],
        hours = dateTime.getHours(),
        minutes = dateTime.getMinutes(),
        seconds = dateTime.getSeconds();

    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    p.textContent = hours + ":" + minutes + ":" + seconds;
    setTimeout("timer()", 1000);
 };
 timer();

 function timer2() {
    let dateTime = new Date(),
        p = document.getElementsByTagName('p')[1];
    p.textContent = dateTime.toLocaleTimeString();
    setTimeout("timer2()", 1000);
 };
 timer2();
