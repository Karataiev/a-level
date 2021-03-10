"use strict";

// Задача 1
var array = ['Привет,', ' мир', '!'];
document.write (array [0]);
document.write (array [1]);
document.write (array [2]);


// Задача 2

var language = 0;
var arr = 0;

if (language = 'ru') {
    var arr = ['понеділок, вівторок, середа, четвер, п*ятниця, субота, неділя'];
    console.log (arr);
}

if (language = 'en') {
    var arr = ['Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'];
    console.log (arr);
}

switch (language) {
    case language = 'ru':
        console.log (arr = ['понеділок, вівторок, середа, четвер, п*ятниця, субота, неділя']);
        break;
}        
switch (language) {        
    case language = 'en':
        console.log (arr = ['Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday']);
        break;
}

var ru = 'ru';
var en = 'en';
var arr = 0;

var arr = 'ru' [
   en = ['Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'],
   ru = ['понеділок, вівторок, середа, четвер, п*ятниця, субота, неділя']
];
console.log (ru);

var arr = 'en' [
   en = ['Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'],
   ru = ['понеділок, вівторок, середа, четвер, п*ятниця, субота, неділя']
];
console.log (en);


// задача 3

var storey = prompt('Этаж', 'номер этажа');
var porch = prompt('Подьезд', 'номер подьезда');
var flat = prompt('Квартира', 'количество квартир на площадке');
var number = prompt('Номер квартиры', 'укажите номер квартиры');

if (storey < 1 || storey > 25) {
  alert('Укажите этаж в диапазоне 1-25');
} else if (porch < 1 || porch > 10) {
  alert('Подьезд 1-10');
} else if (flat < 1 || flat > 20) {
  alert('Значение неверное 1-20');
}
else if (number > (porch * storey * flat)) {
alert('Такой квартиры нет');
}

var sum = (porch * storey * flat);
var result = (number / (storey * flat));
document.write(Math.ceil(result));
  
  





    



