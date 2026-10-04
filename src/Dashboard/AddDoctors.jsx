import React, { useEffect, useState } from "react";
import { add_doctor, edit_doctor } from "../features/doctors/doctorSlice";
import { useDispatch } from "react-redux";
import { genarate_slug } from "../lib/genarate_slug";
import { useLocation, useNavigate } from "react-router-dom";
import { specialty_list } from "../data/specialtyList"
import UploadWidget from "../Components/UploadWidget";
const API = import.meta.env.VITE_SERVER_URI


export default function AddDoctors() {
  const navigate = useNavigate()
  const { state } = useLocation()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    name: "",
    image: "",

    degrees: [""],

    designation: "",

    specialty: {
      name: "",
      category: "",
    },

    expertise: [""],

    workplace: {
      name: "",
      city: "",
      division: "",
    },

    appointment: {
      phone: [""],
    },

    chambers: [
      {
        name: "",
        city: "",
        address: "",
      },
    ],

    conditionsTreated: [""],

    fees: {
      newPatient: "",
      followUp: "",
      reportReview: "",
    },

    rating: 5,
  });


  useEffect(() => {
    if (state && state.data) {
      setFormData(state.data)
    }
  }, [])

  // --------------------------------
  // Basic input handler
  // --------------------------------
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // --------------------------------
  // Nested input handler
  // --------------------------------
  const handleNestedChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  // --------------------------------
  // Array field handler
  // --------------------------------
  const handleArrayChange = (field, index, value) => {
    setFormData((prev) => {
      const updated = [...prev[field]];
      updated[index] = value;

      return {
        ...prev,
        [field]: updated,
      };
    });
  };

  // --------------------------------
  // Add array item
  // --------------------------------
  const addArrayItem = (field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: [...prev[field], ""],
    }));
  };

  // --------------------------------
  // Remove array item
  // --------------------------------
  const removeArrayItem = (field, index) => {
    setFormData((prev) => {
      const updated = prev[field].filter((_, i) => i !== index);

      return {
        ...prev,
        [field]: updated.length ? updated : [""],
      };
    });
  };

  // --------------------------------
  // Chamber handler
  // --------------------------------
  const handleChamberChange = (index, field, value) => {
    setFormData((prev) => {
      const chambers = [...prev.chambers];

      chambers[index] = {
        ...chambers[index],
        [field]: value,
      };

      return {
        ...prev,
        chambers,
      };
    });
  };

  // --------------------------------
  // Add chamber
  // --------------------------------
  const addChamber = () => {
    setFormData((prev) => ({
      ...prev,
      chambers: [
        ...prev.chambers,
        {
          name: "",
          city: "",
          address: "",
        },
      ],
    }));
  };

  // --------------------------------
  // Remove chamber
  // --------------------------------
  const removeChamber = (index) => {
    setFormData((prev) => ({
      ...prev,
      chambers: prev.chambers.filter((_, i) => i !== index),
    }));
  };

  // --------------------------------
  // Image handler
  // --------------------------------
  const handleUploadDoctorImage = (res) => {
    if (!res) return
    const url = res.url
    // setFormData({ ...formData, image: url })
    setFormData((prev)=> ({...prev, image: url}))
  }

  // --------------------------------
  // Submit
  // --------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    const doctorData = {
      ...formData,

      specialty: {
        ...formData.specialty,
        slug: genarate_slug(formData.specialty.name),
      },

      degrees: formData.degrees.filter(Boolean),

      expertise: formData.expertise.filter(Boolean),

      appointment: {
        ...formData.appointment,
        phone: formData.appointment.phone.filter(Boolean),
      },

      conditionsTreated: formData.conditionsTreated.filter(Boolean),

      fees: {
        ...formData.fees,
        newPatient: Number(formData.fees.newPatient),
        followUp: Number(formData.fees.followUp),
        reportReview: Number(formData.fees.reportReview),
      },

      rating: Number(formData.rating),

      slug: genarate_slug(formData.name),
    };

    const isForEdit = state && state.data

    const method = isForEdit ? "PUT" : "POST"

    // This is the object you can later send to your API
    try {
      const req = await fetch(API + "/doctor", {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(doctorData),
      });
      const data = await req.json()
      if(!req.ok){
        alert(data.error)
        return
      }
      if(isForEdit){
        dispatch(edit_doctor(doctorData))
        navigate('/dashboard/doctors')
      }else{
        dispatch(add_doctor(data.doctor))
        navigate('/dashboard/doctors')
      }
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Add Doctor</h1>

          <p className="mt-2 text-sm text-slate-500">
            একজন চিকিৎসকের পেশাগত ও চেম্বার সংক্রান্ত তথ্য যোগ করুন।
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* ================= BASIC INFORMATION ================= */}

          <Section title="প্রাথমিক তথ্য">
            <div className="grid gap-5 md:grid-cols-2">
              <Input
                label="চিকিৎসকের নাম"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="ডাঃ সানজিদা হুদা সুইটি"
                required
              />

              {/* Image */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  চিকিৎসকের ছবি
                </label>

                {/* <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="block w-full rounded-lg border border-slate-300 bg-white text-sm file:mr-4 file:border-0 file:bg-slate-100 file:px-4 file:py-3 file:text-sm"
                /> */}

                <UploadWidget callback={handleUploadDoctorImage} />

                {formData.image && (
                  <img
                    src={formData.image}
                    alt="Doctor preview"
                    className="mt-3 h-24 w-24 rounded-lg object-cover"
                  />
                )}
              </div>
            </div>
          </Section>

          {/* ================= PROFESSIONAL ================= */}

          <Section title="পেশাগত তথ্য">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                পদবি
              </label>

              <select
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              >
                <option value="">পদবি নির্বাচন করুন</option>

                <option value="অধ্যাপক">অধ্যাপক</option>

                <option value="সহযোগী অধ্যাপক">সহযোগী অধ্যাপক</option>

                <option value="সহকারী অধ্যাপক">সহকারী অধ্যাপক</option>

                <option value="কনসালটেন্ট">কনসালটেন্ট</option>

                <option value="সিনিয়র কনসালটেন্ট">সিনিয়র কনসালটেন্ট</option>

                <option value="মেডিকেল অফিসার">মেডিকেল অফিসার</option>

                <option value="রেসিডেন্ট">রেসিডেন্ট</option>

                <option value="বিশেষজ্ঞ চিকিৎসক">বিশেষজ্ঞ চিকিৎসক</option>

                <option value="সার্জন">সার্জন</option>
              </select>
            </div>

            {/* Degrees */}
            <ArrayInput
              title="ডিগ্রি"
              field="degrees"
              values={formData.degrees}
              placeholder="এম বি বি এস"
              handleChange={handleArrayChange}
              addItem={addArrayItem}
              removeItem={removeArrayItem}
            />

            {/* Specialty */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                বিশেষজ্ঞ বিভাগের ক্যাটাগরি
              </label>

              <select
                value={formData.specialty.name}
                onChange={(e) =>
                  handleNestedChange("specialty", "name", e.target.value)
                }
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              >
                <option value="">বিশেষজ্ঞ বিভাগ নির্বাচন করুন</option>
                {
                  specialty_list.map(item => <option key={item} value={item}>{item}</option>)
                }
              </select>
            </div>

            {/* Expertise */}
            <ArrayInput
              title="বিশেষ দক্ষতা"
              field="expertise"
              values={formData.expertise}
              placeholder="ল্যাপারোস্কোপিক সার্জন"
              handleChange={handleArrayChange}
              addItem={addArrayItem}
              removeItem={removeArrayItem}
            />
          </Section>

          {/* ================= WORKPLACE ================= */}

          <Section title="কর্মস্থল">
            <div className="grid gap-5 md:grid-cols-3">
              <Input
                label="হাসপাতাল / কর্মস্থল"
                value={formData.workplace.name}
                onChange={(e) =>
                  handleNestedChange("workplace", "name", e.target.value)
                }
                placeholder="খুলনা মেডিকেল কলেজ হাসপাতাল"
              />

              <Input
                label="শহর"
                value={formData.workplace.city}
                onChange={(e) =>
                  handleNestedChange("workplace", "city", e.target.value)
                }
                placeholder="খুলনা"
              />

              <Input
                label="বিভাগ"
                value={formData.workplace.division}
                onChange={(e) =>
                  handleNestedChange("workplace", "division", e.target.value)
                }
                placeholder="খুলনা"
              />
            </div>
          </Section>

          {/* ================= APPOINTMENT ================= */}

          <Section title="অ্যাপয়েন্টমেন্ট">
            <ArrayInput
              title="ফোন নম্বর"
              field="appointment.phone"
              values={formData.appointment.phone}
              placeholder="01724536313"
              handleChange={(field, index, value) => {
                setFormData((prev) => {
                  const phones = [...prev.appointment.phone];

                  phones[index] = value;

                  return {
                    ...prev,
                    appointment: {
                      ...prev.appointment,
                      phone: phones,
                    },
                  };
                });
              }}
              addItem={() => {
                setFormData((prev) => ({
                  ...prev,
                  appointment: {
                    ...prev.appointment,
                    phone: [...prev.appointment.phone, ""],
                  },
                }));
              }}
              removeItem={(field, index) => {
                setFormData((prev) => ({
                  ...prev,
                  appointment: {
                    ...prev.appointment,
                    phone: prev.appointment.phone.filter((_, i) => i !== index),
                  },
                }));
              }}
            />
          </Section>

          {/* ================= CHAMBERS ================= */}

          <Section
            title="চেম্বারস"
            action={
              <button
                type="button"
                onClick={addChamber}
                className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
              >
                + চেম্বার যোগ করুন
              </button>
            }
          >
            <div className="space-y-5">
              {formData.chambers.map((chamber, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-5"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-semibold text-slate-800">
                      চেম্বার {index + 1}
                    </h3>

                    {formData.chambers.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeChamber(index)}
                        className="text-sm font-medium text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    )}
                  </div>

                  <div className="grid gap-5 md:grid-cols-3">
                    <Input
                      label="চেম্বারের নাম"
                      value={chamber.name}
                      onChange={(e) =>
                        handleChamberChange(index, "name", e.target.value)
                      }
                      placeholder="টপ চয়েস ডায়াগনস্টিক সেন্টার"
                    />

                    <Input
                      label="শহর"
                      value={chamber.city}
                      onChange={(e) =>
                        handleChamberChange(index, "city", e.target.value)
                      }
                      placeholder="খুলনা"
                    />

                    <Input
                      label="ঠিকানা"
                      value={chamber.address}
                      onChange={(e) =>
                        handleChamberChange(index, "address", e.target.value)
                      }
                      placeholder="খুলনা"
                    />
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* ================= TREATMENT ================= */}

          <Section title="চিকিৎসা">
            <ArrayInput
              title="যেসব রোগের চিকিৎসা করা হয়"
              field="conditionsTreated"
              values={formData.conditionsTreated}
              placeholder="অনিয়মিত ঋতুস্রাব"
              handleChange={handleArrayChange}
              addItem={addArrayItem}
              removeItem={removeArrayItem}
            />
          </Section>

          {/* ================= FEES ================= */}

          <Section title="ফি">
            <div className="grid gap-5 md:grid-cols-3">
              <Input
                label="নতুন রোগীর ফি"
                type="number"
                value={formData.fees.newPatient}
                onChange={(e) =>
                  handleNestedChange("fees", "newPatient", e.target.value)
                }
                placeholder="600"
              />

              <Input
                label="ফলো-আপ ফি"
                type="number"
                value={formData.fees.followUp}
                onChange={(e) =>
                  handleNestedChange("fees", "followUp", e.target.value)
                }
                placeholder="700"
              />

              <Input
                label="প্রতিবেদন পর্যালোচনা ফি"
                type="number"
                value={formData.fees.reportReview}
                onChange={(e) =>
                  handleNestedChange("fees", "reportReview", e.target.value)
                }
                placeholder="0"
              />
            </div>
          </Section>

          {/* ================= RATING ================= */}

          <Section title="রেটিং">
            <div className="max-w-xs">
              <label className="mb-2 block text-sm font-medium text-slate-700">
                রেটিং
              </label>

              <select
                value={formData.rating}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    rating: Number(e.target.value),
                  }))
                }
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-slate-500"
              >
                <option value={1}>1 Star</option>
                <option value={2}>2 Stars</option>
                <option value={3}>3 Stars</option>
                <option value={4}>4 Stars</option>
                <option value={5}>5 Stars</option>
              </select>
            </div>
          </Section>

          {/* ================= SUBMIT ================= */}

          <div className="flex justify-end border-t border-slate-200 pt-6">
            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              Add Doctor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* =========================================================
   REUSABLE INPUT
