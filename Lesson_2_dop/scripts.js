function start() {
    "use strict";

    let week = [
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
        "Воскресенье"
    ];

    var div = document.createElement('div');
    
    for (let i = 0; i < 7; i++) {
        if (i == 5 || i == 6) {
            div.innerHTML += "<b>" + week[i] + "</b>" + "<br>";
        } else if (i == 3) {
            div.innerHTML += "<i>" + week[i] + "</i>" + "<br>";
        } else {
            div.innerHTML += week[i] + "<br>";
            document.body.appendChild(div);
        }
    }

    let arr = [
        "62346",
        "34645",
        "45623",
        "73253",
        "35632",
        "89123",
        "12363"
    ];

    for (let i = 0; i < 7; i++) {
        let str = arr[i];
        if (str[0] == 3 || str[0] == 7) {
            console.log(str);
        }
    }

}
start();