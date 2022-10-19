// Создается масссив
// https://youtu.be/GULFKAX0nxY?t=25
let arrOld = new Array(); // используется редко
let arrNew = [];
let arr = [
  'banan',
  'rom',
  'text', // после последнего элемента допускается "висячая запятая"
];

// Массив может содержать все примитивы: числа, строки, undefined, null, boolean-ые (false, true) значения, также объекты, массивы, функции и структуры данных
// Пример массива:
const arrExample = [1,0,74,'string',null,undefined,false,true,() => {},{},[1,2,3,4],new Map()];
//-------------------------------------------------------------------------

// Очень популярные методы: forEach, map, reduce
// ########################################################################
// 1. forEach – перебор элементов массива
// C forEach нельзя выйти досрочно, в отличии от цикла for() {} в котором с помощью break можно выйти из него
// https://youtu.be/ZcLGyy0YFwk?t=79
const arrNum1 = [1,2,3,4,5];

const newArray1 = arrNum1.forEach((agItem1, agIndex1, agArr1) => {
    console.log(agItem1, agIndex1);

// результат:
// 1 0
// 2 1
// 3 2
// 4 3
// 5 4
});

// Массив arrNum1 не мутирует (изменяется)
// agArr1 – аргумент крайне редко используется

// метод ничего не возвращает newArray1 будет undefined
console.log(newArray1); // undefined

// Examle: ---------------------------------------
// https://youtu.be/xEFeiKULMKs?t=33
// Нужно узнать тип каждого элемента массива arrExample1
const arrExample1 = [1,0,74,'string',null,undefined,false,true,() => {},{},[1,2,3,4],new Map()];

arrExample1.forEach((agItem1) => {
  console.log(typeof agItem1);

// результат:
// "number"
// "number"
// "number"
// "string"
// "object"
// "undefined"
// "boolean"
// "boolean"
// "function"
// "object"
// "object"
// "object"
});
//-------------------------------------------------------------------------

// 2. map – перебор элементов массива и возврат нового массива на основе текущего
// https://youtu.be/ZcLGyy0YFwk?t=233
const arrNum2 = [1,2,3,4,5];

const newArray2 = arrNum2.map((agItem2, agIndex2, agArr2) => {
    return agItem2 * 2;
});

console.log(newArray2);

// результат:
// [2,4,6,8,10]

// Первоначальный массив arrNum2 не промутируется
console.log(arrNum2);

// результат:
// [1,2,3,4,5]

// Examle: ---------------------------------------
// Перемножить каждое значение массива на соответствующий индекс массива
const newResult2 = arrNum2.map((agItem2, agIndex2) => {
    return agItem2 * agIndex2;
});

console.log(newResult2);

// результат:
// [0,2,6,12,20]
//-------------------------------------------------------------------------

// 3. reduce – перебор элементов массива и возврат новой структуры данных
// reduce возвращает результат обработки массива
// reduce подходит для свертки массива
// https://youtu.be/ZcLGyy0YFwk?t=379
// https://youtu.be/KqbnxtLOeZk?t=43
const arrNum3 = [1,2,3,4,5];

const something = arrNum3.reduce((acc3, agItem3, agIndex3, agArr3) => {
    acc3[agIndex3] = agItem3;

return acc3;
}, {});

console.log(something);

// результат:
// {"0": 1, "1": 2, "2": 3, "3": 4, "4": 5}

// Аналог reduce
let res = '';

for(let i = 0; i < 5; i++) {
  res += i;
}

// Examle: ---------------------------------------
// https://youtu.be/ZcLGyy0YFwk?t=676
// Найти сумму элементов массива
const arrExample31 = [4,-5,7,-6, 2];

const newSum31 = arrExample31.reduce((acc31, agItem31) => (acc31 + agItem31));

console.log(newSum31);
// результат:
// 2

// Examle: ---------------------------------------
// https://youtu.be/KqbnxtLOeZk?t=440
// Найти сумму элементов массива у которых значение больше нуля
const arrExample32 = [-4,-5,7,-6, 2];

