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
         const image = action.payload.image;
         state.place.push({ "id": id, "title": title, "image": image });
      },
   },
});

export const { setPlace } = placeSlice.actions;

export default placeSlice.reducer;


