function start () {
    "use strict";

    var money = prompt("Ваш бюджет на месяц?", "");
    var time = prompt("Введите дату в формате YYYY-MM-DD", "");

    var answerExpenses1 = prompt("Введите обязательную статью расходов в этом месяце", "");
    var answerExpensesBudget1 = prompt("Во сколько обойдется?", "");
    var answerExpenses2 = prompt("Введите обязательную статью расходов в этом месяце", "");
    var answerExpensesBudget2 = prompt("Во сколько обойдется?", "");

    let appData = {
        budget: money,
        timeData: time,
        expenses: {
            [answerExpenses1]: answerExpensesBudget1,
            [answerExpenses2]: answerExpensesBudget2
        },
        optionalExpenses: {},
        income: [],
        savings: false
    };

    let dailyBudget = money / 30;

    alert("Ваш бюджет на день составляет " + dailyBudget + " рублей");
}
start();
