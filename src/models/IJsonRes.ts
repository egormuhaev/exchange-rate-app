export interface IValueInfo {
    "ID": string
    "NumCode": string
    "CharCode": string
    "Nominal": number
    "Name": string
    "Value": number
    "Previus": number
}

export interface IJsonRes {
    "Data": string
    "PreviousDate": string
    "PreviousURL": string
    "Timestamp": string
    "Valute": {
        [index: string]: IValueInfo
    }
}

