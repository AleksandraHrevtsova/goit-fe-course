'use strict'

//part 1

// let a = 10;

// {
//     let a = 666;
//     console.log(a);
// }

// console.log(a);

// var a = 10;

// {
//     var a = 12;
//     console.log(a);
// }

// console.log(a);

// let a = 'string';
// console.log(a);

// const str = "string";
// console.log('string' === 'string');

// const a = 11;
// const b = 'hello';
// const c = '5';
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

// let isActive = true;
// isActive = false;
// console.log(isActive);

// const f = null;

// console.log(null === 0);

//let a = 5;
// console.log(typeof a);

// let isActive = true;
// isActive - false;
// console.log(typeof isActive);

// const a = {first:10}; //object
// a.first = 20; //change value of object
// console.log(a.first); //changed value

// alert('it\s only result');
// alert('it\s only 2');
// alert('it\s only 3');

// console.log(2);
// console.log(3);

// const show = (prompt('how old are you','only numbers'); //const show = Number(prompt('how old are you','only numbers'));
// let afterShow = +show;                                  // let afterShow = Number(show);
// let small = 18;
// let about = "it's not Ok " + afterShow + "only after 18"; // 5
// let about = `it's not Ok ${afterShow} only after "${small}" `; // 6

// alert(about);

// console.log("number", typeof afterShow);
// console.log("number", afterShow);
// console.log(typeof show);
// console.log("string", show);

// if(show === null) { // escape
//   alert("null");
// }else{
//     alert("No!!!")
// }

// if(show === 0) { // string
//     alert("null");
// }else{
//     alert("No!!!")
// }

// let showConfirm = confirm('are you sure');
// console.log(showConfirm);

// const show = Number(prompt('number','only numbers'));
// let num = show % 2;
// console.log(10 % 2);

// if(num = show % 2 !== 0){
//     alert('Ok');
// }


// const show = Number(prompt('how old are you','only numbers'));

// let min = 10;
// let max = 30;
// if(min <= show && max >= show) {
//     alert('Ok');
// }else{
//     alert('ne Ok');
// }

// let numRandom = Math.floor(Math.random()*100);
// console.log(numRandom);

// let min = 10;
// let max = 30;
// if(min <= show && max >= show) {
//     alert('Ok');
// }else{
//     alert('ne Ok');
// }

// const a = 10;
// const b = 5;
// let result;

// result = a \ b;
// console.log(result);

// console.log(result * 2);

// let num = "5";
// let numTypeof = typeof num;

// let showNaN = numTypeof;

// const result = 0.1 + 0.2;
// console.log(result);
// console.log( +result.toFixed(3));

// console.log('max',Math.max(2,3,7,9,12,45));
// console.log('min',Math.min(2,3,7,9,12,45));

// console.log('5' - 3);
// let showNum = 's' + 2;
// console.log(showNum);
// console.log(typeof showNum);

// let str = 'hello my friends';
// console.log(str.toLocaleLowerCase());

// let newMass = str.split(' ');
// console.log(newMass[newMass.leigth -1]);

// let mass = [1,2,3,4];
// console.log(mass);

// let macca = 10;
// console.log(macca);

// console.log(newMass);
// console.log(newMass.includes('m'));
// console.log(str.includes(''));

// console.log(str);
// console.log(str.indexOf('1'));

//part 2

// const a = 12;
// if (a > 0 && a <= 5 || a > 10 && a < 20) {
//     alert('True');
// } else {
//     alert('False');
// }

//
// const a = 5;
// if (a === 0 || a === 2) {
//     console.log(a + 7);
// } else {
//     console.log (a / 10);
// }

//
// const login = 'Bond';
// const password = '007';

// const inputLogin = prompt('Enter your login');

// if (inputLogin === login) {
//     const inputPassword = prompt('Enter your password');

//     if (inputPassword === password) {
//         alert('Ok');
//     } else {
//         alert('Error');
//     }

// } else {
//     alert('Error');
// }

//
// let day = 'monday';
// let number = +prompt('Enter number');

// if (number === 1) {
//     day = "Monday";
//     alert ('Monday');
// } else if (number === 2) {
//     day = 'Tuesday';
//     alert('Tuesday');
// } else if (number === 3) {
//     day = 'Wednesday';
//     alert('Wednesday');
// } else {
//     console.error('error');
// }

