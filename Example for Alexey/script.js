'use strict';

/*
у тебя есть, например, массив слов "arrWords" (он находится ниже).
в задании указано, что тебе нужно переписать этот массив в объект.
примерно так оно должно выглядеть:
obj = {
aaa: [aaa, aaa, aaa],
bbb: [bbb, bbb],
ccc: [ccc, ccc]
}
*/

let arrWords = [{
  city: 'city1',
  state: 'state1',
  population: 1000
}, {
  city: 'city2',
  state: 'state1',
  population: 2000
}, {
  city: 'city3',
  state: 'state2',
  population: 3000
}, {
  city: 'city4',
  state: 'state1',
  population: 4000
}, {
  city: 'city5',
  state: 'state2',
  population: 5000
}];

let objWords = {};

/*
запускаем цикл.
перебираем массив "arrWords".
*/

for (var i = 0; i < arrWords.length; i++) {

  /*
  создаем проверку, есть ли в объекте свойство с таким-то именем.
  в случае твоей задачи это свойство равно названию штата.
  При первом заходе такого свойства, конечно, нет, поэтому
  проверка даст "true".
  Внутри проверки создаем такое свойство, и оно равно пустому массиву.
  */

  if (!objWords[arrWords[i]['state']]) {
    objWords[arrWords[i]['state']] = [];
  }

  /*
  Дальше "пушим", т.е. записываем в такой массив элемент массива "arrWords".
  */

  objWords[arrWords[i]['state']].push({city: arrWords[i]['city'], population: arrWords[i]['population']});
}

console.log(objWords);






















//bottom
