let img = document.querySelector('img'),
    i = k = 1;

function downAnim() {
    let req = requestAnimationFrame(downAnim);

    img.style.top = k + 'px';

    k += 5;

    if (k > 400) {
        cancelAnimationFrame(req);
        leftAnim();
    }

}    
downAnim();
    
function leftAnim() {
    let req = requestAnimationFrame(leftAnim);
    
    img.style.left = i + 'px';

    i += 5;

    if (i > 400) {
        cancelAnimationFrame(req);
        upAnim();
    }
}

function upAnim() {
    let req = requestAnimationFrame(upAnim);
    
    img.style.top = k + 'px';

    k -= 5;

    if (k < 0) {
        cancelAnimationFrame(req);
        leftAnim2();
    }
}

function leftAnim2() {
    let req = requestAnimationFrame(leftAnim2);
    
    img.style.left = i + 'px';

    i += 5;

    if (i > 800) {
        cancelAnimationFrame(req);
        downAnim2();
    }
}

function downAnim2() {
    let req = requestAnimationFrame(downAnim2);

    img.style.top = k + 'px';

    k += 5;

    if (k > 400) {
        img.style.transform = 'scaleX(-1)';
        cancelAnimationFrame(req);
        rightAnim();
    }

}

function rightAnim() {
    let req = requestAnimationFrame(rightAnim);
    
    img.style.left = i + 'px';

    i -= 5;

    if (i < 400) {
        cancelAnimationFrame(req);
        upAnim2();
    }
}

function upAnim2() {
    let req = requestAnimationFrame(upAnim2);
    
    img.style.top = k + 'px';

    k -= 5;

    if (k < 0) {
        cancelAnimationFrame(req);
        rightAnim2();
    }
}

function rightAnim2() {
    let req = requestAnimationFrame(rightAnim2);
    
    img.style.left = i + 'px';

    i -= 5;

    if (i < 0) {
        img.style.transform = 'scaleX(1)';
        cancelAnimationFrame(req);
        downAnim();
    }
}