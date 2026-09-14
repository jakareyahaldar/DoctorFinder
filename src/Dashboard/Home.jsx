import { Plus } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full h-full">
      {/* HEADER */}
      <div className="flex justify-between items-center w-full py-5">
        <div>
          <h1 className="text-xl font-bold">Dashboard</h1>
          <p className="text-sm text-gray-500">manage and view your informations</p>
        </div>
        <button className="flex gap-1 bg-black text-white items-center px-2 rounded-full h-10 shadow"> <Plus /> Add Doctors</button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-10 xl:grid-cols-6">
        <StatCard title={"Doctors"} count={"33"} text={"all available doctors in khulna"} />
        <StatCard title={"Spsialist"} count={"17"} text={"all Spacialst in khulna bagerhat"} />
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