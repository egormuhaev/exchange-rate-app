import axios from 'axios';
import { IJsonRes } from '../../models/IJsonRes';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { config } from '../../config/config';

export const fetchData = createAsyncThunk(
  'data/fetchAll',
  async (_, thuncAPI) => {
    try {
      const response = await axios.get<IJsonRes>(config.BASE_API_PATH);
      return response.data;
    } catch (e: any) {
      return thuncAPI.rejectWithValue(e.message);
    }
  },
);
