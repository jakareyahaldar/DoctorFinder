import React from "react";
import {
  Phone,
  MessageCircle,
  MapPin,
  BriefcaseMedical,
  GraduationCap,
  Stethoscope,
  Building2,
  CircleDollarSign,
  Star,
  CheckCircle2,
  Clock,
} from "lucide-react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";



export default function DoctorDetails() {
  
  const {doctors, isLoading, isError, error} = useSelector(e=> e.doctors)

  const { pathname } = useLocation()
  const slug = pathname.split("/")[2]
  const doctor = doctors.find(e=> e.slug === decodeURIComponent(slug) )

  console.log(doctor)
  if(!doctor){
    return (
      <div className="h-dvh w-full flex justify-center items-center">
        <h1 className="font-bold text-2xl">Doctor not found...</h1>
      </div>
    )
  }
  const phone = doctor?.appointment?.phone[0];

  // Remove spaces, + and other characters
  const cleanPhone = phone?.replace(/\D/g, "");

  // Bangladesh WhatsApp number
  const whatsappNumber = cleanPhone?.startsWith("0")
    ? `88${cleanPhone}`
    : cleanPhone;

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        {/* ================= Doctor Header ================= */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="p-6 sm:p-8">

            <div className="flex flex-col gap-6 sm:flex-row">

              {/* Doctor Image */}
              <div className="shrink-0">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-32 w-32 rounded-2xl object-cover ring-4 ring-blue-50 sm:h-40 sm:w-40"
                />
              </div>

              {/* Basic Information */}
              <div className="flex-1">

                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    {doctor.name}
                  </h1>

                  <CheckCircle2 className="h-5 w-5 fill-blue-600 text-white" />
                </div>

                <p className="mt-2 text-base font-medium text-blue-600">
                  {doctor.designation}
                </p>

                {/* Specialty */}
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                    {doctor.specialty.name}
                  </span>

                  <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">
                    {doctor.specialty.category}
                  </span>
                </div>

                {/* Rating */}
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex">
                    {Array.from({ length: doctor.rating }).map(
                      (_, index) => (
                        <Star
                          key={index}
                          className="h-5 w-5 fill-yellow-400 text-yellow-400"
                        />
                      )
                    )}
                  </div>

                  <span className="text-sm font-medium text-gray-700">
                    {doctor.rating}.0 / 5
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">

                  {/* Call */}
                  <a
                    href={`tel:${phone}`}
                    className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
                  >
                    <Phone className="h-5 w-5" />
                    Call Now
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-lg bg-green-600 px-5 py-3 font-medium text-white transition hover:bg-green-700"
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= Main Content ================= */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">

          {/* ================= Left ================= */}
          <div className="space-y-6 lg:col-span-2">

            {/* Degrees */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-lg bg-blue-50 p-2">
                  <GraduationCap className="h-5 w-5 text-blue-600" />
                </div>

                <h2 className="text-lg font-bold text-gray-900">
                  শিক্ষাগত যোগ্যতা
                </h2>
              </div>

              <div className="flex flex-wrap gap-2">
                {doctor.degrees.map((degree, index) => (
                  <span
                    key={index}
                    className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-700"
                  >
                    {degree}
                  </span>
                ))}
              </div>
            </section>

            {/* Expertise */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-lg bg-blue-50 p-2">
                  <Stethoscope className="h-5 w-5 text-blue-600" />
                </div>

                <h2 className="text-lg font-bold text-gray-900">
                  দক্ষতার ক্ষেত্রসমূহ
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {doctor.expertise.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600" />
                    {item}
                  </div>
                ))}
              </div>
            </section>

            {/* Conditions Treated */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-lg font-bold text-gray-900">
                Conditions Treated
              </h2>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {doctor.conditionsTreated.map((condition, index) => (
                  <div
                    key={index}
                    className="rounded-lg bg-gray-50 px-4 py-3 text-sm text-gray-700"
                  >
                    {condition}
                  </div>
                ))}
              </div>
            </section>

            {/* Chambers */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-lg bg-blue-50 p-2">
                  <Building2 className="h-5 w-5 text-blue-600" />
                </div>

                <h2 className="text-lg font-bold text-gray-900">
                  Chamber Information
                </h2>
              </div>

              <div className="space-y-4">
                {doctor.chambers.map((chamber, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-gray-200 p-4"
                  >
                    <h3 className="font-semibold text-gray-900">
                      {chamber.name}
                    </h3>

                    <div className="mt-2 flex items-start gap-2 text-sm text-gray-500">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />

                      <div>
                        <p>{chamber.address}</p>
                        <p className="mt-1">{chamber.city}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* ================= Right Sidebar ================= */}
          <div className="space-y-6">

            {/* Workplace */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <BriefcaseMedical className="h-5 w-5 text-blue-600" />

                <h2 className="font-bold text-gray-900">
                  Workplace
                </h2>
              </div>

              <h3 className="font-medium text-gray-800">
                {doctor.workplace.name}
              </h3>

              <p className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                <MapPin className="h-4 w-4" />
                {doctor.workplace.city}, {doctor.workplace.division}
              </p>
            </section>

            {/* Appointment */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <Clock className="h-5 w-5 text-blue-600" />

                <h2 className="font-bold text-gray-900">
                  Appointment
                </h2>
              </div>

              <div className="space-y-3">
                {doctor.appointment.phone.map((number, index) => (
                  <a
                    key={index}
                    href={`tel:${number}`}
                    className="flex items-center gap-3 rounded-lg bg-gray-50 p-3 text-sm font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    <Phone className="h-4 w-4" />
                    {number}
                  </a>
                ))}
              </div>

              {/* Main Call Button */}
              <a
                href={`tel:${phone}`}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 font-medium text-white transition hover:bg-blue-700"
              >
                <Phone className="h-5 w-5" />
                Call for Appointment
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-green-600 px-4 py-3 font-medium text-green-600 transition hover:bg-green-50"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </section>

            {/* Fees */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <CircleDollarSign className="h-5 w-5 text-blue-600" />

                <h2 className="font-bold text-gray-900">
                  Consultation Fees
                </h2>
              </div>

              <div className="space-y-3">

                <FeeRow
                  title="New Patient"
                  amount={doctor.fees.newPatient}
                />

                <FeeRow
                  title="Follow Up"
                  amount={doctor.fees.followUp}
                />

                <FeeRow
                  title="Report Review"
                  amount={doctor.fees.reportReview}
                />

              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= Fee Row ================= */

function FeeRow({ title, amount }) {
  return (
    <div className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0 last:pb-0">
      <span className="text-sm text-gray-600">
        {title}
      </span>

      <span className="font-semibold text-gray-900">
        ৳ {amount}
      </span>
    </div>
  );
}