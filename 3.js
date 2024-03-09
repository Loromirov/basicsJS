"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

function maxNumber(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    console.log(
      `Максимальное значение среди чисел ${num1}, ${num2}, ${num3} равно ${num1}`
    );
  } else if (num2 > num1 && num2 > num3) {
    console.log(
      `Максимальное значение среди чисел ${num1}, ${num2}, ${num3} равно ${num2}`
    );
  } else {
    console.log(
      `Максимальное значение среди чисел ${num1}, ${num2}, ${num3} равно ${num3}`
    );
  }
}
const number1 = +prompt("Введите число 1");
const number2 = +prompt("Введите число 2");
const number3 = +prompt("Введите число 3");
maxNumber(number1, number2, number3);
