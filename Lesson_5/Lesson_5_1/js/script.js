let menuLi = document.querySelectorAll('.menu-item'),
    elementLi = document.createElement('li'),
    menuUl = document.querySelector('menu'),
    adv = document.querySelector('adv'),
    title = document.getElementById('title'),
    promptApple = document.getElementById('prompt');

elementLi.innerHTML = "Пятый пункт";
elementLi.className = "menu-item";
menuUl.appendChild(elementLi);
menuUl.insertBefore(menuLi[2], menuLi[1]);

document.body.style.background = "url(img/apple_true.jpg) center no-repeat";

title.innerHTML = "Мы продаем только <strong>подлинную</strong> технику Apple";

adv.remove();

let answer = prompt('Как вы относитесь в технике Apple?', '');
promptApple.innerHTML = answer;

