'use strict'

// // 1) Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
// const arr1 = ['a', 'b', 'c'];
// const arr2 = [1, 2, 3];

// const newArr1 = arr1.concat(arr2);

// console.log(newArr1);

// // 2) Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
// const arr3 = ['a', 'b', 'c'];

// arr3.push(1, 2, 3);

// console.log(arr3);

// // 3) Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
// const arr4 = [1, 2, 3];
// const arr5 = [4, 5, 6];

// const newArr2 = arr4.concat(arr5);

// console.log(newArr2);

// // 4) Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
// const arr6 = [1, 2, 3];

// arr6.reverse();

// console.log(arr6);

// // 5) Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
// const arr7 = [1, 2, 3];

// arr7.push(5, 6, 7);

// console.log(arr7);

// // 6) Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
// const arr8 = [1, 2, 3];

// arr8.unshift(4, 5, 6);

// console.log(arr8);

// // 7)  Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
// const arr9 = ['js', 'css', 'jq'];

// //console.log(arr9.length);

// console.log(arr9[0]);

// // 8) Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
// const arr10 = ['js', 'css', 'jq'];

// //console.log(arr10.length);

// console.log(arr10[arr10.length -1]);

// // 9) Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
// const arr11 = [1, 2, 3, 4, 5];

// const arr12 = arr11.slice(0, 3);

// console.log(arr12);

// // 10) Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
//             //0   1  2  3  4 5
// const arr13 = [1, 2, 3, 4, 5];

// const arr14 = arr13.slice(3, 5);

// console.log(arr14);

// // 11) Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
//             //0  1  2   3  4
// const arr15 = [1, 2, 3, 4, 5];

// arr15.splice(1, 2);

// console.log(arr15);

// // 12)  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
//             //0  1  2   3  4
// const arr16 = [1, 2, 3, 4, 5];

// const arr17 = arr16.splice(1, 3);

// console.log(arr17);

// // 13) Дан массив [1, 2, 3, 4, 5]. 
// //С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// const arr18 = [1, 2, 3, 4, 5];

// arr18.splice(3, 0, 'a', 'b', 'c');

// console.log(arr18);

// // 14) Дан массив [1, 2, 3, 4, 5]. 
// // С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// const arr19 = [1, 2, 3, 4, 5];

// arr19.splice(1, 0, 'a', 'b');
// arr19.splice(5, 0, 'c');
// arr19.splice(8, 0, 'e');

// console.log(arr19);
//------------------------------------------------------------------------------------------------------
// // 1) Выбираем случайное число (от 0 до длины массива);
// // 2) Записать в переменную обращение типа массив [индекс];
// // 3) Вывести переменную из п.2 в алерт;
// let index = Math.floor(Math.random()*animals.length);
// alert(animals[index]);
// 1) Через prompt вводим свой вариант животного
// 2) Вариант компьютера записываем в переменную
// 3) Сравниваем наш вариант з копьютером
// 3,1) Если варианти совпали, то выводим алерт "You are win!".
// 3,2) Если варианти не совпали, выводим алерт "You are los!" и вариант компьютера.

let animal = ['tiger', 'lion', 'elephant', 'cow', 'cat', 'dog', 'pig', 'snake'];
let a = Math.floor(Math.random()*animal.length);

// alert(animals[index]); 
// let b = index; 
// prompt()

// alert(b);
// if animals === index {
//     alert('You are win!');
// } else {
//     alert('You are los!' && b);
// }

// let arr = ['тигр', 'кенгуру', 'собака', 'кошка', 'свинья', 'цапля', 'дельфин' , 'медведь',' заяц', 'верблюд']
// let a = Math.round((Math.random().toFixed(2))*(arr.length-1))
// console.log('index:', a);
// let comp =arr[a];
// console.log(comp);
// let my = prompt('Enter an animal')
// if(my == comp){
//  alert('You are win!!!')
// } else {
//  alert(`You are lose - correct answer - ${comp}`)
// } 

//---------------------------------------------
// Написати гру Камінь Ножиці Папір.
// Варіанти вибору потрібно зберігати в масиві
// Користувач вводить свій варіант
// Компютер вибирає свій рандомний варівант з масиву
// Первіряємо вибір користувача і вибір компютера. 
// Опрацювати всі варіанти:
// 1) Варіанти де виграє користувач
// 2) Варіанти де виграє компютер
// 3) Варіанти де виходить нічия.