const newSum32 = arrExample32.reduce((acc32, agItem32) => {
  if (agItem32 > 0) {
    acc32 += agItem32;
  }

  return acc32;
}, 0); // Нужно стартовое значение аккумулятора acc32 прировнять к нулю, чтоб если первое значение массива, которое сразу кладется в аккумулятор acc32 не попало в рассчет суммы

console.log(newSum32);
// результат:
// 9

// Examle: ---------------------------------------
// https://youtu.be/KqbnxtLOeZk?t=395
// Вывести строку со значениями массива через пробел
const arrExample33 = [16,20,30,40,555];

const newSum33 = arrExample33.reduce((acc33, agItem33) => {
    acc33 = acc33 + ' ' + agItem33;

return acc33;
});

console.log(newSum33);
// результат:
// "16 20 30 40 555"

// Examle: ---------------------------------------
// https://youtu.be/KqbnxtLOeZk?t=683
// Найти максимальное значение элементов массива
const arrExample34 = [-4,-5,7,-6, 2];

const newSum34 = arrExample34.reduce((acc34, agItem34) => {
  if (agItem34 > acc34) {
    acc34 = agItem34;
  }

  return acc34;
});

console.log(newSum34);
// результат:
// 7
//-------------------------------------------------------------------------
// ########################################################################

// 4 find – позволяет найти элемент по условию и сразу его возращает
// ищет до первого элемента, который возвращает true
// https://youtu.be/ZcLGyy0YFwk?t=757
const arrNum4 = [1,2,3,4,5];

const agEl4 = arrNum4.find((agItem4, agIndex4, agArr4) => {
  return agItem4 === 3;
});

console.log(agEl4);
// результат:
// 3
//-------------------------------------------------------------------------

// Examle: ---------------------------------------
// https://youtu.be/xEFeiKULMKs?t=446
// Найти элемент по id
const arrExample4 = [1,0,74,'string',{id: 1, name:'Alex'},null,undefined,false,true,() => {},{},[1,2,3,4],new Map()];

const agFindResult4 = arrExample4.find((agItem4) => agItem4.id === 1);

console.log(agFindResult4);
// результат:
// {"id": 1, "name":"Alex"}
//-------------------------------------------------------------------------

// 5 findIndex – позволяет найти индекс по условию и сразу его возращает
// ищет до первого индекса, который возвращает true
// https://youtu.be/ZcLGyy0YFwk?t=879
const arrNum5 = [1,2,3,4,5];

const agIndex5 = arrNum5.findIndex((agItem5, agIndex5, agArr5) => {
  return agItem5 === 3;
});

console.log(agIndex5);
// результат:
// 2
//-------------------------------------------------------------------------

// Examle: ---------------------------------------
// https://youtu.be/xEFeiKULMKs?t=519
// Найти индекс элемента, который содержит id
const arrExample5 = [1,0,74,'string',{id: 1, name:'Alex'},{id: 2, name:'Dima'},null,undefined,false,true,() => {},{},[1,2,3,4],new Map()];

const agFindResult5 = arrExample5.findIndex((agItem5) => agItem5.id);

console.log(agFindResult5);
// результат:
// 4
//-------------------------------------------------------------------------

// 6 filter – возвращает новый массив по истенному условию
// https://youtu.be/ZcLGyy0YFwk?t=942
const arrNum6 = [1,2,3,4,5];

const agFilterArr6 = arrNum6.filter((agItem6, agIndex6, agArr6) => {
  return agItem6 >= 3;
});

console.log(agFilterArr6);
// результат:
//[3,4,5]
//-------------------------------------------------------------------------

// Examle: ---------------------------------------
// https://youtu.be/xEFeiKULMKs?t=621
// Найти элементы мвссива с типом Number
const arrExample6 = [1,0,74,'string',{id: 1, name:'Alex'},{id: 2, name:'Dima'},null,undefined,false,true,() => {},{},[1,2,3,4],new Map()];

const agFindResult6 = arrExample6.filter((agItem6) => typeof agItem6 === 'number'); // Важно написать тип с маленькой буквы так 'number', а НЕ так 'Number'

console.log(agFindResult6);
// результат:
// [1,0,74]
//-------------------------------------------------------------------------

