window.addEventListener('DOMContentLoaded', function() {

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

    info.addEventListener('click', function(e) {
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

    let deadline = '2018-10-18';

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

    nav.addEventListener('click', function(e) {
        if (e.target.matches('a')) {
            e.preventDefault();

            let a = e.target.getAttribute('href').slice(1);
            a = document.getElementById(a);
            
            let coor = a.getBoundingClientRect().top,
                i = 0,
                scroll = setInterval(function() {
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
            overlay = document.querySelector('.overlay'),
            close = document.querySelector('.popup-close');

        more.addEventListener('click', function() {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });

        close.addEventListener('click', function() {
            overlay.style.display = 'none';
            this.classList.remove('more-splash');
            document.body.style.overflow = '';
        });
    }

    function openModal() {
        let more = document.querySelector('.more'),
            overlay = document.querySelector('.overlay'),
            close = document.querySelector('.popup-close');
            overlay.style.animation = 'none';

        more.addEventListener('click', function() {
            overlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });

        close.addEventListener('click', function() {
            overlay.style.display = 'none';
            document.body.style.overflow = '';
        });
    }

    function openAnimJSModal() {
        let more = document.querySelector('.more'),
            overlay = document.querySelector('.overlay'),
            close = document.querySelector('.popup-close'),
            popup = document.querySelector('.popup');
            overlay.style.animation = 'none';

            more.addEventListener('click', function() {
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
    
            close.addEventListener('click', function() {
                overlay.style.display = 'none';
                document.body.style.overflow = '';
                popup.style.top = '-300px';
            });
    }

    //Browser

    function getNameBrowser(){
        let usAg = navigator.userAgent;
        if (window.screen.availWidth < 767) openModal();
        if (usAg.search(/Trident/) > 0) openAnimCSSModal();
        if (usAg.search(/Edge/) > 0) openAnimCSSModal();
        openAnimJSModal();
    }
    getNameBrowser();
});