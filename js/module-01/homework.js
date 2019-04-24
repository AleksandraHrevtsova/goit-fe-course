'use strict'

/*Напишите скрипт имитирующий авторизацию администратора в панели управления.
  При загрузке страницы у посетителя запрашивается логин через prompt:
    - Если посетитель нажал Cancel — показывать alert с текстом 'Отменено пользователем!'
    - Если было введено что либо другое, что не совпадает со значением константы adminLogin, 
       показывать alert с текстом 'Доступ запрещен, неверный логин!'   
    - Если был введен логин совпадающий со значением константы adminLogin, 
      спрашивать пароль через prompt.
  При вводе пароля:
      - Если нажали Cancel, показывать alert с текстом 'Отменено пользователем!'
      - Если введен пароль который не совпадает со значением константы adminPassword,
        показывать alert с текстом 'Доступ запрещен, неверный пароль!'        
      - Если введён пароль который совпадает со значением константы adminPassword, 
        показывать alert с текстом 'Добро пожаловать!'
        
  🔔 PS: для удобства и чистоты кода сохраните в переменные сообщения отображаемые в alert
*/
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

/*
  ⚠️ ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
  Создайте скрипт турагенства, продающего поездки в 3-х группах: sharm, hurgada и taba.
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
