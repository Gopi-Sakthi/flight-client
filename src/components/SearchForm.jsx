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
    if (
      !journeyDetails.origin ||
      !journeyDetails.destination ||
      !journeyDetails.date ||
      journeyDetails.passengerscount <= 0
    ) {
      // alert("Please fill all fields correctly!");
      console.log("Please fill all fields correctly!");
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
        onChange={(e) =>
          setJourneyDetails((prev) => ({ ...prev, origin: e.target.value }))
        }
      />
      <input
        type="text"
        placeholder="Destination"
        className="border border-gray-400 rounded-lg p-2 my-1 text-center"
        value={journeyDetails.destination}
        onChange={(e) =>
          setJourneyDetails((prev) => ({
            ...prev,
            destination: e.target.value,
          }))
        }
      />
      <input
        type="date"
        className="border border-gray-400 rounded-lg p-2 my-1 min-w-[16.625rem]"
        min={new Date().toISOString().split("T")[0]} // Ensures past dates are disabled
        value={journeyDetails.date}
        onChange={(e) =>
          setJourneyDetails((prev) => ({ ...prev, date: e.target.value }))
        }
      />
      <input
        type="number"
        placeholder="No. of Passengers"
        className="border border-gray-400 rounded-lg p-2 my-1 text-center"
        value={journeyDetails.passengerscount}
        onChange={(e) =>
          setJourneyDetails((prev) => ({
            ...prev,
            passengerscount: Number(e.target.value),
          }))
        }
        min="1"
      />
      <button className="border rounded-lg p-2 my-1 hover:bg-blue-700 hover:text-white">
        Submit
      </button>
    </form>
  );
};

export default SearchForm;
