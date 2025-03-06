import { useState } from "react";

const SearchForm = ({ setChildData }) => {
  const [journeyDetails, setJourneyDetails] = useState({
    origin: "",
    destination: "",
    date: "",
    passengerscount: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
<<<<<<< HEAD
    if (
      !journeyDetails.origin ||
      !journeyDetails.destination ||
      !journeyDetails.date ||
      journeyDetails.passengerscount <= 0
    ) {
=======
    if (!journeyDetails.origin || !journeyDetails.destination || !journeyDetails.date || journeyDetails.passengerscount <= 0) {
>>>>>>> b4cf5bf (code changes)
      alert("Please fill all fields correctly!");
      return;
    }
    setChildData(journeyDetails);
  };

  return (
    <form className="flex gap-1 place-content-center" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Origin"
        className="border border-gray-400 rounded-lg p-2 my-1 text-center"
        value={journeyDetails.origin}
<<<<<<< HEAD
        onChange={(e) =>
          setJourneyDetails((prev) => ({ ...prev, origin: e.target.value }))
        }
=======
        onChange={(e) => setJourneyDetails((prev) => ({ ...prev, origin: e.target.value }))}
>>>>>>> b4cf5bf (code changes)
      />
      <input
        type="text"
        placeholder="Destination"
        className="border border-gray-400 rounded-lg p-2 my-1 text-center"
        value={journeyDetails.destination}
<<<<<<< HEAD
        onChange={(e) =>
          setJourneyDetails((prev) => ({
            ...prev,
            destination: e.target.value,
          }))
        }
=======
        onChange={(e) => setJourneyDetails((prev) => ({ ...prev, destination: e.target.value }))}
>>>>>>> b4cf5bf (code changes)
      />
      <input
        type="date"
        className="border border-gray-400 rounded-lg p-2 my-1 min-w-[16.625rem]"
        min={new Date().toISOString().split("T")[0]} // Ensures past dates are disabled
        value={journeyDetails.date}
<<<<<<< HEAD
        onChange={(e) =>
          setJourneyDetails((prev) => ({ ...prev, date: e.target.value }))
        }
=======
        onChange={(e) => setJourneyDetails((prev) => ({ ...prev, date: e.target.value }))}
>>>>>>> b4cf5bf (code changes)
      />
      <input
        type="number"
        placeholder="No. of Passengers"
        className="border border-gray-400 rounded-lg p-2 my-1 text-center"
        value={journeyDetails.passengerscount}
<<<<<<< HEAD
        onChange={(e) =>
          setJourneyDetails((prev) => ({
            ...prev,
            passengerscount: Number(e.target.value),
          }))
        }
=======
        onChange={(e) => setJourneyDetails((prev) => ({ ...prev, passengerscount: Number(e.target.value) }))}
>>>>>>> b4cf5bf (code changes)
        min="1"
      />
      <button className="border rounded-lg p-2 my-1 hover:bg-blue-700 hover:text-white">
        Submit
      </button>
    </form>
  );
};

export default SearchForm;
