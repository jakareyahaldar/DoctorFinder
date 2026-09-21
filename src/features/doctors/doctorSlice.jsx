import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'doctors',
    initialState: {
        doctors: [
            {
                _id: "riereirieoreoiroiewio",
                name: "ডাঃ সানজিদা হুদা সুইটি",
                image: "/doctors/sanjida-huda-sweety.jpg",

                degrees: [
                    "এম বি বি এস",
                    "বি সি এস (স্বাস্থ্য)",
                    "এম ডি (কার্ডিওলজি)",
                ],

                designation: "কনসালটেন্ট কার্ডিওলজিস্ট",

                specialty: {
                    name: "Cardiology",
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
                name: "ডাঃ সানজিদা হুদা সুইটি",
                image: "/doctors/sanjida-huda-sweety.jpg",

                degrees: [
                    "এম বি বি এস",
                    "বি সি এস (স্বাস্থ্য)",
                    "এম ডি (কার্ডিওলজি)",
                ],

                designation: "কনসালটেন্ট কার্ডিওলজিস্ট",

                specialty: {
                    name: "Cardiology",
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
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZvPEZWcV33_laZlW1p2CnE18lyV_sQhHhxwMoTq95jw&s=10",

                degrees: [
                    "এম বি বি এস",
                    "বি সি এস (স্বাস্থ্য)",
                    "এম ডি (কার্ডিওলজি)",
                ],

                designation: "কনসালটেন্ট কার্ডিওলজিস্ট",

                specialty: {
                    name: "Radiology",
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
        error: null
    },
    reducers: {

    },
})

// Action creators are generated for each case reducer function
export const { } = counterSlice.actions

export default counterSlice.reducer