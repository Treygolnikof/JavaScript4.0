window.addEventListener('DOMContentLoaded', () => {
    let name = document.createElement('h3'),
        price = document.createElement('p'),
        description = document.createElement('p'),
        country = document.createElement('p'),
        cards = document.createElement('div'),
        select = document.querySelector('.form-control'),
        col = document.querySelectorAll('.col-md-3'),
        image = document.createElement('img');

        name.classList.add('name');
        price.classList.add('price');
        description.classList.add('.description');
        country.classList.add('country');
        cards.classList.add('card');
        image.classList.add('picture');


    let request = new XMLHttpRequest();
    request.open('GET', 'current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);

            for (let i = 0; i < col.length; i++) {
                cards[i] = cards.cloneNode(true);
                col[i].appendChild(cards[i]);

                name.textContent = data.cars[i].name;
                name[i] = name.cloneNode(true);
                cards[i].appendChild(name[i]);

                image.setAttribute("src", data.cars[i].img);
                image[i] = image.cloneNode(true);
                cards[i].appendChild(image[i]);

                country.textContent = 'Страна: ' + data.cars[i].category;
                country[i] = country.cloneNode(true);
                cards[i].appendChild(country[i]);

                description.textContent = data.cars[i].description;
                description[i] = description.cloneNode(true);
                cards[i].appendChild(description[i]);

                price.textContent = 'от ' + data.cars[i].price + '$';
                price[i] = price.cloneNode(true);
                cards[i].appendChild(price[i]);

                select.addEventListener('change', function() {
                    col[i].style.display = 'none';
                    if (this.options[this.selectedIndex].value == country[i].innerHTML.slice(8) || this.options[this.selectedIndex].value == 'Все страны') {
                        col[i].style.display = "block";
                    } else {
                        col[i].style.display = 'none';
                    }
                });
            }

        } else {
            name.textContent = "Что-то пошло не так!";
        }
    });
});
