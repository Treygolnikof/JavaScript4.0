function form() {
    let message = {
        loading: '<img src=\'img/ajax-loader.gif\'>',
        success: '<img src=\'img/success.png\'> Спасибо! Мы скоро с вами свяжемся!',
        failure: '<img src=\'img/failure.png\'> Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        formContact = document.querySelector('.second-form'),
        inputContact = formContact.getElementsByTagName('input'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

        statusMessage.classList.add('status');

    function sendForm(elem) {
        elem.addEventListener('submit', (event) => {
            event.preventDefault(); 
            elem.appendChild(statusMessage);

            let formData = new FormData(elem);

            function postData(data) {
                return new Promise( function(resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                    let obj = {};
                    formData.forEach( function(value, key) {
                        obj[key] = value;
                    });
                    data = JSON.stringify(obj);

                    request.onreadystatechange = function() {
                        if (request.readyState < 4) {
                            resolve();
                        } else if(request.readyState === 4) {
                            if (request.status == 200 && request.status < 300) {
                                resolve();
                            }
                            else {
                                reject();
                            }
                        }
                    };
                    request.send(data);
                });
            }

            function clearInput(inp) {
                for (let i = 0; i < inp.length; i++) {
                    inp[i].value = '';
                }
            }
            clearInput(input);
            clearInput(inputContact);

            postData(formData)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => statusMessage.innerHTML = message.success)
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput)
        });
    }

    sendForm(form);
    sendForm(formContact);
}

export default form;