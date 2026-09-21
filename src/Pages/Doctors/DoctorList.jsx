import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBill,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";

// import { doctors } from "./doctors";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function DoctorsList() {

  const {pathname} = useLocation()
  const specialty = pathname.split("/")[2]

  const { doctors: doctorList, isLoading, isError, error } = useSelector( e => e.doctors )

  const doctors = doctorList.filter( e => {
    console.log(e.specialty.name.toLowerCase() === specialty)
    return e.specialty.name.toLowerCase() === specialty
  })
  console.log(doctors)

  const navigate = useNavigate()
  const handleAppointment = (doctor) => {
    console.log("Appointment:", doctor.name);

    // You can open appointment modal here
    // or navigate to appointment page
    
  };
  console.log("doctors")

  return (
    <section className="w-full bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
            আমাদের ডাক্তার
          </h2>

          <p className="mt-2 text-sm text-gray-500 sm:text-base">
            অভিজ্ঞ ও বিশেষজ্ঞ ডাক্তারদের সাথে অ্যাপয়েন্টমেন্ট নিন
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {
            doctors.map((doctor)=>{
              const name_slug = doctor.name.replaceAll(".","-").replaceAll(" ","").toLowerCase()
              return (
                 <div
              onClick={()=>navigate('/appointment/'+name_slug)}
              key={doctor.name}
              className="group overflow-hidden border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Doctor Image */}
              <div className="h-48 w-full overflow-hidden bg-gray-50">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Doctor Information */}
              <div className="px-5 py-5 text-center">

                {/* Name */}
                <h3 className="text-xl font-semibold text-gray-800">
                  {doctor.name}
                </h3>

                {/* Specialty */}
                <p className="mt-3 min-h-[48px] text-base leading-6 text-gray-600">
                  {doctor.specialty.name}
                </p>

                {/* Fee */}
                <div className="mt-4 flex items-center justify-center gap-2 text-gray-700">
                  <FontAwesomeIcon
                    icon={faMoneyBill}
                    className="text-sm"
                  />

                  <span className="text-base">
                    ফি: {doctor.fees.newPatient} টাকা
                  </span>
                </div>

                {/* Appointment Button */}
                <button
                  onClick={() => handleAppointment(doctor)}
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-sm bg-sky-500 px-6 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-sky-600 active:scale-95"
                >
                  <FontAwesomeIcon
                    icon={faCalendarCheck}
                    className="text-sm"
                  />

                  অ্যাপয়েন্টমেন্ট
                </button>
              </div>
            </div>
              )
            })
          }
        </div>
      </div>
    </section>
  );
}