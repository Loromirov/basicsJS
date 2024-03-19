// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

function createCounter(count) {
  let counter = count;
  return {
    increment() {
      ++counter;
    },
    decrement() {
      --counter;
    },
    getCounter() {
      return counter;
    },
  };
}

const updateCounter = createCounter(23);
console.log(updateCounter.getCounter());
updateCounter.decrement();
console.log(updateCounter.getCounter());
updateCounter.increment();
console.log(updateCounter.getCounter());

// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.

function findElementByClass(rootElement, className) {
  if (rootElement.classList.contains(className)) {
    return rootElement;
  }
  for (let child of rootElement.children) {
    const element = findElementByClass(child, className);
    if (element) {
      return element;
    }
  }
}
// Пример
// const rootElement = document.getElementById("root");
// const targetElement = findElementByClass(rootElement, "my-class");
// console.log(targetElement);
