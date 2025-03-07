import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import EnterPassengerDetails from "./components/EnterPassengerDetails";
import SearchForm from "./components/SearchForm";
import ShowPassengerList from "./components/ShowPassengerList";

function App() {
  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    date: "",
    passengerscount: 0,
  });

  const [userEmail, setUserEmail] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");

    if (!storedEmail) {
      navigate("/signin");
    }
    setUserEmail(storedEmail);
  }, [navigate]);

  if (!userEmail) return null;

  return (
    <div className="h-[90vh] w-auto shadow">
      <ShowPassengerList />
      <SearchForm setChildData={setFormData} />
      {formData.passengerscount > 0 && (
        <EnterPassengerDetails data={formData} userEmail={userEmail} />
      )}
    </div>
  );
}

export default App;
