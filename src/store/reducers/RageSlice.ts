import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchData } from './ActionCreater';
import {
  IValueInfo,
  IJsonRes,
  IListRates,
  profitStatus,
} from '../../models/IJsonRes';

export interface optionsSelect {
  value: string
  label: string
}

interface rageState {
  isLoading: boolean
  error: boolean
  errorMessage: string

  data: {
    optionsSelect: optionsSelect[]
    charCode: string[]
    valuteInfo: IValueInfo[]
    listAllRates: IListRates[]
    sendKey: string
    getKey: string
    sendValue: number
    getValue: number
  }
}

const initialState: rageState = {
  isLoading: false,
  error: false,
  errorMessage: '',

  data: {
    optionsSelect: [],
    charCode: [],
    valuteInfo: [],
    listAllRates: [],
    sendKey: '',
    getKey: '',
    sendValue: 0,
    getValue: 0,
  },
};

export const rageSlice = createSlice({
  name: 'rage',
  initialState,
  reducers: {
    sortAllListRate(state, action: PayloadAction<boolean>) {
      if (action.payload) {
        state.data.listAllRates.sort((val1, val2) => {
          if (val1.Value > val2.Value) return 1;
          else if (val1.Value < val2.Value) return -1;
          else return 0;
        });
      } else {
        state.data.listAllRates.sort((val1, val2) => {
          if (val1.Value > val2.Value) return -1;
          else if (val1.Value < val2.Value) return 1;
          else return 0;
        });
      }
    },
    setError(state, action: PayloadAction<boolean>) {
      state.error = action.payload;
    },
    toSwap(state) {
      const valContainer = state.data.getKey;
      state.data.getKey = state.data.sendKey;
      state.data.sendKey = valContainer;
    },
    setSendKey(state, action: PayloadAction<string>) {
      state.data.sendKey = action.payload;
    },
    setGetKey(state, action: PayloadAction<string>) {
      state.data.getKey = action.payload;
    },
    setSendValue(state, action: PayloadAction<number>) {
      state.data.sendValue = Number(action.payload);
    },
    setGetValue(state) {
      if (
        state.data.sendKey === state.data.getKey &&
        state.data.sendKey !== '' &&
        state.data.getKey !== ''
      ) {
        state.data.getValue = state.data.sendValue;
      } else if (state.data.sendKey !== 'RUB' && state.data.getKey === 'RUB') {
        state.data.getValue = Number(
          (
            state.data.valuteInfo[
              state.data.charCode.indexOf(state.data.sendKey)
            ].Value * state.data.sendValue
          ).toFixed(2),
        );
      } else if (
        state.data.sendKey === '' ||
        state.data.getKey === '' ||
        (state.data.sendKey === '' && state.data.getKey === '')
      ) {
        state.data.getValue = 0;
      } else if (state.data.sendKey === 'RUB') {
        state.data.getValue = Number(
          (
            state.data.valuteInfo[
              state.data.charCode.indexOf(state.data.getKey)
            ].Value * state.data.sendValue
          ).toFixed(2),
        );
      } else {
        state.data.getValue = Number(
          (
            (state.data.sendValue *
              state.data.valuteInfo[
                state.data.charCode.indexOf(state.data.sendKey)
              ].Value) /
            state.data.valuteInfo[
              state.data.charCode.indexOf(state.data.getKey)
            ].Value
          ).toFixed(2),
        );
      }
    },
  },
  extraReducers: {
    [fetchData.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchData.fulfilled.type]: (state, action: PayloadAction<IJsonRes>) => {
      // Success
      state.isLoading = false;
      state.errorMessage = '';
      state.error = false;

      state.data.valuteInfo = [];
      state.data.charCode = [];
      state.data.optionsSelect = [];
      state.data.listAllRates = [];

      state.data.charCode = Object.keys(action.payload.Valute);

      for (const i of state.data.charCode) {
        state.data.optionsSelect.push({ value: i, label: i });
      }

      for (const i of state.data.charCode) {
        state.data.valuteInfo.push(action.payload.Valute[i]);
      }

      for (const i of state.data.valuteInfo) {
        const profitStatus: profitStatus =
          i.Previous > i.Value ? 'down' : i.Previous < i.Value ? 'up' : 'none';
        const profitVal: number =
          i.Previous > i.Value
            ? (i.Previous / i.Value - 1) * 100
            : i.Previous < i.Value
              ? (i.Value / i.Previous - 1) * 100
              : 0;
        state.data.listAllRates.push({ ...i, profitStatus, profitVal });
      }

      state.data.optionsSelect.push({ value: 'RUB', label: 'RUB' });
    },
    [fetchData.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
      state.error = true;
    },
  },
});

export default rageSlice.reducer;