// 1) Записуємо в змінну строку з промта
// 2) Зробити строку масивом
// 3) Скопіювати масив
// 4) Реверсимо масив
// 5) З масивів робимо строки
// 6) Порівнюємо дві строки і виводимо результат в консоль; 

// let logins = ['rew', 'qwewwe', 'apple', 'js', 'row', 'col']

// 1) Запитати логін
// 2) Перевірити чи існує логін в базі
// 3) Якщо логін існує вивести алерт ("Такий логін вже існує")
// 4) Якщо логін не існує вивести алерт ("Вітаємо") 

// Collapse
// Message Input
// Message #random

//PART 2

// 1 с предусловием - выполняется пока истинно условие, указанное перед началом цикла

// Сделаем простой счетчик
// let counter = 0;
// while(counter < 10) {
//     console.log("counter:", counter);
//     counter += 1;
// }

// Будем заполнять места в отеле до тех пор пока
// текущее количество клиентов не будет равно максимально допустимому
// let clientCounter = 18;
// const maxClients = 25;
// while(clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// Переберем массив клиентов и выведем их имена
// const clients = ["Mango", "Ajax", "Poly"];
// let i = 0;
// while (i < clients.length) {
//   console.log('Logging clients: ', clients[i]);
//   i += 1;
// }

// 2 с постусловием - условие проверяется после выполнения цикла
// let input = 0;

// do {
//   input = Number( prompt('Введите число больше 10', '') );
// } while(input <= 10);

// 3 со счетчиком - переменная изменяется с заданным шагом и цикл выполняется для каждого шага
// Итераторы по традиции называются буквами i/j/k
// const number = 10;

// for(let i = 0; i < number; i += 1) {
//   console.log(i);
// }

// Вспомним про операцию a % b и выведем остаток
// от деления используя цикл
// for(let i = 0, max = 10; i < max; i += 1) {
//     console.log(`${max} % ${i} = `, max % i);
//   }

//=============================================
// const clients = ['Mango', 'Ajax', 'Poly'];

// for(let i = 0, max = clients.length; i < max; i += 1) {
//   console.log(clients[i]);
// }

//=============================================
// const numbers = [];

// for(let i = 0; i < 10; i += 1) {
//   numbers.push(`number-${i}`);
// }

// console.log(numbers);

// 4 бесконечный - безусловный цикл, проверка условия отсутствует или заменяется константным значением
// Итерация по массиву
// const clients = ['Mango', 'Ajax', 'Poly'];

// for(const value of clients) {
//   console.log(value);
// }

// // Итерация по строке
// const iterable = 'javascript';

// for (const value of iterable) {
//   console.log(value);
// }

// break
// const clients = ["Mango", "Poly", "Ajax"];
// const clientName = "Poly";
// let resultMsg = "";
// for (const value of clients) {
//   // На каждой итерации мы будем проверять совпадает ли элемент массива с именем клиента.
//   // Если совпадает то мы записываем в resultMsg сообщение об успехе и делаем break чтобы не искать дальше
//   if (value === clientName) {
//     resultMsg = "Клиент с таким именем есть в базе данных!";
//     break;
//   }
//    // Если они не совпадают то запишем в resultMsg сообщeние об отсутсвии имени
//   resultMsg = "Клиента с таким именем нет в базе данных!";
// }
// console.log(resultMsg); // Клиент с таким именем есть в базе данных!

// const clients = ["Mango", "Poly", "Ajax"];
// const clientName = "Poly";
// let resultMsg = "Клиента с таким именем нет в базе данных!";

// for (const value of clients) {
//   // На каждой итерации мы будем проверять совпадает ли элемент массива с именем клиента.
//   // Если совпадает, то мы записываем в resultMsg сообщение об успехе и делаем break чтобы не искать дальше
//     if (value === clientName) {
//       resultMsg = "Клиент с таким именем есть в базе данных!";
//       break;
//     }// Если не совпадает то ничего не делаем
// }
// console.log(resultMsg); // Клиент с таким именем есть в базе данных!