//
// switch(number) {
//     case 1:
//     alert('Monday');
//     //break;
//     case 2:
//     alert('Tuesday');
//     //break;
//     case 3:
//     alert('Wednesday');
//     //break;
// }

//
// const login = 'Bond';
// const password = '007';

// const inputLogin = prompt('Enter your login');

// if (inputLogin === login) {
//     const inputPassword = prompt('Enter your password');

//     if (inputPassword === password) {
//         alert('Ok');
//     } else {
//         alert('Error');
//     }
//     switch(day) {
//         case 1:
//             alert('Monday');
//             break;
//         case 2:
//             alert('Tuesday');
//             break;
//         case 3:
//             alert('Wednesday');
//             break;
//     }
// }

// -------------PART 1
// 1. Зайдите в консоль своего браузера. При помощи оператора определения типа уточните тип следующих величин: 
// «Привет», 123, true, «true».

let a = 'Привет';
console.log(typeof a);//string

let b = 123;
console.log(typeof b);//number

let c = true;
console.log(typeof c);//boolean

let d = "true";
console.log(typeof d);//string

// 2. Зайдите в консоль своего браузера. При помощи математических операторов (сложение, вычитание и т.д.) 
// найдите значения выражений: 5 + 3, 5 — 3, 5 * 3, 5 / 3.

let e = 5;
let f = 3;
let result;
result = e + f;
console.log(result);//8

result = e - f;
console.log(result);//2

result = e * f;
console.log(result);//15

result = e / f;
console.log(result);//1.6666666666667

// 3. Зайдите в консоль своего браузера. При помощи оператора нахождения остатка от деления %, 
//найдите значения выражений: 5 % 3, 3 % 5.

let g = 5 % 3;
console.log(g);//2

let h = 3 % 5;
console.log(h);//3

// 4. Зайдите в консоль своего браузера. При помощи оператора + (сложение, склеивание) 
// найдите значения выражений: 5 + ‘3’ , ‘5’ — 3, 75 + ‘кг’.

let j = 5 + '3';
let k = '5' - '3';
let l = 75 + ' кг';

console.log(j);//53
console.log(k);//2
console.log(l);//75 кг

// 5. Создайте переменные строкового, числового и булева типов. Выведите их содержимое.

let m = "5";
let n = 5;
let o = true;

console.log(typeof m);//string
console.log(typeof n);//number
console.log(typeof o);//boolean

// 6. Напишите скрипт, который находит площадь прямоугольника длиной 23см., шириной 10см.

let p = 23;
let q = 10;
let resultPQ;

resultPQ = p * q + ' см2';
console.log(resultPQ);

// 7. (*) Найди двенадцатый элемент последовательности Леонардо Пизанского (нужно использовать 
// функцию Math.pow(число, степень))
function fib(n){
  return n <=1 ? n : fib(n - 1) + fib(n - 2);
}
console.log(fib(12));//144

// 8. (*) Даны размер ипотечного кредита, процентная ставка, кол-во лет. Найти переплату по кредиту.


// ___9) Створіть змінну num і надайте їй значення 3. Виведіть значення цієї змінної на екран за допомогою 
// методу alert

// const num = 3;
// alert(num);

// ___10) Створіть змінні a = 10 і b = 2. Виведіть на екран їх суму, різницю, добуток і частку 
//(результат ділення)

let r = 10;
let s = 2;

console.log(r + s);
console.log(r - s);
console.log(r * s);
console.log(r / s);

// ___11) Створіть змінні c = 15 і d = 2. Підсумуйте їх, а результат надайте змінної result. 
// Виведіть на екран значення змінної result

let t = 15;
let u = 2;
let resultTU;

resultTU = t + u;
console.log(resultTU);

// ___12) Створіть змінні a = 10, b = 2 і c = 5. Виведіть на екран їх суму.

let v = 10;
let w = 2;
let x = 5;
let resultVWX;

resultVWX = v + w + x;
console.log(resultVWX);

// 13) Створіть змінні a = 17 і b = 10. Відніміть від a змінну b і результат надайте зміннії c. 
// Потім створіть змінну d, надайте їй значення 7. Складіть змінні c і d, а результат запишіть в змінну result. 
//Виведіть на екран значення змінної result.

let A = 17;
let B = 10;
let C = a - b;
let D = 7;

