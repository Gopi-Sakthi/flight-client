import { useEffect, useState } from "react";
import axios from "axios";

const EnterPassengerDetails = ({ data, userEmail }) => {
  const [message, setMessage] = useState("");
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
      setMessage("Booking successful! Happy Journey");
      console.log("Data sent successfully:", response.data);
    } catch (error) {
      console.error("Error submitting details:", error);
    }
  };

  return (
    <div className="text-center">
      <form
        className="flex flex-col place-items-center py-4"
        onSubmit={handleSubmit}
      >
        {passengerDetails.map((passenger, index) => (
          <div key={index} className="flex gap-3 mb-2">
            <input
              type="text"
              placeholder="First Name"
              className="border p-2 rounded-lg"
              value={passenger.firstName}
              onChange={(e) => handleChange(index, "firstName", e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border p-2 rounded-lg"
              value={passenger.lastName}
              onChange={(e) => handleChange(index, "lastName", e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Age"
              className="border p-2 rounded-lg"
              value={passenger.age}
              onChange={(e) => handleChange(index, "age", e.target.value)}
              required
            />
            <select
              className="border p-2 rounded-lg"
              value={passenger.gender}
              onChange={(e) => handleChange(index, "gender", e.target.value)}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-700 text-white py-2 px-4 rounded-2xl mt-4"
        >
          Confirm
        </button>
      </form>
      <p className="text-green-500 animate-[bounce_1s_ease-in-out_infinite] ">
        {message}
      </p>
    </div>
  );
};

export default EnterPassengerDetails;
