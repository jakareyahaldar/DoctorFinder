import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const DoctorSearchResults = ({
  searchText,
}) => {
  const navigate = useNavigate();
  const [ show, setShow ] = useState(false)
  const { doctors } = useSelector( state => state.doctors )

  useEffect(()=>{
    if(searchText){
      setShow(true)
    }
  },[searchText])

  const searchResults = useMemo(() => {
    if (!searchText?.trim()) return [];

    const query = searchText.trim().toLowerCase();

    return doctors.filter((doctor) => {
      const searchableData = [
        doctor.name,
        doctor.slug,
        doctor.designation,

        doctor.specialty?.name,
        doctor.specialty?.slug,
        doctor.specialty?.category,

        ...(doctor.degrees || []),
        ...(doctor.expertise || []),
        ...(doctor.conditionsTreated || []),

        doctor.workplace?.name,
        doctor.workplace?.city,
        doctor.workplace?.division,

        ...(doctor.chambers || []).flatMap((chamber) => [
          chamber.name,
          chamber.city,
          chamber.address,
        ]),
      ];

      return searchableData
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(query);
    });
  }, [searchText, doctors]);

  if (!searchText?.trim()) return null;

  const handleDoctorClick = (doctor) => {
    navigate(`/doctors/${doctor.slug}`);
    onClose?.();
  };
  const onClose = ()=>{
    setShow(false)
  }


  if(!show) return null

  return (
    <div className="fixed right-6 md:top-20 top-52 z-[9999] w-[620px] max-w-[calc(100vw-24px)] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
        <div>
          <h3 className="text-base font-semibold text-gray-900">
            Search Results
          </h3>

          <p className="mt-1 text-xs text-gray-500">
            {searchResults.length
              ? `${searchResults.length} doctor${
                  searchResults.length > 1 ? "s" : ""
                } found`
              : "No doctors found"}
          </p>
        </div>

        <button
          onClick={onClose}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-500 transition hover:bg-gray-200 hover:text-gray-800"
        >
          ×
        </button>
      </div>

      {/* Results */}
      <div className="max-h-[70vh] overflow-y-auto p-2">

        {searchResults.length > 0 ? (
          searchResults.map((doctor) => (
            <div
              key={doctor._id || doctor.slug}
              className="flex items-center gap-4 rounded-xl p-3 transition hover:bg-gray-50"
            >

              {/* Image */}
              <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-gray-100">
                <img
                  src={
                    doctor.image ||
                    "/images/default-doctor.png"
                  }
                  alt={doctor.name}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src =
                      "/images/default-doctor.png";
                  }}
                />
              </div>

              {/* Information */}
              <div className="min-w-0 flex-1">

                <h4 className="truncate text-sm font-semibold text-gray-900">
                  {doctor.name}
                </h4>

                {doctor.designation && (
                  <p className="mt-1 truncate text-xs text-gray-500">
                    {doctor.designation}
                  </p>
                )}

                {doctor.specialty?.category && (
                  <span className="mt-2 inline-block rounded-md bg-blue-50 px-2 py-1 text-[10px] font-medium text-blue-600">
                    {doctor.specialty.category}
                  </span>
                )}

                <div className="mt-2 flex items-center gap-3 text-[11px] text-gray-500">

                  {doctor.workplace?.name && (
                    <span className="flex min-w-0 items-center gap-1">
                      <span>🏥</span>

                      <span className="truncate">
                        {doctor.workplace.name}
                      </span>
                    </span>
                  )}

                  {doctor.workplace?.city && (
                    <span className="flex shrink-0 items-center gap-1">
                      <span>📍</span>
                      {doctor.workplace.city}
                    </span>
                  )}

                </div>
              </div>

              {/* View */}
              <button
                onClick={() => handleDoctorClick(doctor)}
                className="shrink-0 rounded-lg bg-blue-600 px-4 py-2 text-xs font-medium text-white transition hover:bg-blue-700 active:scale-95"
              >
                View
              </button>

            </div>
          ))
        ) : (
          <div className="px-6 py-12 text-center">

            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-xl">
              🔍
            </div>

            <h4 className="text-sm font-semibold text-gray-900">
              No doctors found
            </h4>

            <p className="mx-auto mt-1 max-w-sm text-xs text-gray-500">
              Try searching by doctor name, specialty,
              hospital, expertise, or location.
            </p>

          </div>
        )}

      </div>
    </div>
  );
};

export default DoctorSearchResults;