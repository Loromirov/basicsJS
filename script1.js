// // Задание 1: ""Управление библиотекой книг""

// // Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

// // Свойство title (название) - строка, название книги.
// // Свойство author (автор) - строка, имя автора книги.
// // Свойство pages (количество страниц) - число, количество страниц в книге.
// // Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

 class Book {
   constructor(title, author, pages) {
     this.title = title;
     this.author = author;
     this.pages = pages;
   }
   displayInfo() {
     console.log(
       `Это книга ${this.title}. Автор(ы) - ${this.author}. Количество страниц - ${this.pages}`
     );
   }
 }
 const book1 = new Book("Пикник на обочине", "братья Стругацкие", 231);
 console.log(book1);
 const book2 = new Book("Метро 2033", "Дмитрий Глуховский", 384);
 console.log(book2);

 book1.displayInfo();
 book2.displayInfo();
