// Data:
// https://ru.stackoverflow.com/questions/1387103/%D0%A7%D1%82%D0%BE-%D0%BE%D0%B7%D0%BD%D0%B0%D1%87%D0%B0%D0%B5%D1%82-%D0%BD%D0%B8%D0%B6%D0%BD%D0%B5%D0%B5-%D0%BF%D0%BE%D0%B4%D1%87%D0%B5%D1%80%D0%BA%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-%D0%BA%D0%BE%D0%BD%D1%86%D0%B5-reduce

// Answer (Ответ):
// https://youtu.be/YTPZR_HWElc

// Создать новый многомерный массив из двух массивов agData, agKeys
// Вложенность объекта в новом массиве будет согласно ключам из массива agKeys.
// Если встречается одинаковое значение, то сгруппировать объекты
const agData = [
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

  agKeys = ['continent', 'country', 'subdivision', 'city'],

  agResult = agData.reduce(function (agAcc, agItem) {


    agKeys.reduce(function (agAcc, agEl) {
      const label = agItem[agEl];

      if (!agAcc[label]) {
        agAcc.agKey.push({label, children: (agAcc[label] = { agKey: [] }).agKey });
      }

      return agAcc[label];
    }, agAcc);

    return agAcc;
  }, { agKey: [] }).agKey;


console.log(agResult);
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