'use strict';

// 1 задание
function numbers() {
    let a = +prompt('Введите первое число');
    let b = +prompt('Введите второе число');
    if (a < b) {
        for (let i = a; i <= b; i++) {
            if (i % 2 === 0) {
                alert(i);
            }
        }
    }else {
        alert("Второе число должно быть больше первого!");
    }
}
numbers();

//2 задание
let i = 0;
while(i<3) {
    alert(`number ${i}`);
    i++;
}

//3 задание
let num = +prompt("Введите число", '');
while(num < 10) {
    let num = +prompt("Введите число еще раз", '');

    if(num > 10) break;
    if(!Number(num)) break;
}

//4 задание
function min(a, b) {
    return a < b ? a : b;
}
let a = +prompt("Введите первое число:", '1');
let b = +prompt("Введите второе число:", '2');
alert(`Меньшее из чисел: ${min(a, b)}`);


//5 задание
let ask = (question, yes, no) => {
    confirm(question) ? yes() : no();
}

ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
);

//6 задание
let age = +prompt('Введите возраст');
let checkAge = age => age > 18 || confirm('Родители разрешили?');
checkAge(age)