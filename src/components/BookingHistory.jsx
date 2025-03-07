import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "./Modal";
import ConfirmModal from "./ConfirmModal";

const BookingHistory = () => {
  const [journeys, setJourneys] = useState([]);
  const [selectedJourney, setSelectedJourney] = useState(null);
  const [deleteInfo, setDeleteInfo] = useState(null);
  const userEmail = localStorage.getItem("userEmail");

  useEffect(() => {
    axios
      .post("http://localhost/flight/getBookingHistory.php", {
        email: userEmail,
      })
      .then((response) => {
        if (response.data.success) setJourneys(response.data.bookings);
      })
      .catch(() => console.error("Error fetching booking history"));
  }, [userEmail]);

  const handleUpdateJourney = () => {
    axios
      .post("http://localhost/flight/updateJourney.php", selectedJourney)
      .then(() => {
        setJourneys(
          journeys.map((journey) =>
            journey.journey_id === selectedJourney.journey_id
              ? selectedJourney
              : journey
          )
        );
        setSelectedJourney(null);
      })
      .catch(() => alert("Failed to update journey"));
  };

  const handleDelete = () => {
    axios
      .post("http://localhost/flight/deleteJourney.php", {
        journey_id: deleteInfo.id,
      })
      .then(() => {
        setJourneys(journeys.filter((j) => j.journey_id !== deleteInfo.id));
        setDeleteInfo(null);
      })
      .catch(() => alert("Failed to delete journey"));
  };

  // Handle Passenger Changes
  const handlePassengerChange = (index, field, value) => {
    const updatedPassengers = [...selectedJourney.passengers];
    updatedPassengers[index] = { ...updatedPassengers[index], [field]: value };
    setSelectedJourney({ ...selectedJourney, passengers: updatedPassengers });
  };

  // Delete Passenger
  const handleDeletePassenger = (passengerId) => {
    axios
      .post("http://localhost/flight/deletePassenger.php", {
        passenger_id: passengerId,
      })
      .then(() => {
        setSelectedJourney({
          ...selectedJourney,
          passengers: selectedJourney.passengers.filter(
            (p) => p.passenger_id !== passengerId
          ),
        });
      })
      .catch(() => alert("Failed to delete passenger"));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Booking History</h2>

      {journeys.map((journey) => (
        <div
          key={journey.journey_id}
          className="border p-3 my-2 rounded flex gap-2 justify-between items-center"
        >
          <div className="p-1">
            <p>
              <b className="">Origin:</b> {journey.origin}
              <b>Destination:</b> {journey.destination}
            </p>
            <p></p>
            <p>
              <b>Date:</b> {journey.date}
            </p>
            <p>
              <b>Total Passengers:</b>
              {journey.passengers_count}
            </p>
          </div>

          {/* Passengers List */}
          <h3 className="font-bold mt-2">
            Passengers : {journey.passengers_count}
          </h3>
          {journey.passengers?.length > 0 ? (
            journey.passengers.map((passenger) => (
              <div
                key={passenger.passenger_id}
                className="flex gap-2 p-2 my-2 rounded bg-gray-100"
              >
                <p>
                  <b>Name:</b> {passenger.first_name} {passenger.last_name}
                </p>
                <p>
                  <b>Age:</b> {passenger.age}
                </p>
                <p>
                  <b>Gender:</b> {passenger.gender}
                </p>
              </div>
            ))
          ) : (
            <p className="ml-4 text-gray-500">No passengers added</p>
          )}

          <div className="flex gap-2 mt-2">
            <button
              onClick={() => setSelectedJourney(journey)}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => setDeleteInfo({ id: journey.journey_id })}
              className="bg-red-500 text-white p-2 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      {/* Edit Journey Modal */}
      {selectedJourney && (
        <Modal
          isOpen={!!selectedJourney}
          onClose={() => setSelectedJourney(null)}
          title="Edit Journey"
        >
          <div>
            <label>Origin</label>
            <input
              type="text"
              value={selectedJourney.origin}
              onChange={(e) =>
                setSelectedJourney({
                  ...selectedJourney,
                  origin: e.target.value,
                })
              }
              className="border w-full p-2"
            />
            <label>Destination</label>
            <input
              type="text"
              value={selectedJourney.destination}
              onChange={(e) =>
                setSelectedJourney({
                  ...selectedJourney,
                  destination: e.target.value,
                })
              }
              className="border w-full p-2"
            />
            <label>Date</label>
            <input
              type="date"
              value={selectedJourney.date}
              onChange={(e) =>
                setSelectedJourney({ ...selectedJourney, date: e.target.value })
              }
              className="border w-full p-2"
            />
          </div>

          {/* Passenger Section */}
          <h3 className="font-bold mt-4">Passengers</h3>
          {selectedJourney.passengers?.map((passenger, index) => (
            <div
              key={passenger.passenger_id}
              className="border p-3 rounded-lg space-y-2"
            >
              <input
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="First Name"
                value={passenger.first_name}
                onChange={(e) =>
                  handlePassengerChange(index, "first_name", e.target.value)
                }
              />
              <input
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="Last Name"
                value={passenger.last_name}
                onChange={(e) =>
                  handlePassengerChange(index, "last_name", e.target.value)
                }
              />
              <input
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="Age"
                type="number"
                value={passenger.age}
                onChange={(e) =>
                  handlePassengerChange(index, "age", e.target.value)
                }
              />
              <select
                className="w-full px-3 py-2 border rounded-lg"
                value={passenger.gender}
                onChange={(e) =>
                  handlePassengerChange(index, "gender", e.target.value)
                }
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <button
                className="bg-red-500 text-white p-2 rounded w-full"
                onClick={() => handleDeletePassenger(passenger.passenger_id)}
              >
                Delete Passenger
              </button>
            </div>
          ))}

          <div className="flex justify-end gap-4 mt-4">
            <button
              onClick={() => setSelectedJourney(null)}
              className="bg-gray-300 p-2 rounded"
            >
              Cancel
            </button>
            <button
              onClick={handleUpdateJourney}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Save
            </button>
          </div>
        </Modal>
      )}

      {/* Confirm Delete Modal */}
      <ConfirmModal
        isOpen={!!deleteInfo}
        onClose={() => setDeleteInfo(null)}
        onConfirm={handleDelete}
        message="Are you sure you want to delete this journey?"
      />
    </div>
  );
};

export default BookingHistory;
