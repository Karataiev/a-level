"use strict"

// Напиши функцию, которая принимает 1 параметр. При первом вызове, она его запоминает, 
// при втором - суммирует переданый параметр с тем, что передали первый раз и тд. 
// Запрещается использовать глобальные переменные как хранилище результатов счетчика.

function numRes (n = 0) { 
    let res = n; 
    return function(x) { 
        res += x; 
        return res; 
    } 
};
let sum = numRes();
sum(1); //1
sum(3); //4
sum(6); //10


// Создать функцию которая будет возвращать массив в котором будут лежать все значения 
// - аргументы переданные в данную функцию. Но если мы ничего не передадим в параметрах, 
// то массив очистится. Запрещается использовать глобальные переменные как хранилище значений.

function retArr (n = null) {
    let resArr = [];
  return function(x) {
    if (x) {
      resArr.push(x);
    } else {
      resArr = [];
    }
    return resArr;
  }
};

let getUpdatedArr = retArr();

getUpdatedArr(3);
getUpdatedArr(5);
getUpdatedArr({name: 'Vasya'});
getUpdatedArr();
getUpdatedArr(4);