import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate()
    const [doctorCount, setDoctorCount] = useState(0)
    const [specialtyCount, setSpecialtyCount] = useState(0)
    const { doctors, isLoading, isError, error } = useSelector(  state => state.doctors )
    
    useEffect(()=>{
      if(!doctors || !doctors.length) return
      setDoctorCount(doctors.length)
      const specialtyList = new Set(doctors.map( doctor => doctor?.specialty?.name ))
      setSpecialtyCount(specialtyList.size)
    },[doctors])

  return (
    <div className="w-full h-full">
      {/* HEADER */}
      <div className="flex justify-between items-center w-full py-5">
        <div>
          <h1 className="text-xl font-bold">Dashboard</h1>
          <p className="text-sm text-gray-500">manage and view your informations</p>
        </div>
        <button onClick={()=> navigate("/dashboard/add-doctor") } className="flex gap-1 bg-black text-white items-center px-2 rounded-full h-10 shadow"> <Plus /> Add Doctors</button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-10 xl:grid-cols-6">
        <StatCard title={"Doctors"} count={doctors?.length} text={"all available doctors in khulna"} />
        <StatCard title={"Spsialist"} count={specialtyCount} text={"all Spacialst in khulna bagerhat"} />
        <StatCard title={"Total Order"} count={"100+"} text={"manage all orders"} />
      </div>

    </div>
  );
}



function StatCard({title, count, text}){
  return(
    <div className="bg-black text-white rounded-2xl p-4">
      <h3 className="text-xl">{title}</h3>
      <h3 className="text-4xl font-bold">{count}</h3>
      <p className="text-sm text-gray-400">{text}</p>
    </div>
  )
}