export interface IValueInfo {
    ID: string
    NumCode: string
    CharCode: string
    Nominal: number
    Name: string
    Value: number
    Previous: number
}

export type profitStatus = 'up' | 'down' | 'none'

export interface IListRates {
    ID: string
    NumCode: string
    CharCode: string
    Nominal: number
    Name: string
    Value: number
    Previous: number
    profitStatus: profitStatus
    profitVal: number
}

export interface IJsonRes {
    Data: string
    PreviousDate: string
    PreviousURL: string
    Timestamp: string
    Valute: {
        [index: string]: IValueInfo
    }
}
