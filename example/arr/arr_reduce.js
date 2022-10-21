// Data:
// https://ru.stackoverflow.com/questions/1387103/%D0%A7%D1%82%D0%BE-%D0%BE%D0%B7%D0%BD%D0%B0%D1%87%D0%B0%D0%B5%D1%82-%D0%BD%D0%B8%D0%B6%D0%BD%D0%B5%D0%B5-%D0%BF%D0%BE%D0%B4%D1%87%D0%B5%D1%80%D0%BA%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-%D0%BA%D0%BE%D0%BD%D1%86%D0%B5-reduce

// Answer (Ответ):
// https://youtu.be/YTPZR_HWElc

// ########################################################################
// Task 1:
const agNumArr1 = [1, 2, 3, 4, 5];

const agResult1 = agNumArr1.reduce((agAcc1, agItem1) => (agAcc1._ += agItem1, agAcc1), { _: 5 })._;

/*
const agResult = agNumArr1.reduce((agAcc1, agItem1) => {
  agAcc1._ += agItem1;
  
  return agAcc1;
}, {_: 5})._;
*/

console.log(agResult1); // 20
// ########################################################################

// ########################################################################
// Task 2:
// Создать новый многомерный массив из двух массивов agData2, agKeys2
// Вложенность объекта в новом массиве будет согласно ключам из массива agKeys2.
// Если встречается одинаковое значение, то сгруппировать объект
const agData2 = [
  {
    continent: 'Asia',
    country: 'Iran',
    subdivision: 'Chaharmahal and Bakhtiari Province',
    city: 'Lir Abi'
  },
  {
    continent: 'Europe',
    country: 'Cyprus',
    subdivision: 'Ammochostos',
    city: 'Protaras'
  },
  {
    continent: 'Asia',
    country: 'Iran',
    subdivision: 'West Azerbaijan Province',
    city: 'Post'
  },
  {
    continent: 'Africa',
    country: 'Somalia',
    subdivision: 'Bakool',
    city: 'Oddur'
  },
  {
    continent: 'Asia',
    country: 'China',
    subdivision: 'West China',
    city: 'Pekin'
  }
],

  agKeys2 = ['continent', 'country', 'subdivision', 'city'],

  /* Old Code
  agResult2 = agData2.reduce((agAcc2, agItem2) => {

    agKeys2.reduce(function (previousVal2, agEl2) {
      const label = agItem2[agEl2];

      if (!previousVal2[label]) previousVal2._.push({label, children: (previousVal2[label] = {_: [] })._});

      return previousVal2[label];
    }, agAcc2);



    return agAcc2;
  }, {_: []})._;
  */

  // New code
  agResult2 = agData2.reduce(function (agAcc2, agItem2) {


    agKeys2.reduce(function (previousVal2, agEl2) {
      const label = agItem2[agEl2];

      if (!previousVal2[label]) { // Если в объекте нет ключа 'label', то записываем в объект {agKey2: []}
        previousVal2.agKey2.push({label, children: (previousVal2[label] = { agKey2: [] }).agKey2 });
      }

      return previousVal2[label];
    }, agAcc2);



    return agAcc2;
  }, { agKey2: [] }).agKey2;


console.log(agResult2);
/*
[
  {
    "label": "Asia",
    "children": [
      {
        "label": "Iran",
        "children": [
          {
            "label": "Chaharmahal and Bakhtiari Province",
            "children": [
              {
                "label": "Lir Abi",
                "children": []
              }
            ]
          },
          {
            "label": "West Azerbaijan Province",
            "children": [
              {
                "label": "Post",
                "children": []
              }
            ]
          }
        ]
      },
      {
        "label": "China",
        "children": [
          {
            "label": "West China",
            "children": [
              {
                "label": "Pekin",
                "children": []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "label": "Europe",
    "children": [
      {
        "label": "Cyprus",
        "children": [
          {
            "label": "Ammochostos",
            "children": [
              {
                "label": "Protaras",
                "children": []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "label": "Africa",
    "children": [
      {
        "label": "Somalia",
        "children": [
          {
            "label": "Bakool",
            "children": [
              {
                "label": "Oddur",
                "children": []
              }
            ]
          }
        ]
      }
    ]
  }
]
*/
// ########################################################################

// ########################################################################
// Task 3:
// 
const agObj3 = {agKey: []};

const agArr3 = ['level-1', 'level-2', 'level-3'];

agArr3.reduce(function (agVal3, agEl3) {
  const label = agEl3;

  if (!agVal3[label]) {
    agVal3.agKey.push({label, children: (agVal3[label] = { agKey: [] }).agKey });
  }

  return agVal3[label];
}, agObj3);

console.log(JSON.stringify(agObj3, null, 2));
/*
{
  "agKey": [
    {
      "label": "level-1",
      "children": [
        {
          "label": "level-2",
          "children": [
            {
              "label": "level-3",
              "children": []
            }
          ]
        }
      ]
    }
  ],
  "level-1": {
    "agKey": [
      {
        "label": "level-2",
        "children": [
          {
            "label": "level-3",
            "children": []
          }
        ]
      }
    ],
    "level-2": {
      "agKey": [
        {
          "label": "level-3",
          "children": []
        }
      ],
      "level-3": {
        "agKey": []
      }
    }
  }
}
*/
// ########################################################################