import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSpecialtyIcons } from "../lib/specialtyManager";
import { useEffect, useState } from "react";
import { icon } from "@fortawesome/fontawesome-svg-core";



export default function SpecialtiesSection() {
  const [specialtyData, setSpecilityData] = useState([])

  const { doctors: doctorsList, isLoading, isError, error } = useSelector(e => e.doctors)

  function getSpecialityData() {
    const extractAllSpecialites = doctorsList.map(e => e?.specialty?.name)
    const uniqeSpecialites = new Set(extractAllSpecialites)
    const outputData = []
    for (const sp of uniqeSpecialites) {
      try {
        const doc = doctorsList.find( d =>  d.specialty.name === sp )
        let count = 0;
        for (const innerSp of extractAllSpecialites) {
          if (innerSp === sp) count++
        }
        outputData.push({
          specialty: sp,
          slug: doc.specialty.slug,
          icon: getSpecialtyIcons(sp),
          doctors: count
        })
      }catch(err){
        console.log(err)
      }
    }
    return outputData
  }

  useEffect(() => {
    if (doctorsList || !isLoading) {
      const data = getSpecialityData()
      setSpecilityData(data)
    }
  }, [doctorsList])

  return (
    <div className="py-10">
      <h3 className="text-2xl font-bold">Popular Specialties</h3>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10">
        {
          specialtyData.map((item) => <SpecialtiesCard key={item.specialty} data={item} />)
        }
      </div>
    </div>
  );
}

function SpecialtiesCard({ data }) {
  const navigate = useNavigate()

  return (
    <div key={data.key} onClick={() => navigate("/sp/" + data.slug)} className="text-center  py-10 rounded-2xl shadow-2xl border border-gray-400 mt-5 hover:scale-110 duration-300 hover:bg-gray-100 group">
      <FontAwesomeIcon className="text-3xl mb-5 group-hover:text-blue-700 duration-300" icon={data.icon} />
      <div>
        <h4 className="text-xl font-bold">{data.specialty}</h4>
        <p className="text-gray-400">{data.doctors} Doctors</p>
      </div>
    </div>
  );
}
