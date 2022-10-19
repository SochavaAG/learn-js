// https://youtu.be/3naT39judvQ

/* Site for test event loop
 http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
 */

/*
 https://youtu.be/kZFLHCz2a30
*/

// 1.1 Работа кода и стек вызова
const num1 = 1;

function agMultiply(arg1, arg2) {
  return arg1 * arg2;
}

function agMultiAndSum(argF1, argF2, argF3) {
  const agMulti = agMultiply(argF1, argF2);
  return agMulti + argF3;
}

agMultiAndSum();

// Call stack
// Порядок вызова:
// 1) agMultiAndSum(); строка 13
// 2) agMultiply(); строка 9
//-------------------------------------------------------------------------

// 1.2 Синхронный вызов
console.log(1);
console.log(2);
console.log(3);

// Call stack
// Порядок вызова:
// 1
// 2
// 3
//-------------------------------------------------------------------------

// 1.3 Функция, которая рекурсивно бесконечная
// Рекурсия - переполнение stack
/*
 function agInfinity() {
 return agInfinity();
 }

 agInfinity();
 */
// InternalError: too much recursion
//-------------------------------------------------------------------------

// 1.4 Функции, которые блокируют выполнение кода alert(), prompt(), confirm()
console.log(1);
//alert('stop code');
console.log(2);
//-------------------------------------------------------------------------

// 1.5 Асинхронный код setTimeout() в 0 ms
console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

console.log(3);

// Call stack
// Порядок вызова:
// 1
// 3
// 2
//-------------------------------------------------------------------------

// 1.6 Асинхронный код setTimeout() в 0 ms в которой еще setTimeout()
setTimeout(() => {
  console.log(1);
  console.log(2);
  console.log(3);

  setTimeout(() => {
    console.log('inner');
  }, 0);

  console.log(4);
  console.log(5);
  console.log(6);

}, 0);

// Call stack
// Порядок вызова:
// 1
// 3
// 2
// 4
// 5
// 6
// "inner"
//-------------------------------------------------------------------------

// 1.7 Асинхронный код Promise()
console.log('A');

const agPromise = new Promise((resolve, reject) => {
    console.log('B');

setTimeout(() => {
  console.log('E');
}, 0);

console.log('C');

}).then((agValue) => {
  console.log(agValue);
});

console.log('D');

// Call stack
// Порядок вызова:
// "A"
// "B"
// "C"
// "D"
// "E"
//-------------------------------------------------------------------------

// 1.8 Callbacks
// Сохраняется в web APIs

/* index.html
 <button class="agBtn">Click</button>
*/

console.log('A');

document.querySelector('button').addEventListener('click', (() => {
    console.log('Button was clicked');
}));

console.log('B');

// Call stack
// Порядок вызова:
// "A"
// "B"

// web APIs
// "Button was clicked"
//-------------------------------------------------------------------------

// 1.9 Callbacks на постоянные события могут забить очередь
window.addEventListener('scroll', ((event) => {
    console.log('Scrolling');
}));

// Scroll – много событий

const agArr91 = [1,2,3,4,5];

console.log('A');

agArr91.forEach((el) => console.log(el));

console.log('B');

// Call stack
// Порядок вызова:
// "A"
// 1
// 2
// 3
// 4
// 5
// "B"

const agArr92 = [1,2,3,4,5];

console.log('A');

agArr92.forEach((el) => setTimeout(console.log, 0, el));

console.log('B');

// Call stack
// Порядок вызова:
// "A"
// "B"
// 1
// 2
// 3
// 4
// 5
//-------------------------------------------------------------------------

// 1.10 Циклы работают синхронно
console.log('A');

for(let i10 = 0; i10 < 5; i10++) {
  console.log(i10);
}

// while(true) {} // можно заблокировать цикл, если он бесконечный

console.log('B');

// Call stack
// Порядок вызова:
// "A"
// 1
// 2
// 3
// 4
// 5
// "B"
//-------------------------------------------------------------------------

// 1.11 Циклы с асинхронным выполнением
for(var i111 = 0; i111 < 5; i111++) {
  setTimeout(() => console.log(i111), 0);
}
// Call stack
// Порядок вызова:
// 5
// 5
// 5
// 5
// 5

// Решение: Вместо var нужно let
for(let i112 = 0; i112 < 5; i112++) {
  // область видимости let в рамках блока {}
  // для каждой итерации создается одна переменная i112
  setTimeout(() => console.log(i112), 0);
}
// Call stack
// Порядок вызова:
// 0
// 1
// 2
// 3
// 4
//-------------------------------------------------------------------------

