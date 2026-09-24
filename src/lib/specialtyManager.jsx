import {
  faStethoscope,
  faHeartPulse,
  faBrain,
  faBone,
  faBaby,
  faSyringe,
  faEye,
  faTooth,
  faLungs,
  faDroplet,
  faVenus,
  faPersonPregnant,
  faEarListen,
  faXRay,
  faRibbon,
  faVirus,
  faCapsules,
  faScissors,
  faUserDoctor,
  faPersonWalking,
  faHandDots,
} from "@fortawesome/free-solid-svg-icons";


// const specialty_icons = {
//   medicine: faStethoscope,
//   cardiology: faHeartPulse,
//   neurology: faBrain,
//   orthopedics: faBone,
//   pediatrics: faBaby,
//   dermatology: faSyringe,
//   ophthalmology: faEye,
//   dentistry: faTooth,
//   pulmonology: faLungs,
//   endocrinology: faDroplet,
//   gynecology: faVenus,
//   obstetrics: faPersonPregnant,
//   ent: faEarListen,
//   radiology: faXRay,
//   oncology: faRibbon,
//   infectious_disease: faVirus,
//   psychiatry: faCapsules,
//   general_surgery: faScissors,
//   urology: faUserDoctor,
//   psychology: faBrain,
//   physical_medicine_and_rehabilitation: faPersonWalking,
//   rheumatology: faHandDots,
// };
const specialty_icons = {
  medicine: {
    name: "মেডিসিন",
    icon: faStethoscope,
  },

  cardiology: {
    name: "হৃদরোগ বিশেষজ্ঞ",
    icon: faHeartPulse,
  },

  neurology: {
    name: "নিউরোলজি",
    icon: faBrain,
  },

  orthopedics: {
    name: "অর্থোপেডিক্স",
    icon: faBone,
  },

  pediatrics: {
    name: "শিশু রোগ বিশেষজ্ঞ",
    icon: faBaby,
  },

  dermatology: {
    name: "চর্ম ও যৌন রোগ বিশেষজ্ঞ",
    icon: faSyringe,
  },

  ophthalmology: {
    name: "চক্ষু রোগ বিশেষজ্ঞ",
    icon: faEye,
  },

  dentistry: {
    name: "দন্ত ও মুখ রোগ বিশেষজ্ঞ",
    icon: faTooth,
  },

  pulmonology: {
    name: "বক্ষব্যাধি ও শ্বাসতন্ত্র বিশেষজ্ঞ",
    icon: faLungs,
  },

  endocrinology: {
    name: "হরমোন ও ডায়াবেটিস বিশেষজ্ঞ",
    icon: faDroplet,
  },

  gynecology: {
    name: "স্ত্রী রোগ বিশেষজ্ঞ",
    icon: faVenus,
  },

  obstetrics: {
    name: "প্রসূতি রোগ বিশেষজ্ঞ",
    icon: faPersonPregnant,
  },

  ent: {
    name: "নাক, কান ও গলা বিশেষজ্ঞ",
    icon: faEarListen,
  },

  radiology: {
    name: "রেডিওলজি ও ইমেজিং বিশেষজ্ঞ",
    icon: faXRay,
  },

  oncology: {
    name: "ক্যান্সার বিশেষজ্ঞ",
    icon: faRibbon,
  },

  infectious_disease: {
    name: "সংক্রামক রোগ বিশেষজ্ঞ",
    icon: faVirus,
  },

  psychiatry: {
    name: "মনোরোগ বিশেষজ্ঞ",
    icon: faCapsules,
  },

  psychology: {
    name: "মনোবিজ্ঞানী",
    icon: faBrain,
  },

  general_surgery: {
    name: "জেনারেল সার্জারি বিশেষজ্ঞ",
    icon: faScissors,
  },

  urology: {
    name: "মূত্রনালী ও কিডনি রোগ বিশেষজ্ঞ",
    icon: faUserDoctor,
  },

  physical_medicine_and_rehabilitation: {
    name: "ফিজিক্যাল মেডিসিন ও পুনর্বাসন বিশেষজ্ঞ",
    icon: faPersonWalking,
  },

  rheumatology: {
    name: "বাত ও আর্থ্রাইটিস বিশেষজ্ঞ",
    icon: faHandDots,
  },

  // Additional Specialties

  gastroenterology: {
    name: "গ্যাস্ট্রোএন্টারোলজি ও পরিপাকতন্ত্র বিশেষজ্ঞ",
    icon: faStomach,
  },

  nephrology: {
    name: "কিডনি রোগ বিশেষজ্ঞ",
    icon: faKidneys,
  },

  hepatology: {
    name: "লিভার রোগ বিশেষজ্ঞ",
    icon: faLiver,
  },

  hematology: {
    name: "রক্ত রোগ বিশেষজ্ঞ",
    icon: faDroplet,
  },

  immunology: {
    name: "ইমিউনোলজি ও অ্যালার্জি বিশেষজ্ঞ",
    icon: faShieldVirus,
  },

  vascular_surgery: {
    name: "রক্তনালী সার্জারি বিশেষজ্ঞ",
    icon: faScissors,
  },

  neurosurgery: {
    name: "নিউরোসার্জারি বিশেষজ্ঞ",
    icon: faBrain,
  },

  cardiac_surgery: {
    name: "কার্ডিয়াক সার্জারি বিশেষজ্ঞ",
    icon: faHeartPulse,
  },

  pediatric_surgery: {
    name: "শিশু সার্জারি বিশেষজ্ঞ",
    icon: faBaby,
  },

  plastic_surgery: {
    name: "প্লাস্টিক সার্জারি বিশেষজ্ঞ",
    icon: faScissors,
  },

  anesthesiology: {
    name: "অ্যানেস্থেসিওলজি বিশেষজ্ঞ",
    icon: faSyringe,
  },

  pathology: {
    name: "প্যাথলজি বিশেষজ্ঞ",
    icon: faMicroscope,
  },

  nuclear_medicine: {
    name: "নিউক্লিয়ার মেডিসিন বিশেষজ্ঞ",
    icon: faAtom,
  },

  emergency_medicine: {
    name: "জরুরি চিকিৎসা বিশেষজ্ঞ",
    icon: faTruckMedical,
  },

  family_medicine: {
    name: "ফ্যামিলি মেডিসিন বিশেষজ্ঞ",
    icon: faHouseMedical,
  },

  geriatrics: {
    name: "বয়স্ক রোগ বিশেষজ্ঞ",
    icon: faPersonCane,
  },

  reproductive_medicine: {
    name: "প্রজনন ও বন্ধ্যাত্ব চিকিৎসা বিশেষজ্ঞ",
    icon: faPersonPregnant,
  },

  infertility: {
    name: "বন্ধ্যাত্ব চিকিৎসা বিশেষজ্ঞ",
    icon: faPersonPregnant,
  },

  neonatology: {
    name: "নবজাতক শিশু বিশেষজ্ঞ",
    icon: faBaby,
  },

  pediatric_cardiology: {
    name: "শিশু হৃদরোগ বিশেষজ্ঞ",
    icon: faHeartPulse,
  },

  pediatric_neurology: {
    name: "শিশু নিউরোলজি বিশেষজ্ঞ",
    icon: faBrain,
  },

  pediatric_nephrology: {
    name: "শিশু কিডনি রোগ বিশেষজ্ঞ",
    icon: faKidneys,
  },

  pediatric_gastroenterology: {
    name: "শিশু পরিপাকতন্ত্র বিশেষজ্ঞ",
    icon: faStomach,
  },

  pain_management: {
    name: "ব্যথা ব্যবস্থাপনা বিশেষজ্ঞ",
    icon: faSyringe,
  },

  sports_medicine: {
    name: "স্পোর্টস মেডিসিন বিশেষজ্ঞ",
    icon: faPersonWalking,
  },

  sleep_medicine: {
    name: "ঘুম ও নিদ্রাজনিত রোগ বিশেষজ্ঞ",
    icon: faBed,
  },

  addiction_medicine: {
    name: "মাদকাসক্তি চিকিৎসা বিশেষজ্ঞ",
    icon: faCapsules,
  },

  critical_care: {
    name: "ক্রিটিক্যাল কেয়ার বিশেষজ্ঞ",
    icon: faHeartPulse,
  },

  dental_surgery: {
    name: "ওরাল ও ম্যাক্সিলোফেসিয়াল সার্জারি বিশেষজ্ঞ",
    icon: faTooth,
  },

  orthodontics: {
    name: "অর্থোডন্টিক্স বিশেষজ্ঞ",
    icon: faTooth,
  },

  prosthodontics: {
    name: "প্রস্থোডন্টিক্স বিশেষজ্ঞ",
    icon: faTooth,
  },

  periodontics: {
    name: "মাড়ি রোগ বিশেষজ্ঞ",
    icon: faTooth,
  },
};



export function getSpecialtyIcons(name){
    if(!name) return faStethoscope
    name = name.toLowerCase()

    const allIcons = Object.keys(specialty_icons)
    const iconListInLowerCase = allIcons.map(e =>{
        const l =  e.toLowerCase()
        return l
    })
    const isIcon = iconListInLowerCase.includes(name)
    if(!isIcon){
        return faStethoscope
    }
    const index = iconListInLowerCase.findIndex( e => e === name)
    return specialty_icons[allIcons[index]]
}