let resultTwo;

resultTwo = A - B + D;
console.log(resultTwo);

// 14) Запитайте ім'я користувача за допомогою методи prompt. Виведіть за допомогою alert повідомлення 'Ваше ім'я
// %значення що отримали з prompt%'

// const yourName = (prompt('what is your name?')); 
// console.log("Ваше ім'я", yourName);
// alert(yourName);

// 15) Створіть три змінні - година, хвилина, секунда. З їх допомогою виведіть поточний час в форматі 'година: хвилина: секунда'.
let hour = 0;
let minute = 0;
let second = 0;

console.log(`ч: ${hour}, м: ${minute}, с: ${second}`);

// 16) Створіть змінну, надайте їй число. Зведіть це число в квадрат. Виведіть його на екран
let E = 12;
console.log(Math.pow(E, 2));

// 17) Переробіть цей код так, щоб в ньому використовувалися операції + =, - =, * =, / =. 
// Кількість рядків коду при цьому не повинно змінитися.
//   var num = 47;
//   num = num + 7;
//   num = num - 18;
//   num = num * 10;
//   num = num / 15;
//   alert (num);

var num = 47;
num += 7;
num -= 18;
num *= 10;
num /= 15;
// alert (num);

// 18) Створіть змінну str і надайте їй значення 'Hello World'. Виведіть значення цієї змінної на екран
let str = 'Hello World';
console.log(str);

// 19) Створіть змінні str1 = 'Hello,' і str2 = 'World!'. За допомогою цих змінних і операції додавання рядків виведіть на екран фразу 'Hello World'.
let str1 = 'Hello';
let str2 = 'World';

let resultWords;
resultWords = str1 + ' ' + str2;
console.log(resultWords);

// 20) Створіть змінну name і надайте їй ваше ім'я. Створіть змінну age і надайте їй ваш вік. 
//Виведіть на екран 'Привіт, я  % Ім'я%!'Мені% Вік% років!'.
let I = 'Aleks';
let Age = 30;
console.log(`Hello, my name is ${I}. I'm ${Age} years old.`);

// 21) Створіть змінну str і надайте їй значення 'abcde'. Звертаючись до окремих символів цього рядка виведіть 
//на екран символ 'a', символ 'c', символ 'e'
let str3 = 'abcde';
console.log(str3[0]);
console.log(str3[2]);
console.log(str3[4]);

// 22) Створіть змінну num і надайте їй значення '12345'. Знайдіть суму, різницю, добуток, частку цифр цього числа
// і виведіть ці значення в консоль
let Num = '12345';
console.log(Num[0] + Num[1] + Num[2] + Num[3] + Num[4]);
console.log(Num[0] - Num[1] - Num[2] - Num[3] - Num[4]);
console.log(Num[0] * Num[1] * Num[2] * Num[3] * Num[4]);
console.log(Num[0] / Num[1] / Num[2] / Num[3] / Num[4]);

// 23) Дана рядок 'js'. Зробіть з неї рядок 'JS'.
let str4 = 'js';
console.log(str4.toUpperCase());

// 24) Дана рядок 'JS'. Зробіть з неї рядок 'js'
let str5 = 'JS';
console.log(str5.toLowerCase());

// 25) Дана рядок 'я вчу javascript!'. Знайдіть кількість символів в цьому рядку.
let str6 = 'я вчу javascript!';
console.log(str6.length);//17

// 26) Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b.
let ant = 10;
let bant = 3;
console.log(ant % bant);

// 27) Возведите 2 в 10 степень. Результат запишите в переменную st.
let st = Math.pow(2, 10);
console.log(st);//1024

// 28) ___Найдите квадратный корень из 245.
let number_28 = 245;
console.log(Math.sqrt(number_28)); //15.652475842498529

// 29) Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых. (toFixed(0))
let number_29 = 379;
console.log(Math.sqrt(number_29).toFixed(0));
console.log(Math.sqrt(number_29).toFixed(1));
console.log(Math.sqrt(number_29).toFixed(2));

// ___30) Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны (edited) 
// Перечень методов для работы со строками
let number_30 = 587;
console.log(Math.ceil(Math.sqrt(number_30)));
console.log(Math.floor(Math.sqrt(number_30)));


