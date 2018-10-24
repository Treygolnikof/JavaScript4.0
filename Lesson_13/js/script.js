window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    //Tabs

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', (e) => {
        let target = e.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //Timer

    let deadline = '2018-10-25';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));

        if (hours < 10 && hours >= 0) hours = "0" + hours;
        if (minutes < 10 && minutes >= 0) minutes = "0" + minutes;
        if (seconds < 10 && seconds >= 0) seconds = "0" + seconds;

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);

            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0 ) {
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
                clearInterval(timeInterval);
            }
        }
    }

    setClock('timer', deadline);

    //Scroll

    let nav = document.querySelector('nav');

    nav.addEventListener('click', (e) => {
        if (e.target.matches('a')) {
            e.preventDefault();

            let a = e.target.getAttribute('href').slice(1);
            a = document.getElementById(a);
            
            let coor = a.getBoundingClientRect().top,
                i = 0,
                scroll = setInterval(() => {
                    scrollBy(0, coor / 40);
                    i++;
                    if (i == 40) {
                        clearInterval(scroll);
                    }
                }, 20);
        }
    });

    //Modal

    function openAnimCSSModal() {
        let more = document.querySelector('.more'),
            descBtn = document.getElementsByClassName('description-btn'),
            overlay = document.querySelector('.overlay'),
            close = document.querySelector('.popup-close');
        
        for (let k = 0; k < descBtn.length; k++) {
            descBtn[k].addEventListener('click', () => {
                overlay.style.display = 'block';
                this.classList.add('more-splash');
                document.body.style.overflow = 'hidden';
            });
        }

        more.addEventListener('click', () => {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });

        close.addEventListener('click', () => {
            overlay.style.display = 'none';
            this.classList.remove('more-splash');
            document.body.style.overflow = '';
        });
    }

    function openModal() {
        let more = document.querySelector('.more'),
            descBtn = document.getElementsByClassName('description-btn'),
            overlay = document.querySelector('.overlay'),
            close = document.querySelector('.popup-close');
            overlay.style.animation = 'none';

        for (let k = 0; k < descBtn.length; k++) {
            descBtn[k].addEventListener('click', () => {
                overlay.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        }

        more.addEventListener('click', () => {
            overlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });

        close.addEventListener('click', () => {
            overlay.style.display = 'none';
            document.body.style.overflow = '';
        });
    }

    function openAnimJSModal() {
        let more = document.querySelector('.more'),
            descBtn = document.getElementsByClassName('description-btn'),
            overlay = document.querySelector('.overlay'),
            close = document.querySelector('.popup-close'),
            popup = document.querySelector('.popup');
            overlay.style.animation = 'none';

        for (let k = 0; k < descBtn.length; k++) {
            descBtn[k].addEventListener('click', () => {
                overlay.style.display = 'block';
                document.body.style.overflow = 'hidden';
                popup.style.top = '-300px';
                let i = 0;
                function downAnim() {
                    let req = requestAnimationFrame(downAnim);
                    popup.style.top = i + 'px';
                    i += 5;
                    if (i > 150) cancelAnimationFrame(req);  
                }
                downAnim();
            });
        }

        more.addEventListener('click', () => {
            overlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
            popup.style.top = '-300px';
            let i = 0;
            function downAnim() {
                let req = requestAnimationFrame(downAnim);
                popup.style.top = i + 'px';
                i += 5;
                if (i > 150) cancelAnimationFrame(req);  
            }
            downAnim();
        });

        close.addEventListener('click', () => {
            overlay.style.display = 'none';
            document.body.style.overflow = '';
            popup.style.top = '-300px';
        });
    }

    //Browser

    function getNameBrowser(){
        let usAg = navigator.userAgent;
        if (window.screen.availWidth < 767) {
            openModal();
        } else if (usAg.search(/Trident/) > 0 || usAg.search(/Edge/) > 0) {
            openAnimCSSModal();
        } else {
            openAnimJSModal();
        }
    }
    getNameBrowser();

    // Phonenumber mask

    let numMainForm = document.getElementsByClassName('popup-form__input')[0];

    numMainForm.addEventListener('keyup', function() {
        numMainForm.maxLength = 17;
        numMainForm.value = numMainForm.value.replace('+7', "");
        numMainForm.value = numMainForm.value.replace(/\D/g, "");
        numMainForm.value = numMainForm.value.replace(/^(\d{3})(\d)/g, "($1) $2");
        numMainForm.value = '+7 ' + numMainForm.value.replace(/(\d{3})(\d)/, "$1-$2");
    });

    let numSecForm = document.getElementsByClassName('second-form__input')[0];

    numSecForm.addEventListener('keyup', function() {
        numSecForm.maxLength = 17;
        numSecForm.value = numSecForm.value.replace('+7', "");
        numSecForm.value = numSecForm.value.replace(/\D/g, "");
        numSecForm.value = numSecForm.value.replace(/^(\d{3})(\d)/g, "($1) $2");
        numSecForm.value = '+7 ' + numSecForm.value.replace(/(\d{3})(\d)/, "$1-$2");
    });

    // Form

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

    // Slider

    function slider() {
        let slideIndex = 1,
            slides = document.querySelectorAll('.slider-item'),
            prev = document.querySelector('.prev'),
            next = document.querySelector('.next'),
            dotsWrap = document.querySelector('.slider-dots'),
            dots = document.querySelectorAll('.dot');

        showSlides(slideIndex);

        function showSlides(n) {
            if (n > slides.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = slides.length;
            }

            slides.forEach((item) => item.style.display = 'none');
            dots.forEach((item) => item.classList.remove('dot-active'));

            slides[slideIndex - 1].style.display = 'block';
            dots[slideIndex - 1].classList.add('dot-active');

            let i = 0,
                k = -30;

            function opacityUp() {
                let req = requestAnimationFrame(opacityUp);
            
                slides[slideIndex - 1].style.opacity = i;
            
                i += 0.01;
            
                if (i >= 1.01) {
                    cancelAnimationFrame(req);
                }
            }
            opacityUp();

            function transformUp() {
                let req = requestAnimationFrame(transformUp);

                slides[slideIndex - 1].style.transform = 'translateY(' + k + 'px)';
                console.log(slides[slideIndex - 1].style.transform);
                k += 1;

                if (k > 0) {
                    cancelAnimationFrame(req);
                }
            }
            transformUp();

        }

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }
        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        prev.addEventListener('click', function() {
            plusSlides(-1);
        });

        next.addEventListener('click', function() {
            plusSlides(1);
        });

        dotsWrap.addEventListener('click', function(event) {
            for (let i = 0; i < dots.length + 1; i++) {
                if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                    currentSlide(i);
                }
            }
        });
    }
    slider();

    // Calc

    function calc() {
        let persons = document.querySelectorAll('.counter-block-input')[0],
            restDays = document.querySelectorAll('.counter-block-input')[1],
            place = document.getElementById('select'),
            totalValue = document.getElementById('total'),
            personsSum = 0,
            daysSum = 0,
            total = 0;

        totalValue.innerHTML = 0;

        persons.addEventListener('input', function() {
            personsSum = +this.value;
            persons.value = persons.value.replace(/\D/g, "");
            total = (daysSum + personsSum) * 4000;

            if (restDays.value == '' || persons.value == '') {
                totalValue.innerHTML = 0;
            } else {
                setTimeout(calcAnim(), 10);
            }
        });

        restDays.addEventListener('input', function() {
            daysSum = +this.value;
            restDays.value = restDays.value.replace(/\D/g, "");
            total = (daysSum + personsSum) * 4000;

            if (persons.value == '' || restDays.value == '') {
                totalValue.innerHTML = 0;
            } else {
                setTimeout(calcAnim(), 10);
            }
        });

        place.addEventListener('change', function() {
            if (restDays.value == '' || persons.value == '') {
                totalValue.innerHTML = 0;
            } else {
                let a = total;
                totalValue.innerHTML = a * this.options[this.selectedIndex].value;
            }
        })

        let i = 0;

        function calcAnim() {
            let req = requestAnimationFrame(calcAnim);
            i += 100;

            totalValue.innerHTML = i;

            console.log(i);
            if (i == total) {
                cancelAnimationFrame(req);
            }
        }
    }
    calc();
});