function modal() {
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
}

export default modal;