// Есть группа из четырех методов:
// ########################################################################
// 7. push – вставляет элементы в конец массива
// Метод push мутирует исходный массив (изменяет) и возвращает новую длину массива
// Мутирование в функциональном программированию стараются избегать
// https://youtu.be/ZcLGyy0YFwk?t=1084
const arrNum7 = [1,2,3,4,5];

const newLengthArr71 = arrNum7.push(10);

console.log(arrNum7);
// результат:
// [1,2,3,4,5,10]
//-------------------------------------------------------------------------

// Возвращает новую длину смутировшего массива
console.log(newLengthArr71);
// результат:
// 6
//-------------------------------------------------------------------------

const newLengthArr72 = arrNum7.push(44, 8);

console.log(arrNum7);
// результат:
// [1,2,3,4,5,10,44,8]
//-------------------------------------------------------------------------

console.log(newLengthArr72);
// результат:
// 8
//-------------------------------------------------------------------------

// 8. unshift – вставляет элементы в начало массива и изменяет его, тоесть мутирует, и возвращает новую длину массива
// https://youtu.be/ZcLGyy0YFwk?t=1196
const arrNum8 = [1,2,3,4,5];

const newLengthArr8 = arrNum8.unshift(77, 14, 6, 777);

console.log(arrNum8);
// результат:
// [77,14,6,777,1,2,3,4,5]
//-------------------------------------------------------------------------

console.log(newLengthArr8);
// результат:
// 9
//-------------------------------------------------------------------------

// 9. pop – удаляет элемент из конца массива и одновременно возвращает удаленный элемент из массива,
// и мутирует этот массив
// https://youtu.be/ZcLGyy0YFwk?t=1287
const arrNum9 = [1,2,3,4,5];

const lastEl9 = arrNum9.pop();

console.log(arrNum9);
// результат:
// [1,2,3,4]
//-------------------------------------------------------------------------

console.log(lastEl9);
// результат:
// 5
//-------------------------------------------------------------------------

// 10. shift – удаляет элемент из начала массива и одновременно возвращает удаленный элемент из массива,
// и мутирует этот массив
// https://youtu.be/ZcLGyy0YFwk?t=1381
const arrNum10 = [1,2,3,4,5];

const firstEl10 = arrNum10.shift();

console.log(arrNum10, firstEl10);
// результат:
// [2,3,4,5] 1
//-------------------------------------------------------------------------

// Методы push, pop работаю быстро, так как не нужно перестраивать массиив
// Методы unshift, shift работают медленно, так как нужно перестраивать массив
// ########################################################################

// 11. concat – создает новый массив с переданными значениями в конце
// Исходный массив не мутируется arrNum11 в отличии от метода push
// https://youtu.be/ZcLGyy0YFwk?t=1525
const arrNum11 = [1,2,3,4,5];

const newArr111 = arrNum11.concat(11,12,13,14,15);

const newArr112 = arrNum11.concat([21,22,23,24,25]);

console.log(newArr111, newArr112);
// результат:
// [1,2,3,4,5,11,12,13,14,15]
// [1,2,3,4,5,21,22,23,24,25]
//-------------------------------------------------------------------------

// 12. join – позволяетсоеденить массив в строку
// https://youtu.be/ZcLGyy0YFwk?t=1639
// https://youtu.be/xEFeiKULMKs?t=824
const str12 = 'qwewqdvdfaqwt';
const strArr12 = str12.split('');

console.log(strArr12);
// результат:
// ["q","w","e","w","q","d","v","d","f","a","q","w","t"]
//-------------------------------------------------------------------------

const newStr12 = strArr12.join('–');
console.log(strArr12);
// результат:
// "q–w–e–w–q–d–v–d–f–a–q–w–t"
//-------------------------------------------------------------------------

// 13. sort – позволяет отсортировать массив, и новый массив промутирует
// https://youtu.be/ZcLGyy0YFwk?t=1778
const arrNum131 = [11,2,-93,4,0];

const newArr131 = arrNum131.sort();

// сортировка не такая как хотелось бы
console.log(newArr131);
// результат:
// [-93,0,11,2,4]
//-------------------------------------------------------------------------

// делаем сортировку как нужно
const arrNum132 = [11,2,-93,4,0];

arrNum132.sort((arg131, arg132) => {
  if (arg131 > arg132) return 1;
  if (arg131 === arg132) return 0;
  if (arg131 < arg132) return -1;
});

