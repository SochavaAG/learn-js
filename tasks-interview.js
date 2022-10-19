// 1. Task (Задача):
// https://youtu.be/Wbg1Iyx1cNQ?t=540
// Есть матрица:
const agMatrix = [
  [1,4,8,9],
  [6,2,11,1],
  [8,0,3,-5],
  [-2,10,8,1]
]
/*
 Вывести на экран числа, находящиеся под главной диагональю матрицы (6, 8, 0, -2, 10, 8)
 */

// Result (Результат) #1:
// цикл for
//console.log(agMatrix);

for(let i1 = 1; i1 < agMatrix.length; i1++) {
  for(let j1 = 0; j1 < i1; j1++) {
    console.log(agMatrix[i1][j1]); // 6, 8, 0, -2, 10, 8
  }
}

// Result (Результат) #2:
//цикл forEach
agMatrix.forEach(function(agRow, outerIndex) {
  agRow.forEach(function(agNum, innerIndex) {
    if(innerIndex < outerIndex) {
      console.log(agNum); // 6, 8, 0, -2, 10, 8
    }

    return;
  });
});
//-------------------------------------------------------------------------

// 2. Task (Задача):
// https://youtu.be/Wbg1Iyx1cNQ?t=1148
// Развернуть одномерный массив без создания дополнительного массива

const agArr2 = [4,5,-99,0,-7];

// Result (Результат) #1:
// цикл for
for (let i2 = agArr2.length - 1; i2 >= 0; i2--) {
  agArr2.push(agArr2[i2]);

  //console.log(agArr2); // [4,5,-99,0,-7,-7,0,-99,5,4]
}

agArr2.splice(0, agArr2.length / 2 );

console.log(agArr2); // [-7,0,-99,5,4]
//-------------------------------------------------------------------------

// 3. Task (Задача):
// https://youtu.be/KqbnxtLOeZk?t=431
// Найти сумму элементов массива у которых значение больше нуля
const arrExample3 = [-4,-5,7,-6, 2];

const newSum3 = arrExample3.reduce((acc3, agItem3) => {
    if (agItem3 > 0) {
  acc3 += agItem3;
}

return acc3;
}, 0); // Нужно стартовое значение аккумулятора acc3 прировнять к нулю, чтоб если первое значение массива, которое сразу кладется в аккумулятор acc3 не попало в рассчет суммы

console.log(newSum3); // 9
//-------------------------------------------------------------------------

// 4. Task (Задача):
// https://youtu.be/KqbnxtLOeZk?t=685
// Найти максимальное значение элементов массива
const arrExample4 = [-4,-5,7,-6, 2];

const newSum4 = arrExample4.reduce((acc4, agItem4) => {
    if (agItem4 > acc4) {
  acc4 = agItem4;
}

return acc4;
});

console.log(newSum4); // 7
//-------------------------------------------------------------------------

// 5. Task (Задача):
// https://youtu.be/KqbnxtLOeZk?t=785
// Приходит массив с объектом. Нужно создать новый массив только с id, а второй массив только с городами

const arrExample5 = [
  {'id': 12, 'city': 'London'},
  {'id': 25, 'city': 'Berlin'},
  {'id': 47, 'city': 'Pekin'},
];

const arrIDs5 = arrExample5.reduce((acc5, agItem5) => {
    acc5.push(agItem5.id);

return acc5;
}, []);

console.log(arrIDs5); // [12,25,47]

const arrCities5 = arrExample5.reduce((acc5, agItem5) => {
    acc5.push(agItem5.city);

return acc5;
}, []);

console.log(arrCities5); // ['London','Berlin','Pekin']