// 1.12 Пока Stack занятб рендер страницы блокируется
// Все возможные клики перестают отрабатывать
// render queue
// callback queue
//-------------------------------------------------------------------------


//https://youtu.be/kZFLHCz2a30

// 2.1 JavaScript однопоточный язык программирования
const gar1 = () => console.log('gar1');

const baz1 = () => console.log('baz1');

const foo1 = () => {
  console.log('foo1');
  
  gar1();
  
  baz1();
}

foo1();

// Call stack
// Порядок вызова:
// "foo1"
// "gar1"
// "baz1"
//-------------------------------------------------------------------------

// 2.2 Как работает с функцией setTimeout()
// setTimeout() браузерная функция и она кладется в очередь Web APIs
// Web APIs выполнится после всех вызовов в очереди, как только очистится Call stack

const gar2 = () => console.log('gar2');

const baz2 = () => console.log('baz2');

const foo2 = () => {
  console.log('foo2');

  setTimeout(gar2, 0);

  baz2();
}

foo2();

// Call stack
// Порядок вызова:
// "foo1"
// "baz1"
// "gar1"
//-------------------------------------------------------------------------

// 2.3 Microtasks queue – в ES6 ввели для быстрого выполнения кода в нем используются встроенные классы такие как Promise().
// Пока не выполнится все в Microtasks queue, то не закончится кгруг Event loop
// Таким образом есть вероятность завалить сайт, если сделать слишком много в Microtasks,
// так как Event loop будет ждать исполнения всего из Microtasks queue
const gar3 = () => console.log('gar3');

const baz3 = () => console.log('baz3');

const foo3 = () => {
  console.log('foo3');

  setTimeout(gar3, 0);

  new Promise((resolve, reject) => {
    console.log('Promise Start');

    resolve('should be right after baz3, before gar3');
  })
  .then(resolve => {
    console.log(resolve);

    return 'Data test';
  })
  .then(data => console.log(data));

  baz3();
}

foo3();

// Call stack
// Порядок вызова:
// "foo3"
// "Promise Start"
// "baz3"
// "should be right after baz, before bar"
// "Data test"
// "gar3"
//-------------------------------------------------------------------------

// 2.4 Как работает с функцией nextTick() в NodeJS
const baz4 = () => console.log('baz4');

const foo4 = () => {
  console.log('foo4');

  process.nextTick(foo42);
}

const foo42 = () => console.log('foo4-2');

const zoo4 = () => console.log('zoo4');

const start = () => {
  console.log('start');

  setTimeout(baz4, 0);

  new Promise((resolve, reject) => {
    resolve('bar4')
  })
  .then(resolve => {
    console.log(resolve);

    process.nextTick(zoo4);
  });

  process.nextTick(foo4);
};

start();

// Call stack
// Порядок вызова:
// "start"
// "foo4"
// "foo4-2"
// "bar4"
// "zoo4"
// "baz4"
//-------------------------------------------------------------------------

// 2.5 setImmediate() эта функция практически тоже самое, что и функция setTimeout(() => {}, 0), но
// в таком callback setImmediate() будет вызвана всегда первой

setTimeout(() => {
  console.log('timeout #2');
}, 0);

setImmediate(() => {
  console.log('timeout #1');
});

// Call stack
// Порядок вызова:
// Будет вызываться рандомно

// запуск №1
// "timeout #1"
// "timeout #2"

// запуск №2
// "timeout #1"
// "timeout #2"

// запуск №3
// "timeout #2"
// "timeout #1"

// запуск №4
// "timeout #1"
// "timeout #2"

// запуск №5
// "timeout #2"
// "timeout #1"


// то в таком callback setImmediate() будет вызвана всегда первой
const fs = require('fs');

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('timeout #2');
  }, 0);
  setImmediate(() => {
    console.log('timeout #1');
  });
});

// Call stack
// Порядок вызова:
// setImmediate() будет вызвана всегда первой
// запуск №1
// "timeout #1"
// "timeout #2"

// запуск №2
// "timeout #1"
// "timeout #2"

// запуск №3
// "timeout #1"
// "timeout #2"

// запуск №4
// "timeout #1"
// "timeout #2"

// запуск №5
// "timeout #1"
// "timeout #2"