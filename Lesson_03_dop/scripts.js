function start() {
    "use strict";

    let str = "урок-3-был слишком легким";
    let str2 = "";

    for (let i = 0; i < (str.length); i++) {
        if (i == 0) {
            str2 += str[i].toUpperCase();
        } else if (str[i] == "-") {
            str2 += " ";
        } else {
            str2 += str[i];
        }
    }
    console.log(str2);

    let str3 = str2.slice(-6);

    alert(str2.substr(0, 10) + "о " + str3.substr(0, 4) + "о");

    let arr = [
        20,
        33,
        1,
        "Человек",
        2,
        3
    ];

    arr.splice(3, 1);

    let sum = 0;
    for (let i = 0; i < 5; i++) {
        sum += arr[i] ** 3;
        console.log(sum);
    }
    console.log(Math.sqrt(sum));

    function springStr(x) {
        if (typeof(x) !== 'string') {
            alert("Это не строка!");
        } else if (x.length > 50) {
            let y = x.trim();
            y = y.substr(0, 50) + "..." ;
            return y;
        } else {
            let y = x.trim();
            return y;
        }
    }
    let forStr = springStr("   qqwgweg gewqegweg ewg wqeg wqeg weqg wqeg wgeewg qwefwqef   ");
    console.log(forStr);

}
start();