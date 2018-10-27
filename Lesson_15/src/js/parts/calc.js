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
        totalValue.innerHTML = i;
        if (i < total) {
            i += 100;
        } else if (i => total) {
            cancelAnimationFrame(req);
            i = 0;
        } 
    }
}

export default calc;