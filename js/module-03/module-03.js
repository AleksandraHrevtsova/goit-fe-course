'use strict'

// //FUNCTION EXPRESSION
// const add1 = function (a, b, c){
//     return a + b + c;
// }
// const result = add1(1, 3, 5);
// console.log(result);//9
// console.log(add1(5, 10, 15)); //30

// //FUNCTION DECLARATION
// function add2 (a, b, c){
//     return a + b + c;
// }

// add2(2, 4, 6);//12
// print('text');// text

// function add2 (a, b, c){
//     return a + b + c;
// }

// function print (str){
//     console.log(str);// text
// }

// //
// const showTestDays = function(name = 'User', days = 30){
//     return `Name - ${name}, used ${days} test day(s)`;
// }
// console.log(showTestDays('Kate', 10));//Name - Kate, used 10 test day(s)
// console.log(showTestDays('Mike'));//Name - Mike, used 30 test day(s)
// console.log(showTestDays());//Name - User, used 30 test day(s)

// //псевдомассив arguments
// const pow = function(base, exponent){
//     return Math.pow(base, exponent);
// }
// console.log(`2 ** 22 = ${pow(2, 22)}`);//2 ** 22 = 4194304
// console.log(`22 ** 2 = ${pow(22, 2)}`);//2 ** 22 = 484

// //
// const summ = function(){
//     const max = arguments.length;
//     let total = 0;
//     for(let i = 0; i < max; i += 1){
//         total += arguments[i];
//     }
//     return total;
// };
// console.log(`sum = ${summ(1, 3, 5, 7, 9)}`);// sum = 25

// //преобразвание псевдомассива
// const fn1 = function(){
//     const args = Array.from(arguments);//args - полноценный массив
// }
// //||
// const fn2 = function(...args){
//     //args - полноценный массив
// }

// //EXECUTION CONTEXT контекст выполнения
// //global execution context - по умолчанию, при загрузке скрипта вып-ся весь JS-код 
// //functional execution context - вып-ся внутри функции, для каждой отдельно
// //call stack (execution context stack)
// function b(){
//     console.log('Performed [b]');//3
// }
// function a(){
//     console.log('Started running [a]');//2
//     b();
//     console.log('Continues to run [a] after exiting [b]');//4
// }
// console.log('Started running [global]');//1
// a();
// console.log('Continues to run [global] after exiting [a]')//5

// //lexical environment

// //globalEnvironment = {outerEnv: null}
// const greet = function (name){
//     // greetEnvironment = {
//     //     name: 'Aleks',
//     //     outerEnv: globalEnvironment
//     // }

//     const message = `Have a good day to you ${name}`;
//     // greetEnvironment = {
//     //     name: 'Aleks',
//     //     message: 'Have a good day to you Aleks',
//     //     outerEnv: globalEnvironment
//     // }
//     console.log(message);
// };
// // greetEnvironment = {
// //     greet: false,
// //     outerEnv: null
// // }
// greet('Aleks');//Have a good day to you Aleks

// // globalEnvironment = { outerEnv : null }

// const number = 5;
// // globalEnvironment = {
// //   number: 5,
// //   outerEnv: null
// // }

//     const add = function () {
//   // addEnvironment = { outerEnv: globalEnvironment }
//     return number + 10;
// };
// // globalEnvironment = {
// //  add: f,
// //  number: 5,
// //  outerEnv: null
// // }
// console.log(add()); // 15

// // globalEnvironment = { outerEnv : null }

// const x = 20;
// // globalEnvironment = {
// //  x: 20,
// //  outerEnv: null
// // }

// const y = 10;
// // globalEnvironment = {
// //  x: 20,
// //  y: 10,
// //  outerEnv: null
// // }

// const addNew = function () {
//   // addEnvironment = {
//   //  outerEnv: globalEnvironment
//   // }

//   const x = 5;
//   // addEnvironment = {
//   //  x: 5,
//   //  outerEnv: globalEnvironment
//   // }

//   return x + y;
// };
// // globalEnvironment = {
// //  x: 20,
// //  y: 10,
// //  add: f,
// //  outerEnv: null
// // }

// console.log(addNew()); // 15

// //FUNCTION SCOPE
// const add3 = function(num){
//     const x1 = 10;
//     return num + x1;
// }
// console.log(x1);//ReferenceError: x is not defined
// //т.к. переменная х1 находится внутри функции, а вызывается снаружи, но если создать еще одну переменную с таким же именем, но над функцией и вызвать ее, то она будет выведена

// //SHADOWING 
// let value = 10;
// const fn3 = function(){
//     let value = 20;
//     console.log(value + 10);
// };
// fn3();//30

// //стрелочные функции
// //обычное функц.выр-е
// const add4 = function(a, b, c){
//     return a + b + c;
// };
// //стрелочная функция
// const add4 = (a, b, c) => a + b + c;
// //если параметров несколько
// const fn = (a, b, c) =>{
//     return a + b + c;
// };
// //если параметр один
// const fn = x => {
//     return x * 2;
// };
// //если параметров нет
// const fn = () => {
//     console.log('Hi, honey! :]')
// };
// // => {} - explicit return
// const fn = (a, b, c) => {
//     return a + b + c;
// };
// // => - implicit return
// const fn = (a, b, c) => a + b + c;

// //arguments
// const add5 = (...args) => console.log(args);
// add5(1, 2, 3);//[1, 2, 3]

// //callback-function
// const printMessage = function (callback){
//     const message = callback();
//     console.log(message);
// };
// const getMessage = function(){
//     return 'welcome to my dream!';
// }
// printMessage(getMessage);//'welcome to my dream!'


// map(arr, callback)

// const map = (arr, callback) => {
//     const resultArr = [];
//     for (const element of arr){
//         const result = callback(element);
//         resultArr.push(result);
//     }
//     return resultArr;
// };

const map = (arr, callback) => {
    const resultArr = [];
    for (const element of arr){
        const result = callback(element);
        resultArr.push(result);
    }
    return resultArr;
};
const double = val => val * 2;
const triple = val => val * 3;
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = map(numbers, double);
console.log(doubledNumbers);//[2, 4, 6, 8, 10]

const tripledNumbers = map(numbers, triple);
console.log(tripledNumbers);//[3, 6, 9, 12, 15]

// closure (замыкания)
const createCounter = () => {
    let privateCounter = 0;
    const increment = () => {
        privateCounter += 1;
        console.log(privateCounter);
    }
    return increment;
};
const counterA = createCounter();
counterA();//1
counterA();//2
counterA();//3

const counterB = createCounter();
counterB();//1
counterB();//2