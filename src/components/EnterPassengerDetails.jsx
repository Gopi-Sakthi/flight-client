import { useState } from "react";
import axios from "axios";

const EnterPassengerDetails = ({ data, userEmail }) => {
  const [passengerDetails, setPassengerDetails] = useState(
    Array.from({ length: Number(data.passengerscount) }, () => ({
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
    }))
  );

  const handleChange = (index, field, value) => {
    setPassengerDetails((prev) =>
      prev.map((passenger, i) =>
        i === index ? { ...passenger, [field]: value } : passenger
      )
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      journey: {
        origin: data.origin,
        destination: data.destination,
        date: data.date,
      },
      passengers: passengerDetails,
      user_email: userEmail,
    };
  
    try {
      const response = await axios.post(
        "http://localhost/flight/FlightBooking.php",
        formData,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true, // Ensure credentials are passed
        }
      );
  
      console.log("Data sent successfully:", response.data);
      alert("Journey and passenger details submitted successfully!");
    } catch (error) {
      console.error("Error submitting details:", error);
      alert("Failed to submit details. Please try again.");
    }
  };
  
  return (
    <form className="flex flex-col place-items-center py-4" onSubmit={handleSubmit}>
      {passengerDetails.map((passenger, index) => (
        <div key={index} className="flex gap-3">
          <input
            type="text"
            placeholder="First Name"
            className="border p-2 rounded-lg"
            value={passenger.firstName}
            onChange={(e) => handleChange(index, "firstName", e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border p-2 rounded-lg"
            value={passenger.lastName}
            onChange={(e) => handleChange(index, "lastName", e.target.value)}
          />
          <input
            type="number"
            placeholder="Age"
            className="border p-2 rounded-lg"
            value={passenger.age}
            onChange={(e) => handleChange(index, "age", e.target.value)}
          />
          <select
            className="border p-2 rounded-lg"
            value={passenger.gender}
            onChange={(e) => handleChange(index, "gender", e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
      ))}
      <button type="submit" className="bg-blue-700 text-white py-2 px-4 rounded-2xl mt-4">
        Submit
      </button>
    </form>
  );
};

export default EnterPassengerDetails;