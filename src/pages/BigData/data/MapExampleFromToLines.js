const Jiangxi2Xinyu = [
  {to: '新余', from: '南昌',  value: 90},
  {to: '新余', from: '萍乡',  value: 20},
  {to: '新余', from: '宜春',  value: 70},
  {to: '新余', from: '上饶',  value: 50},
  {to: '新余', from: '九江',  value: 40},
  {to: '新余', from: '鹰潭',  value: 43},
  {to: '新余', from: '抚州',  value: 10}
];
const Jiangxi2Yingtan = [
  {to: '鹰潭', from: '南昌',   value: 50},
  {to: '鹰潭', from: '赣州',   value: 90},
  {to: '鹰潭', from: '萍乡',   value: 80},
  {to: '鹰潭', from: '宜春',   value: 70},
  {to: '鹰潭', from: '吉安',   value: 60},
  {to: '鹰潭', from: '上饶',   value: 35},
  {to: '鹰潭', from: '抚州',   value: 10},
  {to: '鹰潭', from: '井冈山', value: 20}
];

const fromNanchang = [
  {from: '南昌', to: '包头', value:60},
  {from: '南昌', to: '广州', value:30},
  {from: '南昌', to: '长春', value:50},
  {from: '南昌', to: '重庆', value:70},
  {from: '南昌', to: '北京', value:88}
];
const fromShanghai = [
  {from: '上海', to: '包头', value:106},
  {from: '上海', to: '昆明', value:10},
  {from: '上海', to: '广州', value:80},
  {from: '上海', to: '重庆', value:50},
  {from: '上海', to: '北京', value:88}
];
const fromBeijing = [
  {from: '北京', to: '昆明', value:10},
  {from: '北京', to: '广州', value:60},
  {from: '北京', to: '重庆', value:50}
];

const FromToLinesDataArray = [
  { // id: 0
    fromtoLines: [
      { legendName: '前往新余', color: '#a6c84c', data: Jiangxi2Xinyu   },
      { legendName: '前往鹰潭', color: '#ffa022', data: Jiangxi2Yingtan }
    ],
    geoMapName: "江西",
    map: "jiangxi",
    directionOut: false,
    iconPath: null,
  },
  { // id: 1
    fromtoLines: [
      { legendName: '南昌出发', color: '#a6c84c', data: fromNanchang },
      { legendName: '北京出发', color: '#ffa022', data: fromBeijing  },
      { legendName: '上海出发', color: '#46bee9', data: fromShanghai }
    ],
    geoMapName: "china",
    map: "china",
    directionOut: true,
    iconPath: 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z'
  }
];

const map = FromToLinesDataArray.map((item)=>{ return item.map });

module.exports = { FromToLinesDataArray, map };