// ----------------PART 2
//======================= task 01 =================
/* - Объяви две переменные хранящие информацию о товаре: name и price
 * - Присвой переменным следующие характеристики товара (сразу при объявлении)
 *   - название: Генератор защитного поля
 *   - цена: 1000
 * - Присвой товару новую цену - 2000
 * - Используя шаблонную строку выведи в консоли информацию о товаре, 
 *   получится "Выбран «Генератор защитного поля», цена за штуку 2000 кредитов"*/
let nameGen = 'Генератор защитного поля';
let priceGen = 1000;
priceGen = 2000;
console.log(`Выбран "${nameGen}", цена за штуку ${priceGen} кредитов`);

//====================== task 02 =====================
// *Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.*/
// let alertTwo = 10;
//   if (alertTwo === 10) {
//     alert('True');
//   } else {
//     alert('False');
// }

//==================== task 03 ======================
/*Задача. В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает 
//это число (в первую, вторую, третью или четвертую).*/
// let min = (Math.floor(Math.random()*59)) + 1;
// let bettaThree;
//   if (min >= 0 && min <= 15) {
//     bettaThree = 'first';
//     alert(bettaThree);
//   } else if (min > 15 && min <= 30) {
//     bettaThree = 'second';
//     alert(bettaThree);
//   } else if (b > 30 && min <= 45) {
//     bettaThree = 'third';
//     alert(bettaThree);
//   } else if (b > 45 && min<= 59) {
//     bettaThree = 'fourth';
//     alert(bettaThree);
//   } else {
//     alert('error');
// }

//==================== task 04 =======================
 /*Есть три переменные содержащие составляющие даты: день, месяц, и год. 
  Создай переменную date, в которую запиши полную дату в формате день\месяц\год
  Создай переменную message, в которую запиши сообщение "Доброе утро, cегодня 17\10\2048, 
  за бортом отличная погода!"
  PS: используя шаблонные строки.*/
const day = 17;
const month = 10;
const year = 2048;
const date = '17/10/2048';
const messageDate = `Доброе утро, cегодня ${ date }, за бортом отличная погода!`;
console.log(messageDate);

//==================== task 05 ============================
/*Есть три переменные name, date и roomType, содержащие имя гостя, 
  дату его прибытия на отдых и тип комнаты отеля.
  Создай переменную message и используя шаблонные строки запиши в нее сообщение формата:
  "имя гостя" прибывает на отдых "дата прибытия" в "тип комнаты".*/
const nameFive = 'Mango';
const dateFive = '14/08/2137';
const roomType = 'люкс';
const message = `${nameFive} прибывает на отдых ${dateFive} в ${roomType}`;
console.log(message); // Mango прибывает на отдых 14/08/2137 в люкс

//================== task 06 ===============================
/*Напиши скрипт который: 
  - При посещении страницы через prompt cпрашивает 'Введите пароль доступа'
  - Если был нажат Cancel в prompt, показывать alert с сообщением 'Ожидаю ввода пароля'.
  - Если введенное значение совпадает со значением переменной correctPassword, 
    показывать alert со сообщением 'Доступ в секретный бункер разрешен!'
  - Если что-то другое — показывать alert с сообщением 'Активирована система защиты!'
*/ 
// const passwordSix = prompt('Введите пароль доступа');
// const correctPasswordSix = 'jqueryismyjam';

// if (passwordSix === null){
//   alert('Ожидаю ввода пароля')
//   } if (passwordSix === correctPasswordSix) {
//     alert('Доступ в секретный бункер разрешен!');
//   } else {
//     alert('Активирована система защиты!');
// }

//========================= task 07 =================
/*Необходимо написать скрипт проверки количества товаров на складе.
  Есть переменные total (количество товаров на складе) и ordered (единиц товара в заказе).
  Сравни эти значения и по результатам выведи:
    - Если в заказе указано число, превышающее количество товаров на складе, то выведи сообщение "На складе недостаточно твоаров!"
    - Если в заказе указано число товаров, равное количеству товара на складе, то выведи сообщение "Вы забираете весь товар cо склада!"
    - В иных случаях выводи сообщение "Заказ оформлен, с вами свяжется менеджер" 
  Проверь работоспособность кода с разными значениями переменной ordered.
*/
const total = 100;
const ordered = 50;
if ( ordered > total ) {
    console.log('На складе недостаточно товаров!');
  } else if ( ordered === total ) {
    console.log('Вы забираете весь товар cо склада!');
  } else if ( ordered <= total ) {
    console.log('Заказ оформлен, с вами свяжется менеджер');
}

