import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const API = import.meta.env.VITE_SERVER_URI


export const fetchDoctors = createAsyncThunk(
  'doctros/fetchDoctors',
  async () => {
    try{
      const r = await fetch(API+"/doctor")
      const data = await r.json()
      return data.doctors
    }catch(err){
      console.log(err)
      return []
    }
  },
)


export const counterSlice = createSlice({
  name: "doctors",
  initialState: {
    doctors: [
      // {
      //   _id: "riereirieoreoiroiewio",
      //   name: "dr. sanjida islam switee",
      //   slug: "dr-sanjida-islam-switee",
      //   image: "/doctors/sanjida-huda-sweety.jpg",

      //   degrees: ["এম বি বি এস", "বি সি এস (স্বাস্থ্য)", "এম ডি (কার্ডিওলজি)"],

      //   designation: "কনসালটেন্ট কার্ডিওলজিস্ট",

      //   specialty: {
      //     name: "Cardiology",
      //     slug: "cardiology",
      //     category: "হৃদরোগ বিশেষজ্ঞ",
      //   },

      //   expertise: [
      //     "হৃদরোগ",
      //     "উচ্চ রক্তচাপ",
      //     "হার্ট অ্যাটাক",
      //     "বুকে ব্যথা",
      //     "হার্ট ফেইলিউর",
      //   ],

      //   workplace: {
      //     name: "শহীদ শেখ আবু নাসের বিশেষায়িত হাসপাতাল",
      //     city: "খুলনা",
      //     division: "খুলনা বিভাগ",
      //   },

      //   appointment: {
      //     phone: ["01712345678", "01912345678"],
      //   },

      //   chambers: [
      //     {
      //       name: "খুলনা মেডিকেল সেন্টার",
      //       city: "খুলনা",
      //       address: "১২৩, শের-এ-বাংলা রোড, খুলনা",
      //     },
      //     {
      //       name: "ডক্টরস ডায়াগনস্টিক কমপ্লেক্স",
      //       city: "খুলনা",
      //       address: "সোনাডাঙ্গা, খুলনা",
      //     },
      //   ],

      //   conditionsTreated: [
      //     "করোনারি আর্টারি ডিজিজ",
      //     "উচ্চ রক্তচাপ",
      //     "হার্ট অ্যাটাক",
      //     "হার্ট ফেইলিউর",
      //     "অ্যারিথমিয়া",
      //   ],

      //   fees: {
      //     newPatient: "৮০০",
      //     followUp: "৫০০",
      //     reportReview: "৩০০",
      //   },

      //   rating: 5,
      // }
    ],
    isLoading: false,
    isError: false,
    error: null,
  },
  reducers: {
    add_doctor: (state,action)=>{
        if(!action.payload) return
        state.doctors = [ action.payload, ...state.doctors]
    },
    delete_doctor: (state,action)=>{
        const _id = action.payload
        if(!_id) return
        try{
            state.doctors = state.doctors.filter( e => e._id !== _id )
        }catch(err){
            console.log(err)
        }
    },
    edit_doctor: (state,action)=>{
      try{
        const id = action.payload._id
        const index = state.doctors.findIndex( e => e._id === id )
        const doctors = [...state.doctors]
        doctors.splice(index,1,action.payload)
        state.doctors = doctors
      }catch(err){
        console.log(err)
        throw new Error("edit faild.")
      }
    }

  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchDoctors.fulfilled, (state, action) => {
      // Add user to the state array
      state.doctors = action.payload
    })
  },
});

// Action creators are generated for each case reducer function
export const { add_doctor, delete_doctor, edit_doctor } = counterSlice.actions;

export default counterSlice.reducer;
