// test_parce_json.js
var json = {
    Date: '2022-11-10T11:30:00+03:00',
    PreviusDate: '2022-11-09T11:30:00+03:00',
    Valute: {
        AUD: {
            ID: 'RO1010',
            NumCode: '036',
            CharCode: 'AUD',
            Nominal: 1,
            Name: 'Австрлийский доллар',
            Value: 39.6897,
            Previus: 39.4158
        },
        AZN: {
            ID: 'RO1020A',
            NumCode: '944',
            CharCode: 'AZD',
            Nominal: 1,
            Name: 'Азербайджанский манат',
            Value: 35.9183,
            Previus: 35.8691
        },
        GBP: {
            ID: 'RO1035',
            NumCode: '826',
            CharCode: 'GPB',
            Nominal: 1,
            Name: 'Фунт стерлинг Соединенного королевство',
            Value: 70.61111,
            Previus: 69.9167
        }
    }
};
var convert = function (SendValValute, SendCharCod_1, GetCharCod_2) {
    if (SendCharCod_1 === 'RUB') {
        return (arrayValuteInfo[arrayCharCode.indexOf(GetCharCod_2)]['Value'] *
            SendValValute);
    }
    else {
        return ((SendValValute *
            arrayValuteInfo[arrayCharCode.indexOf(SendCharCod_1)]['Value']) /
            arrayValuteInfo[arrayCharCode.indexOf(GetCharCod_2)]['Value']);
    }
};
var arrayCharCode = Object.keys(json['Valute']); // Возвращает имена объектов валют
var arrayValuteInfo = []; // хранит объекты описывающие каждую валюту
for (var _i = 0, arrayCharCode_1 = arrayCharCode; _i < arrayCharCode_1.length; _i++) {
    var i = arrayCharCode_1[_i];
    arrayValuteInfo.push(json['Valute'][i]);
}
var arrayAllValuteInfoView = arrayValuteInfo.map(function (val) { return "\u041A\u043E\u0434: ".concat(val['CharCode'], " \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435: ").concat(val['Name'], " \u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435: ").concat(val['Previus'], " ").concat(['Previus'] > val['Value'] ? 'Down' : val['Previus'] < val['Value'] ? 'Up' : 'None', " ").concat(val['Value']); });
var SendCharCod_1 = arrayCharCode[0];
var GetCharCod_2 = arrayCharCode[1];
var SendValValute = 1012;
var GetValValute = convert(SendValValute, SendCharCod_1, GetCharCod_2);
console.log("Send: ".concat(SendValValute, " (").concat(SendCharCod_1, ") to Get: ").concat(GetValValute.toFixed(2), " (").concat(GetCharCod_2, ")"));
for (var i = 0; i < arrayAllValuteInfoView.length; i++) {
    console.log(arrayAllValuteInfoView[i]);
}
