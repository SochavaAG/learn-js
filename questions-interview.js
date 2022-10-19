// 1. Question (Вопрос):
// https://www.youtube.com/watch?v=Wbg1Iyx1cNQ&t=18s&ab_channel=INIT
// Какие данные есть в JS

// Answer (Ответ):
// number, string, boolean, undefined, object, null, symbol

// Example (Пример):
// number (для любых чисел: целочисленных или чисел с плавающей точкой; целочисленные значения ограничены диапазоном ±(253-1))
console.log(typeof 42); // "number"

console.log(typeof 1 / 0); // NaN

// bigint (для целых чисел произвольной длины)
console.log(typeof 10n); // "bigint"

// string (ля строк. Строка может содержать ноль или больше символов, нет отдельного символьного типа)
console.log(typeof 'blubber'); // "string"
console.log(typeof ''); // "string"

// boolean (для true/false)
console.log(typeof true); // "boolean"

// undefined
console.log(typeof undeclaredVariable); // "undefined"

var agTest;
console.log(agTest); // undefined

// object
console.log(typeof Math); // "object"
// Math — это встроенный объект, который предоставляет математические операции и константы.

console.log(typeof null); // "object"
/*
 Результатом вызова typeof null является "object".
 Это официально признанная ошибка в typeof, ведущая начало с времён создания JavaScript и сохранённая для совместимости.
 Конечно, null не является объектом. Это специальное значение с отдельным типом.
 */

console.log(typeof alert); // "function"
/*
 Вызов typeof alert возвращает "function", потому что alert является функцией.
 */

// null (для неизвестных значений – отдельный тип, имеющий одно значение null)
let age1 = null;
/* null задает программист целенаправлено, и если вы увидели null – значит это где-то добавлено в переменную.
 */
var agTest1;
console.log(agTest1); // undefined
/*
 undefine же добавляется JavaScript-ом
 */
/*
 В JavaScript null не является "ссылкой на несуществующий объект" или "нулевым указателем", как в некоторых других языках.

 Это просто специальное значение, которое представляет собой "ничего", "пусто" или "значение неизвестно".

 В приведённом выше коде указано, что значение переменной age неизвестно.
 */

// symbol
/*
 Тип symbol (символ) используется для создания уникальных идентификаторов в объектах.
 */
console.log(typeof Symbol());
//-------------------------------------------------------------------------

// 2. Question (Вопрос):
// https://www.youtube.com/watch?v=Wbg1Iyx1cNQ&t=18s&ab_channel=INIT
// Что выдает console.log() ?
console.log(typeof null);

// Answer (Ответ):
/*
 Результатом вызова typeof null является "object".
 Это официально признанная ошибка в typeof, ведущая начало с времён создания JavaScript и сохранённая для совместимости.
 Конечно, null не является объектом. Это специальное значение с отдельным типом.
 */

// Example (Пример):
console.log(typeof null); // "object"
//-------------------------------------------------------------------------

// 3. Question (Вопрос):
// https://www.youtube.com/watch?v=Wbg1Iyx1cNQ&t=18s&ab_channel=INIT
// Что выведет
1 + "3"
"1" + 3

// Answer (Ответ):
// Так как тут знак плюс используется как оператор конкатенации, если бы не использовались кавычки 1 + 3, то цифры сложились бы.

// Result (Результат):
console.log(1 + "3"); // "12"
console.log(typeof (1 + "3")); // "string"

console.log(1 + "3")
console.log(typeof ("1" + 3)); // "string"

console.log(1 + 3); // 4
console.log(typeof (1 + 3)); // "number"
//-------------------------------------------------------------------------

// 4. Question (Вопрос):
// https://www.youtube.com/watch?v=Wbg1Iyx1cNQ&t=18s&ab_channel=INIT
// Что выдаст результат сравнения двух объектов
var agObj41 = {
  name: 'Alexaner'
}

var agObj42 = {
  name: 'Alexaner'
}

agObj41 == agObj42
agObj41 === agObj42

// Answer (Ответ):
/*
 Дав разных объекта, которые занимают разные области (участки) оперативной памяти.
 Хоть тела объектов одинаковые, объекты разные.
 Сравнение объектов идет не по ссылкам, а по адресам.
 */

console.log(agObj41 == agObj42); // false
console.log(agObj41 === agObj42); // false

// Solution (Решение):
var agObj42 = agObj41;

console.log(agObj41 == agObj42); // true
console.log(agObj41 === agObj42); // true
//-------------------------------------------------------------------------

// 5. Task (Задача):
// https://www.youtube.com/watch?v=Wbg1Iyx1cNQ&t=18s&ab_channel=INIT
// Есть такой код, что выведет console.log() ?
let agVar5 = 'Hello';

const agFunc5 = arg5 => {
  arg3 = 'Hi!';
}

agFunc5(agVar5);

console.log(agVar5);

// Answer (Ответ):
// Выведет 'Hello'

// Если поменять в функции переменную agVar52
let agVar52 = 'Hello';

const agFunc52 = arg52 => {
  agVar52 = 'Hi!';
}

agFunc52(agVar52);

console.log(agVar52);
//-------------------------------------------------------------------------

// 6. Task (Задача):
// https://www.youtube.com/watch?v=Wbg1Iyx1cNQ&t=18s&ab_channel=INIT
// Есть такой код, что выведет console.log() ?
const agObj6 = {
  agVar6: 'Hello'
};

const agFunc6 = arg6 => {
  arg6.agVar6 = 'Hi!';
}

agFunc6(agObj6);

console.log(agObj6.agVar6);

// Answer (Ответ):
// Выведет 'Hi'
//-------------------------------------------------------------------------

// 7. Question (Вопрос):
// https://youtu.be/a9dM7WQRJ0M
// Что выведет console.log ?
console.log(typeof typeof false); // "string"

// Answer (Ответ):
// Всегда будет "string", так как результат typeof всегда в кавычках
//-------------------------------------------------------------------------

// 8. Какой порядок вывода console.log() ?
console.log(1);
setTimeout(() => {
  console.log(2);
}, 0);
console.log(3);

// Stack
// Порядок вызова:
// 1
// 3
// 2
//-------------------------------------------------------------------------

// 9. Task (Задача):
// https://youtu.be/3naT39judvQ?t=1699
// Что выведется после отработки цикла?

for(var i91 = 0; i91 < 5; i91++) {
  setTimeout(() => console.log(i91), 0);
}
// Result (Результат):
// 5
// 5
// 5
// 5
// 5

// Решение: Вместо var нужно let
for(let i92 = 0; i92 < 5; i92++) {
  // область видимости let в рамках блока {}
  // для каждой итерации создается одна переменная i112
  setTimeout(() => console.log(i92), 0);
}
// Result (Результат):
// 0
// 1
// 2
// 3
// 4
//------------------------------------------------------------------------