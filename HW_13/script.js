'use strict';


// Функция padStart
  
function padStart(str='adc', number=5, filler='poo'){
  let word=str; 
  while (word.length<number){
    let newString=filler+word;
    if (newString<number){
      word=filler+word;
    }else{
      let newFillerLength=number-str.length;
      word=filler.slice(0, newFillerLength)+word;
    }
  } return word;
}
padStart();

// Функция toPrecision 

function toPrecision(number, digits){
  let num=number;
  if(digits=0){
    console.log(num);
  }else if(number.length=digits){
    console.log(num);
  }else if(number.length>digits){
   let newNum=number.length-digits;
   let newNumber=number.length-newNum;
   num=number.slice(0, newNumber);
  }else if(number.length<digits){
    let filler=digits-number.length;
    num.padEnd(filler, '0');
  } return num;
}
toPrecision();