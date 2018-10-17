let cat = document.querySelector('img');

cat.addEventListener('mouseover', function() {
    let corX = Math.floor(Math.random() * 500),
        corY = Math.floor(Math.random() * 500);

        cat.style.left = corX
        cat.style.top = corY

        animate(function(timePassed) {
            cat.style.left = timePassed + 'px';
            cat.style.top = timePassed + 'px';
          });
});
    
function animate(draw, duration) {
    let start = performance.now();

    requestAnimationFrame(function animate(time) {
        // определить, сколько прошло времени с начала анимации
        let timePassed = time - start;

        console.log(time, start)
            // возможно небольшое превышение времени, в этом случае зафиксировать конец
        if (timePassed > duration) timePassed = duration;

        // нарисовать состояние анимации в момент timePassed
        draw(timePassed);

        // если время анимации не закончилось - запланировать ещё кадр
        if (timePassed < duration) {
            requestAnimationFrame(animate);
        }

    });
};