console.log(arrNum132);
// результат:
// [-93,0,2,4,11]
//-------------------------------------------------------------------------

// или наоборот (реверс)

arrNum132.sort((arg131, arg132) => {
  if (arg131 > arg132) return -1;
  if (arg131 === arg132) return 0;
  if (arg131 < arg132) return 1;
});

console.log(arrNum132);
// результат:
// [11,4,2,0,-93]
//-------------------------------------------------------------------------

// Упрощаем:
arrNum132.sort((arg131, arg132) => arg131 - arg132);

console.log(arrNum132);
// результат:
// [-93,0,2,4,11]
//-------------------------------------------------------------------------

// 14. isArray – позволяет проверить, массив ли это
// https://youtu.be/ZcLGyy0YFwk?t=2195
const arrNum14 = [1,2,3,4,5];

Array.isArray(arrNum14);

console.log(Array.isArray(arrNum14));
// результат:
// true
//-------------------------------------------------------------------------

// 15. splice – позволяет удалять и вставлять элементы массива, и мутирует исходный массив
// https://youtu.be/ZcLGyy0YFwk?t=2274
// https://youtu.be/xEFeiKULMKs?t=883
const arrExample15 = [1,0,74,'string',{id: 1, name:'Alex'},{id: 2, name:'Dima'},null,undefined,false,true,() => {},{},[1,2,3,4],new Map()];

const strArr = ['Number', 'text', 'Pop'];

arrExample15.splice(2, 1, ...strArr); // ... – оператор spread

console.log(arrExample15);
// результат:
// [1,0,'Number','text','Pop','string',{id: 1, name:'Alex'},{id: 2, name:'Dima'},null,undefined,false,true,() => {},{},[1,2,3,4],{}];
//-------------------------------------------------------------------------

const arrNum151 = [1,2,3,4,5];

arrNum151.splice(0, 1);

// удаляем первый элемент массива, как метод shift

console.log(arrNum151);
// результат:
// [2,3,4,5]
//-------------------------------------------------------------------------

// вставляем несколько элементов на индекс 3
const arrNum152 = [1,2,3,4,5];

arrNum152.splice(3, 1, 12, 123, 15);

console.log(arrNum152);
// результат:
// [1,2,3,12,123,15,5]
//-------------------------------------------------------------------------

const arrExample152 = [1,0,74,'string',{id: 1, name:'Alex'},{id: 2, name:'Dima'},null,undefined,false,true,() => {},{},[1,2,3,4],new Map()];

arrExample152.splice(5, 4);

console.log(arrExample152);
// результат:
// [1,0,74,'string',{id: 1, name:'Alex'},true,() => {},{},[1,2,3,4],{}]
//-------------------------------------------------------------------------

arrExample152.splice(5, arrExample152.length);
// или можно упростить
// arrExample152.splice(5, arrExample152.length); -> arrExample152.splice(5);

console.log(arrExample152);
// результат:
// [1,0,74,'string',{id: 1, name:'Alex'}]
//-------------------------------------------------------------------------


// 16. slice – позволяет вернуть новый подмассив из переданного
// https://youtu.be/ZcLGyy0YFwk?t=2442
const arrNum16 = [1,2,3,4,5];

arrNum16.slice(1, 3);

console.log(arrNum16);
// результат:
// [1,5]
//-------------------------------------------------------------------------

const arrNum162 = [1,2,3,4,5];

const newArr162 = arrNum162.slice(-1);

console.log(newArr162);
// результат:
// [5]
//-------------------------------------------------------------------------

const arrNum163 = [1,2,3,4,5];

const newArr163 = arrNum163.slice(-2);

console.log(newArr163);
// результат:
// [4,5]
//-------------------------------------------------------------------------

const arrNum164 = [1,2,3,4,5];

const newArr164 = arrNum164.slice(1, -1);

console.log(newArr164);
// результат:
// [2,3,4]
//-------------------------------------------------------------------------

// 17. indexOf – возвращает индекс массива
// https://youtu.be/ZcLGyy0YFwk?t=2639
const arrNum17 = [1,2,3,4,5];

const foundID171 = arrNum17.indexOf(3);

