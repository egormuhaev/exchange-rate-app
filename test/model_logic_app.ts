// test_parce_json.js

var json: object = {
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
            Previus: 39.4158,
        },
        AZN: {
            ID: 'RO1020A',
            NumCode: '944',
            CharCode: 'AZD',
            Nominal: 1,
            Name: 'Азербайджанский манат',
            Value: 35.9183,
            Previus: 35.8691,
        },
        GBP: {
            ID: 'RO1035',
            NumCode: '826',
            CharCode: 'GPB',
            Nominal: 1,
            Name: 'Фунт стерлинг Соединенного королевство',
            Value: 70.61111,
            Previus: 69.9167,
        },
    },
}

var convert = (
    SendValValute: number ,
    SendCharCod_1: string,
    GetCharCod_2: string
): number => {
    if (SendCharCod_1 === 'RUB') {
        return (
            arrayValuteInfo[arrayCharCode.indexOf(GetCharCod_2)]['Value'] *
            SendValValute
        )
    } else {
        return (
            (SendValValute *
                arrayValuteInfo[arrayCharCode.indexOf(SendCharCod_1)][
                    'Value'
                ]) /
            arrayValuteInfo[arrayCharCode.indexOf(GetCharCod_2)]['Value']
        )
    }
}


var arrayCharCode: string[] = Object.keys(json['Valute']) // Возвращает имена объектов валют
var arrayValuteInfo: object[] = [] // хранит объекты описывающие каждую валюту


for (let i of arrayCharCode) {
    arrayValuteInfo.push(json['Valute'][i])
}

var arrayAllValuteInfoView: string[] = arrayValuteInfo.map(
    (val) =>`Код: ${val['CharCode']} Название: ${val['Name']} Изменение: ${val['Previus']} ${['Previus'] > val['Value']? 'Down': val['Previus'] < val['Value']? 'Up': 'None'} ${val['Value']}`
)

var SendCharCod_1 = arrayCharCode[0]
var GetCharCod_2 = arrayCharCode[1]

var SendValValute: number = 1012
var GetValValute: number = convert(SendValValute, SendCharCod_1, GetCharCod_2)

console.log(
    `Send: ${SendValValute} (${SendCharCod_1}) to Get: ${GetValValute.toFixed(2)} (${GetCharCod_2})`
)

for (let i = 0; i < arrayAllValuteInfoView.length; i++) {
    console.log(arrayAllValuteInfoView[i])
}




