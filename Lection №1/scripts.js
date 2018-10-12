let arr = [];
for (let i = 2; i <= 100; i++) {
    let bool = true
    for (let a = 2; a < i; a++) {
        if (i % a == 0) {
            bool = false;
        }
    }
    if (bool == true) {
        arr.push(i);
    }
}

let div = document.createElement('div');
arr.forEach(function(item) {
    div.innerHTML += item + " - делители этого числа: 1 и " + item + "<br>";
    document.body.appendChild(div);
});