// continue
// Используем цикл для вывода только нечетных чисел!
// Для чётных i срабатывает continue, выполнение тела
// прекращается и управление передаётся на следующую итерацию.

// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) continue;

//   console.log("Нечетное i: ", i); // 1, 3, 5, 7, 9
// }

// //================ task 1 ===============
// /*
//  * Есть массив имен пользователей
//  * Используя методы массива, последовательно выполнить указанные операции
//  */
// const users = ["Mango", "Poly", "Ajax", "Chelsey"];
// // // Удалить первый элемент массива
// users.splice(0, 1);
// console.log(users); // ["Poly", "Ajax", "Chelsey"]
// // // Удалить последний элемент массива
// users.pop();
// console.log(users); // ["Poly", "Ajax"]
// // // Добавить в начало массива пользователя "Lux"
// users.unshift('Lux');
// console.log(users); // ["Lux", "Poly", "Ajax"]
// // // Добавить в конец массива два пользователя ("Jay" и "Kiwi") за одну операцию
// users.push('Jay', 'Kiwi');
// console.log(users); //  ["Lux", "Poly", "Ajax", "Jay", "Kiwi"]
// // // Удалить из массива элемент хранящийся в переменной userToDelete
// const userToDelete = "Ajax";
// users.splice(2, 1);
// console.log(users); //  ["Lux", "Poly", "Jay", "Kiwi"]
// // // Добавить в массив пользователя "Kong", перед пользователем хранящейся в переменной userToInsertBefore
// const userToInsertBefore = "Jay";
// users.splice(2, 0, 'Kong');
// console.log(users); //  ["Lux", "Poly", "Kong", "Jay", "Kiwi"]

// //=============================task 2=======
// //Задание 1 Вывести числа от 4 до 400 на экран.
// let number = 4;
// while(number < 401) {
// console.log("number:", number);
// number += 1;
// }
// //=============================task 3 ===============
// //Задание 2 Вывести числа в последовательности: 4 7 10 13 с помощью цикла.
// let number = 4;
// while(number < 401) {
// console.log("number:", number);
// number += 3;
// }
// //=============================task 4 ===============
// //Задание 3 Вывести числа 654 653 652 до нуля.
// let number = 654;
// while(number > 0) {
// console.log("number:", number);
// number -= 1;
// }
// //=============================task 5 ===============
// //Задание 4 Вывести все годы с 1983 до 2017.
// let number = 1983;
// while(number < 2018) {
// console.log("number:", number);
// number += 1;
// }
// //============================== task 6 ===============
// //Задание 8 Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. 
//Какое число получится? 
//Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), 
//и запишите его в переменную num
// var n = 1000;
// var num = 0;
// while (n > 50) {
// 	num = num+1;
// 	n /= 2;
// }
// console.log(n);
// console.log(num);

// for(var i = 1000, num = 0;
//     i > 50; 
//     i /= 2, num = num + 1) {
//   }
//   console.log(i);
//   console.log(num);
// //============================== task 7 =================================
// // Дан массив с элементами 2, 5, 9, 15, 0, 4. 
// С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, 
// которые больше 3-х, но меньше 10.
// var mass = [ 2, 5, 9, 15, 0, 4 ];
// for (var i = 0; i < mass.length; i = i + 1 ) {
//     if (mass[i] > 3 && mass[i] < 10) {
//         console.log(mass[i]);
//     }
// }

// //==============================task 8 =================================
// // Дан массив с числами. Числа могут быть положительными и отрицательными. 
// Найдите сумму положительных элементов массива.
// var sum = 0;
// var mass = [ -2, -5, -9, 15, 0, 4 ];
// for (var i = 0; i < mass.length; i = i + 1) {
//     if (mass[i] >= 0) {
//         sum += mass[i];
//     }
// }
// console.log(sum);

// //=========================== tasks 9 =======================
// // Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. 
// С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. 
// Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.
// var mass = [1, 2, 5, 9, 4, 13, 4, 10];
// for (var i = 0; i < mass.length; i = i + 1) {
//     if (mass[i] == 4) {
//         console.log('Yes');
//         break;
//     }
// }