//===================== task 08 =====================
/*Напиши скрипт который: 
  - Через prompt cпрашивает 'Введите произвольное целое число'
  - Если пользователь нажал Cancel - показывать alert 'Ну и ладно, пока!'
  - Если посетитель вводит целое число - показывать alert со строкой 'Спасибо!'
  - Если посетитель вводит что либо другое — показывать alert 'Необходимо было ввести целое число!'
*/ 
// const a8 = Number(prompt('Введите произвольное целое число'));
// console.log(typeof a8)
// if (a8 === 0) {
//     alert('Ну и ладно, пока!')
//   } else if ( a8 > 0 ) {
//       alert('Спасибо!');
//   } else {
//       alert('Необходимо было ввести целое число!');
// }

//===================== task 09 =====================
/* В переменную value записывается случайное число.
  Объяви переменную type, в которую, используя ветвления запиши строку:  
    - "even" если value четное
    - "odd" если value не четное
  PS: попробуй использовать тернарный оператор
*/
const value = Number.parseInt(Math.random() * 100);
let type;
if ( value % 2 === 0 ){
    console.log('even');
  } if ( value % 2 !== 0 ){
    console.log('odd');
}
console.log(`${value} is ${type}`);

//========================= taks 10 ==================
/* Создай скрипт поиска отелей, где пользователь с помощью prompt должен ввести число от 1 до 5
  Проверить что пользователь ввел именно цифру от 1 до 5
  Если пользователь нажал Cancel, то выведи alert с текстом 'Очень жаль, приходите еще!'
  Если было введено что либо кроме чисел 1-5, вывести alert с текстом 'Неверный ввод, возможные варианты 1-5!'
  Если же пользовател ввел валидное число, используя switch, вывести alert с одной из строк:
    1 - "Каталог хостелов" 
    2 - "Каталог бюджетных отелей"
    3 - "Каталог отелей ***"
    4 - "Каталог отелей ****"
    5 - "Каталог лучших отелей"
*/
// let search;
// let number = +prompt('Введите число, соответствующее запросу');
// //else if
// if (number === 0) {//cancel
//     alert('Очень жаль, приходите еще!');
// } else if (number === 1) {
//     alert('Каталог хостелов');
// } else if (number === 2) {
//     alert('Каталог бюджетных отелей');
// } else if (number === 3) {
//     alert('Каталог отелей ***');
// } else if (number === 4) {
//     alert('Каталог отелей ****');
// } else if (number === 5) {
//     alert('Каталог лучших отелей');
// } else {
//     alert('Неверный ввод, возможные варианты 1-5!');
// }

//switch
// let numberTen = +prompt('Введите число, соответствующее запросу');
// if (numberTen === 0) {
//    alert('Очень жаль, приходите еще!');
// }
// switch(numberTen) {
//   case 1:
//     alert('Каталог хостелов');
//     break;
//   case 2:
//     alert('Каталог бюджетных отелей');
//     break;
//   case 3:
//     alert('Каталог отелей ***');
//     break;
//   case 4:
//     alert('Каталог отелей ****');
//     break;
//   case 5:
//     alert('Каталог лучших отелей');
//     break;
//   default:
//     alert('Неверный ввод, возможные варианты 1-5!')
// }

//==================== task 11 ============================
/* Пользователь может оформить доставку товара к себе в страну, 
указав ее в переменной country, но доставка есть не везде.
Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.
Сообщение выглядит так: "Доставка в <<тут страна>> будет стоить <<тут цена>>"
Ниже приведен список стран и стоимость доставки.
  Китай - 100 кредитов
  Южная Америка - 250 кредитов
  Австралия - 170 кредитов
  Индия - 80 кредитов
  Ямайка - 120 крдитов
Если названия нет в списке, то выводи в консоль сообщение "В вашей стране доставка не доступна".
Протестируй работоспособность кода подставив разные значения в переменную country.
PS: используй switch*/
// let country = prompt('Enter yur country please');
// let priceDel;
// switch(country){
//   case 'China':
//     priceDel = 100;
//     alert(`Доставка в ${country} будет стоить ${priceDel}`);
//     break;
//   case 'South America':
//     priceDel = 250;
//     alert(`Доставка в ${country} будет стоить ${priceDel}`);
//     break;
//   case 'Australia':
//     priceDel = 170;
//     alert(`Доставка в ${country} будет стоить ${priceDel}`);
//     break;
//   case 'India':
//     priceDel = 80;
//     alert(`Доставка в ${country} будет стоить ${priceDel}`);
//     break;
//   case 'Jamaica':
//     priceDel = 120;
//     alert(`Доставка в ${country} будет стоить ${priceDel}`);
//     break;
//   default:
//     alert('В вашей стране доставка не доступна');
// }

