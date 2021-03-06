"use strict";
// //========================== ****** task ***** =====================

const scientist = [
  {
    first: "Albert",
    last: "Einstein",
    year: 1879,
    passed: 1955
  },
  {
    first: "Isaac",
    last: "Newton",
    year: 1643,
    passed: 1727
  },
  {
    first: "Galileo",
    last: "Galilei",
    year: 1564,
    passed: 1642
  },
  {
    first: "Marie",
    last: "Curie",
    year: 1867,
    passed: 1934
  },
  {
    first: "Johannes",
    last: "Kepler",
    year: 1571,
    passed: 1630
  },
  {
    first: "Nicolaus",
    last: "Copernicus",
    year: 1473,
    passed: 1543
  },
  {
    first: "Max",
    last: "Planck",
    year: 1858,
    passed: 1947
  },
  {
    first: "Katherine",
    last: "Blodgett",
    year: 1898,
    passed: 1979
  },
  {
    first: "Ada",
    last: "Lovelace",
    year: 1815,
    passed: 1852
  },
  {
    first: "Sarah E.",
    last: "Goode",
    year: 1855,
    passed: 1905
  },
  {
    first: "Lise",
    last: "Meitner",
    year: 1878,
    passed: 1968
  },
  {
    first: "Hanna",
    last: "Hammarström",
    year: 1829,
    passed: 1909
  }
];
// 1) отримати масив вчених що народилися в 19 ст
function add(el) {
  return el.filter(el => el.year > 1800 && el.year < 1900);
}
console.log(add(scientist));

// // 2) знайти суму років скільки прожили всі вченні
const ageSumm = scientist.reduce((acc, el) => (acc += el.passed - el.year), 0);
console.log(ageSumm);

// // 3) Відсортувати вчених по алфавіту
const alphSort = scientist
  .sort((a, b) => (a.first > b.first ? 1 : -1))
  .map(el => el.first);
console.log(alphSort);

// // 4) Відсортувати вчених по даті народження
const birghtDate = scientist.sort((a, b) => (a.year > b.year ? 1 : -1));
console.log(birghtDate);

// // 5) Відсортувати вчених по кількості прожитих років
const ageSort = scientist.sort((a, b) =>
  a.passed - a.year > b.passed - b.year ? 1 : -1
);
console.log(ageSort);

// // 6) Видалити з масива вчених що родилися в 15 або 16 або 17 столітті
const deleteScientist = scientist.filter(
  el => !(el.year > 1400 && el.year < 1700)
);
console.log(deleteScientist);

// // 7) Знайти вченого який народився найпізніше.
const laterScientist = scientist.sort((a, b) => (a.year < b.year ? 1 : -1));
console.log(laterScientist[0]);

// // 8) Знайти рік народження Albert Einstein
const dateEinstein = scientist.find(
  el => el.first === "Albert" && el.last === "Einstein"
);
console.log(dateEinstein.year);

// // 9) Знайти вчених прізвище яких починається на літеру С
const nameC = scientist.filter(el => el.last.charAt() === "C");
console.log(nameC);

// // 10) Видалити з масива всіх вчених імя яких починається на A
const nameA = scientist.filter(el => el.first.charAt() !== "A");
console.log(nameA);

// //========================== HOMEWORK =======================================================
/*Используя массив (users) объектов пользователей, напишите функции которые с помощью
 * функциональных методов массивов (никаких for, splice и т.д.) выполняют указанные операции.*/

const users = [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    phone: "+1 (848) 556-2344",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    phone: "+1 (855) 582-2464",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    phone: "+1 (814) 593-3825",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24
  },
  {
    id: "249b6175-5c30-44c6-b154-f120923736f5",
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    phone: "+1 (909) 547-2687",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    phone: "+1 (956) 512-2693",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27
  },
  {
    guid: "150b00fb-dd82-427d-9faf-2879ea87c695",
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    phone: "+1 (876) 411-2433",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38
  },
  {
    id: "e1bf46ab-7168-491e-925e-f01e21394812",
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    phone: "+1 (979) 504-2554",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39
  }
];

/* Получить массив имен (поле name) всех пользователей */
const getAllNames = users.map(el => el.name);
console.log(getAllNames); // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

/*Получить массив объектов пользователей по цвету глаз (поле eyeColor)*/
const getUsersByEyeColor = (arr, color) =>
  users.filter(el => el.eyeColor === color).map(el => el);
console.log(getUsersByEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

/* Получить массив имен пользователей по полу (поле gender)*/
const getUsersByGender = (arr, gender) =>
  users.filter(el => el.gender === gender).map(el => el.name);
console.log(getUsersByGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

/*Получить массив только неактивных пользователей (поле isActive)*/
const getInactiveUsers = arr => users.filter(el => !el.isActive).map(el => el);
console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

/*Получить пользоваля (не массив) по email (поле email, он уникальный)*/
const getUserByEmail = (arr, email) => users.find(el => el.email === email);
console.log(getUserByEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserByEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

/* Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age)*/
const getUsersWithAge = (arr, min, max) =>
  users.filter(el => el.age > min && el.age < max);
console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
console.log(getUsersWithAge(users, 30, 40)); // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

/*Получить общую сумму баланса (поле balance) всех пользователей*/
const getTotalBalance = arr =>
  users.reduce((acc, el) => (acc += el.balance), 0);
console.log(getTotalBalance(users)); // 20916

/*Массив имен всех пользователей у которых есть друг с указанным именем*/
const getUsersByFriend = (arr, name) =>
  users.filter(el => el.friends.includes(name));
console.log(getUsersByFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersByFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

/*⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ */
/*Получить массив всех скиллов всех пользователей (поле skills), при этом не должно быть
// * повторяющихся скиллов и они должны быть отсортированы в алфавитном порядке*/
// const getAllUniqueSkills = arr => [
//   ...new Set(arr.reduce((acc, el) => acc.concat(el.skills), [])).sort()
// ];
// const allSkills = users
//   .reduce((acc, el) => (acc += el.skills), [])
//   .split(",")
//   .sort();
// console.log(allSkills);

// for (let i = 0; i < allSkills.length; i++) {
//   if (allSkills.indexOf()) {
//     console.log();
//   }
// }

// console.log(allSkills(users)); // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

/*Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)*/
// const getUserNamesSortedByFriendsCount = arr => {...};
// console.log(getUserNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
// /**
