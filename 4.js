"use strict";

/*
Необязательное задание.
Если вам показалось домашнее задание простым, выполняем данный пункт.

Необходимо от пользователя получить целое число.
Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.

Пример:
Пользователь ввел число 163. Программа должна вывести:
"В числе 163 количество сотен: 1, десятков: 6, единиц: 3"

Пример 2:
Пользователь ввел число 74. Программа должна вывести:
"В числе 74 количество сотен: 0, десятков: 7, единиц: 4"

Пример 3:
Пользователь ввел число 9537. Программа должна вывести:
"В числе 9537 количество сотен: 5, десятков: 3, единиц: 7"

Уточнение: Пользователь всегда вводит корректное положительное целое число.
Подсказка: Возможно, вам понадобится округление чисел и оператор %.
*/

const randomNum = Number.parseInt(prompt("Введите целое число: "));
let hund = randomNum / 100;
if (hund > 9) {
  hund = hund % 10;
}
let ten = randomNum / 10;
if (ten > 9) {
  ten = ten % 10;
}
let unit = randomNum;
if (unit > 9) {
  unit = unit % 10;
}
console.log(
  `В числе ${randomNum} количество сотен: ${parseInt(
    hund
  )}, десятков: ${parseInt(ten)}, единиц: ${parseInt(unit)}`
);
