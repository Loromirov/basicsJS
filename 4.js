"use strict";

/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.
*/

// Здесь пишем решение, данный комментарий необходимо стереть.

function sumNum(enterNum1, enterNum2) {
  return enterNum1 + enterNum2;
}
function diffNum(enterNum1, enterNum2) {
  if (enterNum1 > enterNum2) {
    return enterNum1 - enterNum2;
  } else {
    return enterNum2 - enterNum1;
  }
}
function divNum(enterNum1, enterNum2) {
  return enterNum1 / enterNum2;
}
function composNum(enterNum1, enterNum2) {
  return enterNum1 * enterNum2;
}

console.log(sumNum(5, 8));
console.log(diffNum(9, 9));
console.log(divNum(5, 2));
console.log(composNum(2, 5));