// //============================ task 10 =====================
// // Дан массив числами, например: ['10', '20', '30', '50', '235', '3000']. 
//Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5. 
// var mass = ['10', '20', '30', '50', '235', '3000'];
// for (var i = 0; i < mass.length; i = i +1 ) {
//     if (mass[i][0] == '1' || mass[i][0] == '5') {
//         console.log(mass[i]); // 10; 50
//     }
// }

// //=========================== task 11 =========================
// * Есть массив имен пользователей users
// * Напиши цикл, который для каждого пользователя будет выводить в консоль
// * сообщение в формате [номер элемента] - [значение элемента]. 
// * Нумерация должна начинаться с 1. К примеру для первого элемента массива
// * с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'
// * Цикл должен выводить сообщения до тех пор, пока не закончатся элементы массива

// const users = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
// for (var i = 0; i < users.length; i = i + 1) {
//     if (users[0] = '1 - Mango',
//         users[1] = '2 - Poly',
//         users[2] = '3 - Ajax',
//         users[3] = '4 - Lux',
//         users[4] = '5 - Jay',
//         users[5] = '6 - Kong') {
//             console.log(users);
//             break;
//         }
//     }
//==================== верно
// const users = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
// for (let i of users) {
// const x = users.indexOf(i) + 1;
// console.log(x + " - " + i);
// }

// //========================== task 12 =========================
// /*
// * Напиши скрипт по автоматизации оплаты процесса гравировки украшений.
// * Гравировка одного слова стоит 10 кредитов.
// */

// // В переменной message хранится произвольная строка
// const message = "Proin sociis natoque et magnis parturient montes mus";
// let price = 0;

// // Разбить строку в массив, разделитель - пробел, и записать в переменную words
// console.log(words);

// // Выведи в консоли длину массива words
// console.log(); // 8

// // Используя цикл вычисли сколько будет стоить гравировка и запиши результат в переменную price
// console.log(price); // 80


// //============================= task 13 ============================

// /*
//   Напиши цикл, который просит, через prompt, ввести число больше 100. 
  
//   Если посетитель нажал Cancel - завершить цикл.
  
//   Если посетитель ввёл другое число – попросить ввести ещё раз, 
//   и так далее, пока не введет число больше 100.
  
//   Предполагается, что посетитель вводит только числа, 
//   обрабатывать невалидный ввод вроде строк 'qwerty' не нужно.
  
//   PS: используй бесконечный цикл с прерыванием
// */


// //============================= task 14 ===============================


//  /*
//   Напиши скрипт, который выбирает из массива numbers 
//   все числа, которые больше чем значение переменной num, 
//   записывая эти числа в массив matched.
      
//   В результате в массиве matched будут все подходяшие числа.
      
//   PS: используй цикл for или for...of и оператор ветвления if
// */

// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// const matched = [];

// console.log(matched); // [17, 14, 14, 32, 18, 26]


// //==================== task 15 ===============================================

// /*
//   Напиши скрипт, который проверяет произвольную строку 
//   в переменной message и находит в ней самое длинное слово,
//   записывая его в переменную longestWord.
// */

// const message = "May the force be with you";
// let longestWord;

// console.log(longestWord); // 'force'


// //================== task 16 ===============================================


// /*
//   Создай игру угадай число.
  
//   Есть массив чисел numbers, содержащий "верные" числа.
//   Числа в массиве всегда идут по возрастанию, 1-5, 20-40, 2-100 и т.п.
  
//   Просим пользователя ввести цифру от самого маленького,
//   до самого большого элемента массива. Эти значения необходимо
//   сохранить в переменные min и max. Учтите что массив произвольный,
//   но элементы всегда идут по возрастанию.
  
//   Пусть prompt говорит "Введите цифру между x и y", где x и y 
//   соотвественно самый маленький и самый большой элемент массива.
  
//   Предполагаем что пользователь вводит только числа, проверки на невалидный ввод не делать. 
//   Проверить содержит ли в себе массив numbers введенное число.
  
//     - Если содержит - выводим alert с сообщением 'Поздравляем, Вы угадали!'.
//     - Есл не содержит - выводим alert с сообщением 'Сожалеем, Вы не угадали!'.
// */

// const numbers = [12, 15, 25, 37, 41, 62, 74, 83];


// //============================= task 17 ===================================

// /*
//   Напиши скрипт который:
  
