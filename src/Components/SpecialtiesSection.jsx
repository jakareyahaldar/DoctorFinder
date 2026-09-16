import { faHeart } from "@fortawesome/free-regular-svg-icons";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";


const specialties_config = [
  {
    icon: faStethoscope,
    specialties: "Medicine",
    doctor_count: 120,
  },
  {
    icon: faHeartPulse,
    specialties: "Cardiology",
    doctor_count: 85,
  },
  {
    icon: faBrain,
    specialties: "Neurology",
    doctor_count: 64,
  },
  {
    icon: faBone,
    specialties: "Orthopedics",
    doctor_count: 92,
  },
  {
    icon: faBaby,
    specialties: "Pediatrics",
    doctor_count: 78,
  },
  {
    icon: faSyringe,
    specialties: "Dermatology",
    doctor_count: 56,
  },
  {
    icon: faEye,
    specialties: "Ophthalmology",
    doctor_count: 48,
  },
  {
    icon: faTooth,
    specialties: "Dentistry",
    doctor_count: 72,
  },
  {
    icon: faLungs,
    specialties: "Pulmonology",
    doctor_count: 41,
  },
  {
    icon: faDroplet,
    specialties: "Endocrinology",
    doctor_count: 35,
  },
  {
    icon: faVenus,
    specialties: "Gynecology",
    doctor_count: 67,
  },
  {
    icon: faPersonPregnant,
    specialties: "Obstetrics",
    doctor_count: 52,
  },
  {
    icon: faEarListen,
    specialties: "ENT",
    doctor_count: 44,
  },
  {
    icon: faXRay,
    specialties: "Radiology",
    doctor_count: 38,
  },
  {
    icon: faRibbon,
    specialties: "Oncology",
    doctor_count: 27,
  },
  {
    icon: faVirus,
    specialties: "Infectious Disease",
    doctor_count: 24,
  },
  {
    icon: faCapsules,
    specialties: "Psychiatry",
    doctor_count: 46,
  },
  {
    icon: faScissors,
    specialties: "General Surgery",
    doctor_count: 61,
  },
  {
    icon: faUserDoctor,
    specialties: "Urology",
    doctor_count: 33,
  },
  {
    icon: faBrain,
    specialties: "Psychology",
    doctor_count: 39,
  },
  {
    icon: faPersonWalking,
    specialties: "Physical Medicine & Rehabilitation",
    doctor_count: 21,
  },
  {
    icon: faHandDots,
    specialties: "Rheumatology",
    doctor_count: 18,
  },
];

export default function SpecialtiesSection() {
  return (
    <div className="py-10">
      <h3 className="text-2xl font-bold">Popular Specialties</h3>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10">
        {
            specialties_config.map((item)=> <SpecialtiesCard data={item} /> )
        }
      </div>
    </div>
  );
}

function SpecialtiesCard({data}) {
  const navigate = useNavigate()
  return (
    <div onClick={()=>navigate("/sp/"+data.specialties)} className="text-center  py-10 rounded-2xl shadow-2xl border border-gray-400 mt-5 hover:scale-110 duration-300 hover:bg-gray-100 group">
      <FontAwesomeIcon className="text-3xl mb-5 group-hover:text-blue-700 duration-300" icon={data.icon} />
      <div>
        <h4 className="text-xl font-bold">{data.specialties}</h4>
        <p className="text-gray-400">{data.doctor_count
            } Doctors</p>
      </div>
    </div>
  );
}
