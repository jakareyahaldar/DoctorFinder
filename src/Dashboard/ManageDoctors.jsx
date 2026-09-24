import React, { useState } from "react";
import {
  Pencil,
  Trash2,
  Search,
  Plus,
  Stethoscope,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { delete_doctor } from "../features/doctors/doctorSlice";
import { useNavigate } from "react-router-dom";


export default function ManageDoctors() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { doctors, isLoading, isError, error } = useSelector( e => e.doctors)
  const [search, setSearch] = useState("");

  // Delete doctor
  const handleDelete = (id) => {
    const doctor = doctors.find((doctor) => doctor._id === id);

    const confirmDelete = window.confirm(
      `আপনি কি "${doctor.name}"-কে ডিলিট করতে চান?`
    );

    if (!confirmDelete) return;

    dispatch(delete_doctor(id))
  };

  // Edit doctor
  const handleEdit = (doctor) => {
    console.log("Edit doctor:", doctor);

    navigate("/dashboard/add-doctor", { state: { data: doctor } })

    // এখানে আপনার edit page / modal open করতে পারবেন
    // Example:
    // navigate(`/admin/doctors/edit/${doctor.id}`);
  };

  // Search
  const filteredDoctors = doctors.filter((doctor) => {
    const searchText = search.toLowerCase();

    return (
      doctor.name.toLowerCase().includes(searchText) ||
      doctor.specialties.toLowerCase().includes(searchText) ||
      doctor.designation.toLowerCase().includes(searchText)
    );
  });

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="flex items-center gap-2 text-2xl font-bold text-gray-900">
              <Stethoscope className="h-7 w-7 text-blue-600" />
              Manage Doctors
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Manage all doctors from here
            </p>
          </div>

          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            <Plus className="h-5 w-5" />
            Add Doctor
          </button>
        </div>

        {/* Search */}
        <div className="mb-5">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              placeholder="Search doctor..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] text-left">

              {/* Table Header */}
              <thead className="border-b border-gray-200 bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                    Doctor
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                    Specialities
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                    Designation
                  </th>

                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-gray-100">

                {filteredDoctors.length > 0 ? (
                  filteredDoctors.map((doctor) => (
                    <tr
                      key={doctor._id}
                      className="transition hover:bg-gray-50"
                    >

                      {/* Doctor */}
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">

                          <img
                            src={doctor.image}
                            alt={doctor.name}
                            className="h-12 w-12 rounded-full object-cover ring-2 ring-gray-100"
                          />

                          <div>
                            <h3 className="font-medium text-gray-900">
                              {doctor.name}
                            </h3>

                            <p className="text-xs text-gray-500">
                              ID: #{doctor._id}
                            </p>
                          </div>

                        </div>
                      </td>

                      {/* Specialities */}
                      <td className="px-6 py-4">
                        <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                          {doctor.specialty.name}
                        </span>
                      </td>

                      {/* Designation */}
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {doctor.designation}
                      </td>

                      {/* Actions */}
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-2">

                          {/* Edit */}
                          <button
                            type="button"
                            onClick={() => handleEdit(doctor)}
                            title="Edit doctor"
                            className="rounded-lg p-2 text-blue-600 transition hover:bg-blue-50"
                          >
                            <Pencil className="h-5 w-5" />
                          </button>

                          {/* Delete */}
                          <button
                            type="button"
                            onClick={() => handleDelete(doctor._id)}
                            title="Delete doctor"
                            className="rounded-lg p-2 text-red-600 transition hover:bg-red-50"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>

                        </div>
                      </td>

                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="4"
                      className="px-6 py-12 text-center"
                    >
                      <div className="flex flex-col items-center">
                        <Stethoscope className="mb-3 h-10 w-10 text-gray-300" />

                        <p className="font-medium text-gray-700">
                          No doctors found
                        </p>

                        <p className="mt-1 text-sm text-gray-400">
                          Try searching with a different name or specialty.
                        </p>
                      </div>
                    </td>
                  </tr>
                )}

              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 px-6 py-4">
            <p className="text-sm text-gray-500">
              Showing{" "}
              <span className="font-medium text-gray-900">
                {filteredDoctors.length}
              </span>{" "}
              of{" "}
              <span className="font-medium text-gray-900">
                {doctors.length}
              </span>{" "}
              doctors
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}