//========================= *tasks 12 ====================
/*Создайте скрипт турагенства, продающего поездки в 3-х группах: sharm, hurgada и taba.
Кол-во мест в группах ограничено (создайте переменные для хранения мест в группах): 
  * sharm - 15
  * hurgada - 25
  * taba - 6.
Когда пользователь посещает страницу, ему необходимо предложить ввести число необходимых мест,
результат сохранить в переменную.
Необходимо проверить являются ли введенные данные целым положительным числом. 
  - В случае неверного ввода от пользователя, скрипт показывает alert с текстом 
    "Ошибка ввода" и больше ничего не делает.
  - Если пользователь нажал Cancel, скрипт показывает alert с текстом "Нам очень жаль, приходите еще!".
  - В случае верного ввода, последовательно проверить кол-во мест в группах, 
    и кол-во необходимых мест введенных пользователем.
Если была найдена группа в которой количество мест больше либо равно необходимому, 
вывести сообщение через confirm, что есть место в группе такой-то, согласен ли 
пользоваетель быть в этой группе?
  * Если ответ да, показать alert с текстом 'Приятного путешествия в группе <имя группы>'
  * Если ответ нет, показать alert с текстом 'Нам очень жаль, приходите еще!'
Если мест нигде нет, показать alert с сообщением 'Извините, столько мест нет ни в одной группе!'
*/
// let sharm = 15;
// let hurgada = 25;
// let taba = 6;
// const groupNameSharm = 'Sharm';
// const groupNameHurgada = 'Hurgada';
// const groupNameTaba = 'Taba';

// let countPeople = prompt('Enter your quantity please');
// if (Number(countPeople) && (countPeople > 0)){
//   const countPlaces = Number.parseInt(countPeople);
//   if(countPlaces < sharm){
//     const confirmeGroup = confirm(`Для ваших ${countPeople} есть место в группе ${groupNameSharm}, вы согласны?`);
//     if(confirmeGroup){
//       alert(`Приятного путешествия в группе ${groupNameSharm}`);
//       sharm = sharm - countPeople;
//     }else{
//       alert('Нам очень жаль, приходите еще!');
//     }
//   }else if(countPeople < hurgada){
//     const confirmeGroup = confirm(`Для ваших ${countPeople} есть место в группе ${groupNameHurgada}, вы согласны?`);
//     if(confirmeGroup){
//       alert(`Приятного путешествия в группе ${groupNameHurgada}`);
//       hurgada = hurgada - countPeople;
//     }else{
//       alert('Нам очень жаль, приходите еще!');
//     }
//   }else if(countPeople < taba){
//     const confirmeGroup = confirm(`Для ваших ${countPeople} есть место в группе ${groupNameTaba}, вы согласны?`);
//     if(confirmeGroup){
//       alert(`Приятного путешествия в группе ${groupNameTaba}`);
//       taba = taba - countPeople;
//     }else{
//       alert('Нам очень жаль, приходите еще!');
//     }
//   }else{
//     alert('Извините, столько мест нет ни в одной группе!');
//   }
// }else{
//   alert('Ошибка ввода');
// }

// //======================== *task 13 ================
// /* Напишите скрипт имитирующий авторизацию администратора в панели управления.
// При загрузке страницы у посетителя запрашивается логин через prompt:
//   - Если посетитель нажал Cancel — показывать alert с текстом 'Отменено пользователем!'
//   - Если было введено что либо другое, что не совпадает со значением константы adminLogin, 
//      показывать alert с текстом 'Доступ запрещен, неверный логин!'   
//   - Если был введен логин совпадающий со значением константы adminLogin, 
//     спрашивать пароль через prompt.
// При вводе пароля:
//     - Если нажали Cancel, показывать alert с текстом 'Отменено пользователем!'
//     - Если введен пароль который не совпадает со значением константы adminPassword,
//       показывать alert с текстом 'Доступ запрещен, неверный пароль!'        
//     - Если введён пароль который совпадает со значением константы adminPassword, 
//       показывать alert с текстом 'Добро пожаловать!'    
// 🔔 PS: для удобства и чистоты кода сохраните в переменные сообщения отображаемые в alert
// */  
// const adminLogin = 'admin';
// const adminPassword = 'm4ngo1zh4ackz0r';

