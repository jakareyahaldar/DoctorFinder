import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const API = import.meta.env.VITE_SERVER_URI





export const verifyToken = createAsyncThunk(
  'auth_verifyer/verifyToken',
  async (admin_token) => {
    try{
      const r = await fetch(API+"/auth/token-verify",{credentials: "include",headers: { admin_token }})
      const data = await r.json()
      return data.verified
    }catch(err){
      console.log(err)
      return false
    }
  },
)


export const counterSlice = createSlice({
  name: "auth_verifyer",
  initialState: {
    verified: false,
    tryed: false,
    isLoading: false,
    isError: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(verifyToken.fulfilled, (state, action) => {
      // Add user to the state array
      state.verified = action.payload
      state.tryed = true
    })
  },
});

// Action creators are generated for each case reducer function
export const {  } = counterSlice.actions;

export default counterSlice.reducer;
