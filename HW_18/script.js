"use strict"

// Реализуйте класс CustomString, который будет иметь следующие методы: 
// метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, 
// метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, 
// сделав ее первую букву заглавной и метод ucWords, который принимает строку 
// и делает заглавной первую букву каждого слова этой строки.


class CustomString {
    
    reverse(str) {
        let array = [];
        let string = str;
        
        for(let char of string){
            array.unshift(char);
        }
        console.log(array.join(''));
    }

    ucFirst(str) {
        if (!str) return str;
        console.log (str[0].toUpperCase() + str.slice(1));
      }

    ucWords(str) {
        return str.replace(/(^|\s)\S/g, function(upperFirst) {return upperFirst.toUpperCase()})
      }  
}

let myString = new CustomString();

myString.reverse('qwerty'); //выведет 'ytrewq'
myString.ucFirst('qwerty'); //выведет 'Qwerty'
myString.ucWords('qwerty qwerty qwerty'); //выведет 'Qwerty Qwerty Qwerty