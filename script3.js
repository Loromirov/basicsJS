/**
 * 
""Изменение стиля элемента через заданное время""

Напишите функцию changeStyleDelayed, которая принимает идентификатор элемента и время задержки (в миллисекундах) в качестве аргументов. Функция должна изменить стиль элемента через указанное время.

// Пример использования функции
changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'"
 */

function changeStyleDelayed(id, delay) {
    return new Promise(resolve => {
    setTimeout(() => {
    document.getElementById(id).style.backgroundColor = ‘red’;
    resolve();
    }, delay);
    });
    }