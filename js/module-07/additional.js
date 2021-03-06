'use strict'

//1
/*Есть список категорий с классом categories //(на вкладке HTML).
  Напишите код, который для каждого элемента li //(первая вложенность) 
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li
  К примеру:
    Категория: Животные
    Количество вложенных li: 4*/
// let list = document.querySelector('.categories');
//   function fn(){
//     let newMass = Array.from(list.children).map(el => el.textContent);
//     console.log(newMass)
//     }
//     fn(list.children)
  
// console.log(list.firstChild.textContent = 'categories');
// const categoriesFirstLi = Array.from(
//   document.querySelectorAll(".categories > li")
// );
// const categoriesUl = Array.from(
//   document.querySelectorAll(".categories  li ul")
// );

const categoriesFirstLi = Array.from(
  document.querySelectorAll(".categories > li")
);
const categoriesUl = Array.from(
  document.querySelectorAll(".categories  li ul")
);

const categoriesList = [];

categoriesFirstLi.forEach(element => {
  categoriesList.push(
    `Категория: ${element.firstChild.textContent.trim()} / Количество: ${
      element.firstElementChild.children.length
    }`
  );
});

console.log(categoriesList);

//2
/*Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
  - Найдите последнего потомка списка и сделайте его текст синего цвета*/
const list = document.querySelector('.Technology');

const first = list.firstElementChild;
first.className = 'first';

const last = list.lastElementChild;
last.className = 'last';
//3 
/*Дан ul с классом .list и массив строк. 
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.*/
const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];

const listDouble = document.querySelector('.list');

for(let items of elements) {
  const item = document.createElement('li');
  item.textContent = items;
  listDouble.append(item);
}
//4
/*Напишите скрипт для создания галлереи изображений. 
  - На вкладке HTML уже есть ul.gallery.
  - Используйте массив объектов для создания тегов img вложенных в li
  - Оформление по вкусу, можно и не делать, достаточно чтобы каждое 
    изображение было 300px по ширине
  - Добавьте все элементы галлереи в ul.gallery*/

const galleryItems = [
  {url:"https://images.pexels.com/photos/2110175/pexels-photo-2110175.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    alt: "White and Black Long Fur Cat"},
  {url:"https://images.pexels.com/photos/2109124/pexels-photo-2109124.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish"},
  {url:"https://images.pexels.com/photos/2072583/pexels-photo-2072583.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    alt: "Two Brown Hen and One Red Rooster"},
  {url:"https://images.pexels.com/photos/2114229/pexels-photo-2114229.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    alt: "Group of Horses Running"},
  {url:"https://images.pexels.com/photos/1028225/pexels-photo-1028225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    alt: "Macaw Birds"},
  {url:"https://images.pexels.com/photos/2128339/pexels-photo-2128339.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    alt: "2 Lion on Grass Field during Daytime"}
];

let newGalleryItems = galleryItems.reduce((acc, el) => acc + `<li><img src = "${el.url}" alt = "${el.alt}" style = "width: 300px"></li>`, "");
let images = document.querySelector('.gallery');
images.innerHTML = newGalleryItems;
console.log(newGalleryItems);

//5
/*Есть список с классом .size-filter из произвольного 
  количества чекбоксов, каждый из которых содержит 
  размер одежды в фильтре.
  Напишите функцию collectInputData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.
  Возвращает массив значений атрибута value.
*/
//const list = document.querySelectorAll('input:checked')
//console.log(list)

//6
/*Создайте функцию createMovieCard(), которая 
  создает и возвращает DOM-узел карточки кинофильма.
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.*/

const card = document.querySelector('.movie');
console.log(card);

const movieCard = createMovieCard();
let body = document.body;

// let createMovie1 = document.createElement('div');
// let createImage = document.createElement('img');

// let createMovie2 = document.createElement('div');
// let createTitle = document.createElement('h2');

// let createDescription = document.createElement('p');
// let createDate = document.createElement('p');
// let createRating = document.createElement('p');

// body.append(createMovie);

createMovie1.append(createImage);
createMovie1.append(createMovie2);

createMovie2.append(createTitle);
createMovie2.append(createDescription);
createMovie2.append(createDate);
createMovie2.append(createRating);

console.log(createMovie1);

createMovie1.className = 'movie';
createImage.className = 'movie__image';

createMovie2.className = 'movie__about';
createTitle.className = 'movie__title';

createDescription.className = 'movie__description';
createDate.className = 'movie__date';
createRating.className = 'movie__rating';

createImage.setAttribute('src', 'http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg');

createTitle.innerHTML = 'The Godfather';
createDescription.textContent =  'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge';
createDate.textContent = 'Released: 1972-03-14';
createRating.textContent = 'Rating: 8.6';


//7
/*В HTML-документе уже есть тег с id="root" (вкладка HTML)
  Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.
  Функция создает столько div, сколько указано в num и возвращает их в одном
  общем контейнере. После чего необходимо повесить результат работы функции
  в div с id="#root"
  Каждый div:
    - Имеет случайный rgb цвет фона
    - Размеры самого первого div - 30px на 30px.
    - Каждый следующий div после первого, должен быть шире и выше предыдущего*/
let root = document.querySelector('#root');
let box = document.createElement('div');

function randomColor() {
  let red = Math.floor(Math.random()*255);
  return red; 
}

function createBoxes(num){
  root.append(box)
  let i = 0;
  let w = 30;

  while (i < num){
    i++
    box.innerHTML += `<div style = "width: ${w + 'px'}; height: ${w + 'px'}; background: rgb(${randomColor()}, ${randomColor()}, ${randomColor()})">${i}</div>`;
    w += 10;
  }
}
createBoxes(4)