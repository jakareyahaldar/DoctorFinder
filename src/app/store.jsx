import { configureStore } from '@reduxjs/toolkit'
import doctors from "../features/doctors/doctorSlice"
import authVerifyer from "../features/auth_verifyer/auth_verifySlice"

export default configureStore({
  reducer: { 
    doctors,
    authVerifyer
   },
})