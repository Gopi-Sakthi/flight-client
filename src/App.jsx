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
    passengerscount: "0",
  });

  const [userEmail, setUserEmail] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");

    if (storedEmail) {
      axios
        .post("http://localhost/flight/verifyUser.php", { email: storedEmail })
        .then((response) => {
          if (response.data.exists) {
            setUserEmail(storedEmail);
          } else {
            setUserEmail(null);
            localStorage.removeItem("userEmail");
            navigate("/signin");
          }
        })
        .catch(() => {
          setUserEmail(null);
          navigate("/signin");
        });
    } else {
      setUserEmail(null);
      navigate("/signin");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    setUserEmail(null);
    navigate("/signin");
  };

  if (!userEmail) return null;

  return (
    <>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white p-2 rounded"
      >
        Logout
      </button>
      <ShowPassengerList />
      <SearchForm setChildData={setFormData} />
      {formData.passengerscount > 0 && (
        <EnterPassengerDetails data={formData} userEmail={userEmail} />
      )}
    </>
  );
}

export default App;
