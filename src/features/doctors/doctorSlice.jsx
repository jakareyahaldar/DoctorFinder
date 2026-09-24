import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "doctors",
  initialState: {
    doctors: [
      {
        _id: "riereirieoreoiroiewio",
        name: "dr. sanjida islam switee",
        slug: "dr-sanjida-islam-switee",
        image: "/doctors/sanjida-huda-sweety.jpg",

        degrees: ["এম বি বি এস", "বি সি এস (স্বাস্থ্য)", "এম ডি (কার্ডিওলজি)"],

        designation: "কনসালটেন্ট কার্ডিওলজিস্ট",

        specialty: {
          name: "Cardiology",
          slug: "cardiology",
          category: "হৃদরোগ বিশেষজ্ঞ",
        },

        expertise: [
          "হৃদরোগ",
          "উচ্চ রক্তচাপ",
          "হার্ট অ্যাটাক",
          "বুকে ব্যথা",
          "হার্ট ফেইলিউর",
        ],

        workplace: {
          name: "শহীদ শেখ আবু নাসের বিশেষায়িত হাসপাতাল",
          city: "খুলনা",
          division: "খুলনা বিভাগ",
        },

        appointment: {
          phone: ["01712345678", "01912345678"],
        },

        chambers: [
          {
            name: "খুলনা মেডিকেল সেন্টার",
            city: "খুলনা",
            address: "১২৩, শের-এ-বাংলা রোড, খুলনা",
          },
          {
            name: "ডক্টরস ডায়াগনস্টিক কমপ্লেক্স",
            city: "খুলনা",
            address: "সোনাডাঙ্গা, খুলনা",
          },
        ],

        conditionsTreated: [
          "করোনারি আর্টারি ডিজিজ",
          "উচ্চ রক্তচাপ",
          "হার্ট অ্যাটাক",
          "হার্ট ফেইলিউর",
          "অ্যারিথমিয়া",
        ],

        fees: {
          newPatient: "৮০০",
          followUp: "৫০০",
          reportReview: "৩০০",
        },

        rating: 5,
      },
      {
        _id: "riereirieoreoirofdfiewio",
        name: "Doctor inamul kabir",
        slug: "doctor-inamul-kabir",
        image: "/doctors/sanjida-huda-sweety.jpg",

        degrees: ["এম বি বি এস", "বি সি এস (স্বাস্থ্য)", "এম ডি (কার্ডিওলজি)"],

        designation: "কনসালটেন্ট কার্ডিওলজিস্ট",

        specialty: {
          name: "AUl Faul",
          slug: "aul-faul",
          category: "হৃদরোগ বিশেষজ্ঞ",
        },

        expertise: [
          "হৃদরোগ",
          "উচ্চ রক্তচাপ",
          "হার্ট অ্যাটাক",
          "বুকে ব্যথা",
          "হার্ট ফেইলিউর",
        ],

        workplace: {
          name: "শহীদ শেখ আবু নাসের বিশেষায়িত হাসপাতাল",
          city: "খুলনা",
          division: "খুলনা বিভাগ",
        },

        appointment: {
          phone: ["01712345678", "01912345678"],
        },

        chambers: [
          {
            name: "খুলনা মেডিকেল সেন্টার",
            city: "খুলনা",
            address: "১২৩, শের-এ-বাংলা রোড, খুলনা",
          },
          {
            name: "ডক্টরস ডায়াগনস্টিক কমপ্লেক্স",
            city: "খুলনা",
            address: "সোনাডাঙ্গা, খুলনা",
          },
        ],

        conditionsTreated: [
          "করোনারি আর্টারি ডিজিজ",
          "উচ্চ রক্তচাপ",
          "হার্ট অ্যাটাক",
          "হার্ট ফেইলিউর",
          "অ্যারিথমিয়া",
        ],

        fees: {
          newPatient: "৮০০",
          followUp: "৫০০",
          reportReview: "৩০০",
        },

        rating: 5,
      },
      {
        _id: "riereirieorfgdgdfeoiroiewio",
        name: "dr. Jakareya Haldar",
        slug: "dr-jakareya-haldar",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZvPEZWcV33_laZlW1p2CnE18lyV_sQhHhxwMoTq95jw&s=10",

        degrees: ["এম বি বি এস", "বি সি এস (স্বাস্থ্য)", "এম ডি (কার্ডিওলজি)"],

        designation: "কনসালটেন্ট কার্ডিওলজিস্ট",

        specialty: {
          name: "Radiology",
          slug: "radiology",
          category: "হৃদরোগ বিশেষজ্ঞ",
        },

        expertise: [
          "হৃদরোগ",
          "উচ্চ রক্তচাপ",
          "হার্ট অ্যাটাক",
          "বুকে ব্যথা",
          "হার্ট ফেইলিউর",
        ],

        workplace: {
          name: "শহীদ শেখ আবু নাসের বিশেষায়িত হাসপাতাল",
          city: "খুলনা",
          division: "খুলনা বিভাগ",
        },

        appointment: {
          phone: ["01712345678", "01912345678"],
        },

        chambers: [
          {
            name: "খুলনা মেডিকেল সেন্টার",
            city: "খুলনা",
            address: "১২৩, শের-এ-বাংলা রোড, খুলনা",
          },
          {
            name: "ডক্টরস ডায়াগনস্টিক কমপ্লেক্স",
            city: "খুলনা",
            address: "সোনাডাঙ্গা, খুলনা",
          },
        ],

        conditionsTreated: [
          "করোনারি আর্টারি ডিজিজ",
          "উচ্চ রক্তচাপ",
          "হার্ট অ্যাটাক",
          "হার্ট ফেইলিউর",
          "অ্যারিথমিয়া",
        ],

        fees: {
          newPatient: "৮০০",
          followUp: "৫০০",
          reportReview: "৩০০",
        },

        rating: 5,
      },
      {
        _id: "riereirieorfgdgdfeoiroiewiosds",
        name: "কনসালটেন্ট কার্ডিওলজিস্ট",
        slug: "কনসালটেন্ট-কার্ডিওলজিস্ট",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZvPEZWcV33_laZlW1p2CnE18lyV_sQhHhxwMoTq95jw&s=10",

        degrees: ["এম বি বি এস", "বি সি এস (স্বাস্থ্য)", "এম ডি (কার্ডিওলজি)"],

        designation: "কনসালটেন্ট কার্ডিওলজিস্ট",

        specialty: {
          name: "কার্ডিওলজিস্ট",
          slug: "কার্ডিওলজিস্ট",
          category: "হৃদরোগ বিশেষজ্ঞ",
        },

        expertise: [
          "হৃদরোগ",
          "উচ্চ রক্তচাপ",
          "হার্ট অ্যাটাক",
          "বুকে ব্যথা",
          "হার্ট ফেইলিউর",
        ],

        workplace: {
          name: "শহীদ শেখ আবু নাসের বিশেষায়িত হাসপাতাল",
          city: "খুলনা",
          division: "খুলনা বিভাগ",
        },

        appointment: {
          phone: ["01712345678", "01912345678"],
        },

        chambers: [
          {
            name: "খুলনা মেডিকেল সেন্টার",
            city: "খুলনা",
            address: "১২৩, শের-এ-বাংলা রোড, খুলনা",
          },
          {
            name: "ডক্টরস ডায়াগনস্টিক কমপ্লেক্স",
            city: "খুলনা",
            address: "সোনাডাঙ্গা, খুলনা",
          },
        ],

        conditionsTreated: [
          "করোনারি আর্টারি ডিজিজ",
          "উচ্চ রক্তচাপ",
          "হার্ট অ্যাটাক",
          "হার্ট ফেইলিউর",
          "অ্যারিথমিয়া",
        ],

        fees: {
          newPatient: "৮০০",
          followUp: "৫০০",
          reportReview: "৩০০",
        },

        rating: 5,
      },
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
    }

  },
});

// Action creators are generated for each case reducer function
export const { add_doctor, delete_doctor } = counterSlice.actions;

export default counterSlice.reducer;
