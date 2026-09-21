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


const specialty_icons = {
  medicine: faStethoscope,
  cardiology: faHeartPulse,
  neurology: faBrain,
  orthopedics: faBone,
  pediatrics: faBaby,
  dermatology: faSyringe,
  ophthalmology: faEye,
  dentistry: faTooth,
  pulmonology: faLungs,
  endocrinology: faDroplet,
  gynecology: faVenus,
  obstetrics: faPersonPregnant,
  ent: faEarListen,
  radiology: faXRay,
  oncology: faRibbon,
  infectious_disease: faVirus,
  psychiatry: faCapsules,
  general_surgery: faScissors,
  urology: faUserDoctor,
  psychology: faBrain,
  physical_medicine_and_rehabilitation: faPersonWalking,
  rheumatology: faHandDots,
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