import { configureStore } from '@reduxjs/toolkit'
import doctors from "../features/doctors/doctorSlice"

export default configureStore({
  reducer: { 
    doctors
   },
})