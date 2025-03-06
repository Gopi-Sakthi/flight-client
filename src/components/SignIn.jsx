import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { validateSignUp } from "./common";
import Logo from "./Logo";

const SignIn = () => {
  const [signIn, setSignIn] = useState(true);
  const [message, setMessage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validData = () => {
    if (!signIn) {
      const message = validateSignUp(
        formData.name,
        formData.email,
        formData.password
      );
      setMessage(message);
      return message;
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validData();

    if (validationError === null) {
      try {
        const endpoint = signIn ? "signin.php" : "signup.php";
        const response = await axios.post(
          `http://localhost/flight/${endpoint}`,
          formData,
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        if (response.data.success) {
          if (signIn) {
            localStorage.setItem("userEmail", formData.email);
            navigate("/searchform");
          } else {
            setSignIn(true);
            setMessage("Sign Up successful! Please Sign In.");
            setFormData({ name: "", email: "", password: "" });
          }
        } else {
          setMessage(response.data.message);
        }
      } catch (error) {
        setMessage("Failed to connect to server. Try again later.");
      }
    }
  };

  return (
    <div className="flex flex-col items-center">
      <Logo />
      <div className="grid justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-[500px] h-[500px] rounded-2xl items-center text-center place-content-center bg-[url(https://c4.wallpaperflare.com/wallpaper/417/287/725/flight-wallpaper-preview.jpg)] text-white"
        >
          <h2 className="text-xl font-bold py-2">
            {signIn ? "Sign In" : "Sign Up"}
          </h2>

          {!signIn && (
            <input
              name="name"
              type="text"
              placeholder="Enter name"
              className="border rounded-lg p-2 my-1"
              value={formData.name}
              onChange={handleChange}
              required
            />
          )}

          <input
            name="email"
            type="email"
            placeholder="Enter email"
            className="border rounded-lg p-2 my-1"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Enter password"
            className="border rounded-lg p-2 my-1"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <p className="text-red-500 text-sm max-w-52">{message}</p>

          <button
            type="submit"
            className="border rounded-lg p-2 my-1 hover:bg-blue-500 hover:text-white"
          >
            {signIn ? "Sign In" : "Sign Up"}
          </button>

          <p
            onClick={() => {
              setSignIn(!signIn);
              setMessage(null);
              setFormData({ name: "", email: "", password: "" });
            }}
            className="hover:text-red-400 cursor-pointer"
          >
            {signIn ? "New User? Sign Up" : "Already a user? Sign In"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
