"use strict"


// Написать функцию, которая установит обработчик нажатия клавиши или сочетания клавиш.
// Так при нажатии P в консоли должно появится сообщение 'hello, world'.
// addListener('P', function(){
//  console.log('hello, world');
// });
// при нажатии Ctrl + P появится сообщение 'hello, world'. 
// Обработчик должен срабатывать только если клавиши будут нажаты в прямой 
// последовательности с лева на право. Если первой клавишей будет нажата P, 
// а затем Control - сообщения быть не должно
// addListener('Control+P', function(){
//  console.log('hello, world');
// });

function addListener(type, handler) {
  let counter = 0;
  const keyNames = type.split('+');
  document.addEventListener('keydown', function (event) {
      event.preventDefault();
      for (let keyName of keyNames) {
          if (event.key === keyName) {
              counter++;
          }
      }
      if (counter === keyNames.length) {
          handler(event);
      }
  });
  document.addEventListener('keyup', function (event) {
      event.preventDefault();
      for (let keyName of keyNames) {
          if (event.key === keyName) {
              counter--;
          }
      }
  });

}

addListener('Control+p', function (event) {
  console.log('hello, world');
});