========================================================= */

function Input({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  required = false,
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />
    </div>
  );
}

/* =========================================================
   ARRAY INPUT
========================================================= */

function ArrayInput({
  title,
  field,
  values,
  placeholder,
  handleChange,
  addItem,
  removeItem,
}) {
  return (
    <div className="mt-5">
      <div className="mb-3 flex items-center justify-between">
        <label className="text-sm font-medium text-slate-700">{title}</label>

        <button
          type="button"
          onClick={() => addItem(field)}
          className="text-sm font-semibold text-blue-600 hover:text-blue-800"
        >
          + Add
        </button>
      </div>

      <div className="space-y-3">
        {values.map((value, index) => (
          <div key={index} className="flex gap-2">
            <input
              type="text"
              value={value}
              onChange={(e) => handleChange(field, index, e.target.value)}
              placeholder={placeholder}
              className="flex-1 rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

            {values.length > 1 && (
              <button
                type="button"
                onClick={() => removeItem(field, index)}
                className="rounded-lg border border-red-200 px-4 text-sm font-medium text-red-500 hover:bg-red-50"
              >
                Remove
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   SECTION
========================================================= */

function Section({ title, children, action }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-4">
        <h2 className="text-lg font-bold text-slate-900">{title}</h2>

        {action}
      </div>

      <div className="space-y-5">{children}</div>
    </section>
  );
}