// const cancel = 'Отменено пользователем!';
// const wrongLog = 'Доступ запрещен, неверный логин!';
// const wrongPass = 'Доступ запрещен, неверный пароль!';
// const rightPass = 'Добро пожаловать!';

// const confirmLog = prompt('Enter your login please');

// if(confirmLog === null || confirmLog == ''){
//   alert(cancel);
// }else if(confirmLog !=adminLogin){
//   alert(wrongLog);
// }else{
//   const confirmPass = prompt('Enter your password please');
//   if(confirmPass === null || confirmPass == ''){
//     alert(cancel);
//   }else if(confirmPass !== adminPassword){
//     alert(wrongPass);
//   }else{
//     alert(rightPass);
//   }
// }

//========================     Работа с if-else ========
//  Если переменная a равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. 
//Проверьте работу скрипта при a, равном 1, 0, -3.
// const a = -3;
// if (a === 0) {
//         alert('True');
//     } else {
//         alert('False');
//     }

//  Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. 
//Проверьте работу скрипта при a, равном 1, 0, -3.
// const a = -3;
// if (a > 0) {
//     alert('True');
// } else {
//     alert('False');
// }

//  Если переменная a меньше нуля, то выведите 'Верно', иначе выведите 'Неверно'. 
//Проверьте работу скрипта при a, равном 1, 0, -3.
// const a = -3;
// if (a < 0) {
//     alert('True');
// } else {
//     alert('False');
// }

//  Если переменная a больше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. 
//Проверьте работу скрипта при a, равном 1, 0, -3.
// const a = -3;
// if (a >= 0) {
//     alert('True');
// } else {
//     alert('False');
// }

//  Если переменная a меньше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. 
//Проверьте работу скрипта при a, равном 1, 0, -3.
// const a = -3;
// if (a <= 0) {
//     alert('True');
// } else {
//     alert('False');
// }

//  Если переменная a не равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. 
//Проверьте работу скрипта при a, равном 1, 0, -3.
// const a = -3;
// if (a !== 0) {
//     alert('True');
// } else {
//     alert('False');
// }

//  Если переменная a равна 'test', то выведите 'Верно', иначе выведите 'Неверно'. 
//Проверьте работу скрипта при a, равном 'test', 'тест', 3.
// const a = '3';
// if (a === 'test') {
//     alert('True');
// } else {
//     alert('False');
// }

//  Если переменная a равна '1' и по значению и по типу, то выведите 'Верно', иначе выведите 'Неверно'. 
//Проверьте работу скрипта при a, равном '1', 1
// const a = 1;
// if (a === '1') {
//     alert('True');
// } else {
//     alert('False');
// }

// =============================   Работа с && (и) и || (или)
//  Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. 
//Проверьте работу скрипта при a, равном 5, 0, -3, 2.
let Aaa = -2;
if (5 > Aaa > 0){
  console.log('Верно');
}else{
  console.log('Неверно');
}

//  Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. 
//Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2.
let Bbb = 7;
if (Bbb === 2 || Bbb === 7){
  console.log(Bbb + 7);
}else{
  console.log(Bbb / 10);
}

//  Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих 
//переменных, иначе выведите их разность (результат вычитания). Проверьте работу скрипта при a и b, 
//равном 1 и 3, 0 и 6, 3 и 5.
let Ccc = 3;
let Ddd = 5;
if (Ccc <= 1 && Ddd >= 3){
  console.log(Ccc + Ddd);
}else{
  console.log(Ccc - Ddd);
}

//  Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, 
//то выведите 'Верно', в противном случае выведите 'Неверно'.
let Eee = 3;
let Ggg = 5;
if (Eee > 2 && Eee < 11 || Ggg >= 6 && Ggg < 14){
  console.log('Верно');
}else{
  console.log('Неверно');
}
