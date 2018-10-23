
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    function postConv() {
        return new Promise( function(resolve, reject) {
            request.open('GET', 'js/current.json');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

            request.onreadystatechange = () => {
                if (request.readyState === 4) {
                    if (request.status == 200 && request.status < 300){
                        resolve();
                        console.log('ok');
                    } else {
                        reject();
                        console.log('no');
                    }
                }
            };
            request.send();
        });
    }

    postConv()
        .then(() => {
            let data = JSON.parse(request.response);
            inputUsd.value = inputRub.value / data.usd;
        })
        .catch(() => inputUsd.value = "Что-то пошло не так!");
});