console.log(foundID171);
// результат:
// 2
//-------------------------------------------------------------------------

// второй параметр указывает с какого индекса искать элемент в масииве
// найти элемен со значением 3 с 4-го индекса в массиве
const foundID172 = arrNum17.indexOf(3, 4); 

console.log(foundID172);
// результат:
// -1 // ничего не нашло, так как элемен со значением 3 (индекс 2) находится до 4-го индекса
//-------------------------------------------------------------------------

const foundID173 = arrNum17.indexOf(30); // несуществующий элемент в массиве arrNum17

console.log(foundID173);
// результат:
// -1
//-------------------------------------------------------------------------

// 18. lastIndexOf – возвращает индекс массива, но поиск с конца к началу массива
const arrNum18 = [1,2,3,4,5];

const foundID181 = arrNum18.lastIndexOf(5);

console.log(foundID181);
// результат:
// 4
//-------------------------------------------------------------------------

const foundID182 = arrNum18.lastIndexOf(5, 1);
// второй параметр 1 означает, что нужно искать с элемента со значением 4 к началу массива, тоесть к элементу со значением 1

console.log(foundID182);
// результат:
// -1
//-------------------------------------------------------------------------

// 19. includes – позволяет проверить содержится ли какое-то значение в массиве, и возвращает boolean значение true/false
// https://youtu.be/ZcLGyy0YFwk?t=2809
// https://youtu.be/xEFeiKULMKs?t=261
// Второй параметр указывает с какого индекса искать
const arrExample191 = [1,0,74,'string',{id: 1, name:'Alex'},{id: 2, name:'Dima'},null,undefined,false,true,() => {},{},[1,2,3,4],new Map()];

const includesResult191 = arrExample191.includes(74, 0);

console.log(includesResult191);
// результат:
// true
//-------------------------------------------------------------------------

const arrNum192 = [1,2,3,4,5];

const checkArr191 = arrNum192.includes(1, 2);

console.log(checkArr191);
// результат:
// false
//-------------------------------------------------------------------------

const checkArr192 = arrNum192.includes(1);

console.log(checkArr192);
// результат:
// true
//-------------------------------------------------------------------------

const arr193 = [{},3,4,5];

const checkArr193 = arr193.includes({});

console.log(checkArr193);
// результат:
// false
//-------------------------------------------------------------------------
// так как масси и объекты передются по ссылке

const arr194 = [[1,2],3,4,5];

const checkArr194 = arr194.includes([1,2]);

console.log(checkArr194);
// результат:
// false
//-------------------------------------------------------------------------
// так как масси и объекты передются по ссылке

const obj195 = {color1: 'red', color2: 'blue'};

const arr195 = [obj195.color2, 3, 4, 5];
console.log(obj195.color2); // 'blue'

const checkArr195 = arr194.includes('blue');

console.log(checkArr195);
// результат:
// false
//-------------------------------------------------------------------------
// по этому удобно использовать этот метод с примитивами

// 20. reverse – переворачивает массив
// https://youtu.be/ZcLGyy0YFwk?t=2936
const arrNum20 = [1,2,3,4,5];

const reverseArr20 = arrNum20.reverse();

console.log(reverseArr20);
// результат:
// false
//-------------------------------------------------------------------------

// 21. flat – достаёт вложенные массивы и переносит их на уровень, который определяет разработчик. Дефолтный уровень — 1
// позволяет работать с вложенными массивами
// https://youtu.be/xEFeiKULMKs?t=1014
const arrNum21 = [11,12,[23,24,[35,36]]]; // трехмерный массив

// в параметр передают уровень массива, в данном случае для трехмерного массива уровень — 3
const newNumArr21 = arrNum21.flat(3);

console.log(newNumArr21);
// результат:
// [11,12,23,24,35,36]
//-------------------------------------------------------------------------

const arrNumAbstract21 = [11,12,[23,24,[35,36,[47,48,[[]]]]]];

const newNumAbstractArr21 = arrNumAbstract21.flat(Infinity); // если мы не знаем скольки мерный массив прийдет, то в параметр пишем — Infinity

console.log(newNumAbstractArr21);
// результат:
// [11,12,23,24,35,36,47,48]
//-------------------------------------------------------------------------


