/* eslint-disable prettier/prettier */
import { createSlice, } from '@reduxjs/toolkit';

const placeSlice = createSlice({
   name: 'place',
   initialState: {
      title: '',
      image: '',
      time: ''
   },
   reducers: {
      setPlace: (state, action) => {
         state.title = action.payload
      },
   },
});

export const { setPlace } = placeSlice.actions;

export default placeSlice.reducer


