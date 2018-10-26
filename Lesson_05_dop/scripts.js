let dateTime = new Date(),
    p = document.getElementsByTagName('p')[0],
    dateStart = document.getElementsByClassName('date-start')[0],
    dateEnd = document.getElementsByClassName('date-end')[0],
    dateDifferent = document.getElementsByClassName('date-different')[0],
    btn = document.getElementsByTagName('button')[0],
    dayWeek = '';

switch (dateTime.getDay()) {
    case 0:
        dayWeek = 'Воскресенье';
        break;
    case 1:
        dayWeek = 'Понедельник';
        break;
    case 2:
        dayWeek = 'Вторник';
        break;
    case 3:
        dayWeek = 'Среда';
        break;
    case 4:
        dayWeek = 'Четверг';
        break;
    case 5:
        dayWeek = 'Пятница';
        break;
    case 6:
        dayWeek = 'Суббота';
        break;
}

p.textContent = dateTime.toLocaleTimeString() + " " + dateTime.toLocaleDateString() + " " + dayWeek;

btn.addEventListener('click', function() {
    let start = new Date(dateStart.value),
        end = new Date(dateEnd.value);

    dateDifferent.value = (end.getTime() - start.getTime()) / (1000 * 3600 * 24) + " дней";
});
