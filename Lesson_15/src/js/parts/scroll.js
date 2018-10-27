function scroll() {
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
}

export default scroll;