/* eslint-disable prettier/prettier */
import { createSlice } from '@reduxjs/toolkit';

const placeSlice = createSlice({
   name: 'place',
   initialState: {
      place: [],
   },
   reducers: {
      setPlace: (state, action) => {
         const id = action.payload.id;
         const title = action.payload.title;
         state.place.push({ 'id': id, 'title': title });
      },
   },
});

export const { setPlace } = placeSlice.actions;

export default placeSlice.reducer;


