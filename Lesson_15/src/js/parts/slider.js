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

export default slider;