//   - Запрашивает по очереди числа при помощи prompt и сохраняет их в массиве.
//     Используйте do...while.
//   - Проверять что пользователь ввел не число не обязательно
//   - Заканчивает запрашивать числа как только пользователь нажмёт Cancel.
//   - После того как ввод был завершен, если массив не пустой, 
//     скрипт выводит сумму всех значений массива: "Сумма: <сумма всех значений в массиве>"
//     Используйте цикл for...of
// */


// //============================= ***ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ*** =============================

// /*
  
  
//   Создайте игру угадай число.
  
//   Есть массив чисел numbers, содержащий "верные" числа.
//   Числа в массиве всегда идут по возрастанию, 1-5, 20-40, 2-100 и т.п.
  
//   Просим пользователя ввести цифру от самого маленького,
//   до самого большого элемента массива. Эти значения необходимо
//   сохранить в переменные min и max. Учтите что массив произвольный,
//   но элементы всегда идут по возрастанию.
  
//   Пусть prompt говорит "Введите цифру между x и y", где x и y 
//   соотвественно самый маленький и самый большой элемент массива.
  
//   Но пользователь может ввести что угодно, необходимо проверить 
//   что было введено. Преобразовать input в числовой тип и проверить 
//   число ли это.
  
//     - Если не число - выводим alert с сообщением о том, что было 
//       введено не число.
//     - Если число - проверить содержит ли в себе массив numbers это число.
//     - Если содержит - выводим alert с сообщением 'Поздравляем, Вы угадали!'.
//     - Есл не содержит - выводим alert с сообщением 'Сожалеем, Вы не угадали!'.
// */

// const numbers = [12, 15, 25, 37, 41];


// //========================== ***ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ*** =====================

// /*
//   Написать следующий скрипт:
  
//     - При загрузке страницы пользователю предлагается ввести через prompt число. 
//       Число введенное пользователем записывается в массив чисел.
      
//     - Операция ввода числа пользователем и сохранение в массив продолжается до
//       тех пор, пока пользователь не нажмет Cancel в prompt. Используйте цикл do...while.
      
//     - После того как пользователь прекратил ввод нажав Cancel, необходимо взять 
//       массив введенных чисел, сложить общую сумму всех элементов массива и 
//       записать ее в переменную. Используйте цикл for или for...of.
      
//     - По окончанию ввода, если массив не пустой, вывести alert с текстом `Общая сумма чисел равна ${сумма}`
      
//   🔔 PS: Делать проверку того, что пользователь ввел именно число, а не произвольный набор 
//       символов, не обязательно. Если хотите, в случае некорректного ввода покажите alert с текстом 
//       'Было введено не число, попробуйте еще раз', при этом результат prompt записывать 
//       в массив чисел не нужно, после чего снова пользователю предлагается ввести число в prompt.
// */

// let userInput;
// const numbers = [];
// let total = 0;


// //========================== ***ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ*** =====================

// /*
  
//   Напишите скрипт имитирующий авторизацию пользователя.
  
//   Есть массив паролей зарегистрированных пользователей passwords. 
  
//   При посещении страницы, необходимо попросить пользователя ввести свой пароль,
//   после чего проверить содержит ли массив passwords пароль введенный пользователем.
  
//   Пароль можно ввести не верно всего n раз, кол-во хранится в переменной attempts.
//   Подсказка: используйте цикл do...while.
//   Если был введен пароль который есть в массиве passwords, вывести alert 
//   с текстом 'Добро пожаловать!' и прекратить спрашивать пароль в цикле.
//   Если был введен не существующий пароль, отнять от лимита попыток единицу, 
//   вывести alert с текстом "Неверный пароль, у вас осталось n попыток", 
//   где n это оставшийся лимит. 
  
//   После того как пользователь закрыл alert, запросить пароль снова. 
//   Продолжать запрашивать пароль до тех пор, пока пользователь не введет 
//   существующий пароль, не кончатся попытки или пока пользователь 
//   не нажмет Cancel в prompt.
//   Если закончились попытки, вывести alert с текстом "У вас закончились попытки, аккаунт заблокирован!"
  
//   Если пользователь нажмет Cancel, прекратить выполнение цикла.
// */

// const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
// let attempts = 3;