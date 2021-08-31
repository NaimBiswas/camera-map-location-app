/* eslint-disable prettier/prettier */
import { configureStore } from '@reduxjs/toolkit'
import PlaceSlicer from './Slicer/PlaceSlicer'

export default configureStore({
   reducer: {
      place: PlaceSlicer,
   }
})