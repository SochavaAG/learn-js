// . Question (Вопрос):
//

// Answer (Ответ):

// Example (Пример):

// Result (Результат):

// Source code (Исходный код):

// Optimization (Оптимизация):

// Solution (Решение):

//-------------------------------------------------------------------------

// 1.
// Source code (Исходный код):
const innerIndex = 1;
const outerIndex = 2;

function agFunc1 (arg1) {
  if(innerIndex < outerIndex) {
    console.log(2);
  } else { // избавляемя от лишнего else
    return;
  }
}

// Optimization (Оптимизация):
function agFunc1 (arg1) {
  if(innerIndex < outerIndex) {
    console.log(2);
  } return; // можно убрать else {}
}

//-------------------------------------------------------------------------

// 2. Упрощение записи
const agFunc21 = (arg21) => { // можно убрать скобочки
  arg21 = 'test';
}

// Optimization (Оптимизация):
// New
const agFunc22 = arg22 => {
  arg22 = 'test';
}

// Variants (Варианты) #1:
// old
// Function Declaration
function agFunc23 (arg23) {
  arg23 = 'test';
}

// Function Expression
var agFunc24 = function(arg24) {
  arg24 = 'test';
}
//-------------------------------------------------------------------------

// 3. Старый и новый синтаксис setTimeout()
// New
setTimeout(() => {
  console.log(2);
}, 1000);

// Old
setTimeout(function agTimeout() {
  console.log(2);
}, 1000);
//-------------------------------------------------------------------------

// 4. Сокращенная запись forEach с функцией setTimeout()
// forEach
const agArr41 = [1,2,3,4,5];
agArr41.forEach((el) => console.log(el));

// forEach с функцией setTimeout()
const agArr42 = [1,2,3,4,5];
agArr42.forEach((el) => setTimeout(console.log, 0, el));
//-------------------------------------------------------------------------

// 5. Можно заблокировать цикл, если он бесконечный while(true) {}
for(let i5 = 0; i5 < 5; i5++) {
  console.log(i5);
}

// while(true) {} //
//-------------------------------------------------------------------------

// 6. Бесконечный цикл
/*
 for(let i6 = 0; i6 < Infinity; i6++) {
 console.log(111);
 }
 */
//-------------------------------------------------------------------------

// 7. Очистка Iterval
const baz7 = () => console.log('baz7');

const adID7 = setInterval(baz7, 1000);
clearInterval(adID7); //Очистка Iterval
//-------------------------------------------------------------------------


// 8. Упрощение записи
const arrNum8 = [1,2,3,4,5];

//
const newArray81 = arrNum8.map((agItem8, agIndex8, agArr8) => {
    return agItem8 * 2;
});

// Optimization (Оптимизация):
const newArray82 = arrNum8.map((agItem8) => agItem8 * 2);


// 9. Избавляемя от лишних return и else
function agFunc91 () {
  if (agItem32 > 0) {
    acc32 = acc32 + agItem32; // урощаем запись
    return acc32; // избавляемя от лишнего return
  }else{ // избавляемя от лишнего else
    return acc32;
  }
}

// Optimization (Оптимизация):
function agFunc92 () {
  if (agItem32 > 0) {
    acc32 += agItem32;
  }

  return acc32;
}

// 10. Сортировка массива
const arrNum10 = [11,2,-93,4,0];

arrNum10.sort((arg101, arg102) => {
  if (arg101 > arg102) return -1;
  if (arg101 === arg102) return 0;
  if (arg101 < arg102) return 1;
});

// Упрощаем:
arrNum10.sort((arg101, arg102) => arg101 - arg102);

// реверс
arrNum10.sort((arg101, arg102) => arg102 - arg101);

// 11.