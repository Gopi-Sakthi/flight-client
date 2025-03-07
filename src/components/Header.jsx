import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { useNavigate } from "react-router";

const Header = () => {
  const [showLogout, setShowLogout] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage) {
      setShowLogout(!showLogout);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    setShowLogout(!showLogout);
    navigate("/signIn");
  };

  return (
    <header className="flex justify-between items-center h-[10vh]">
      <Logo />
      {localStorage.getItem("userEmail") && (
        <div>
          <span className="py-3 px-5 bg-green-300 text-2xl text-white  rounded-3xl hover:bg-cyan-600 hover:font-bold hover:shadow animate-pulse">
            {localStorage.getItem("userEmail").charAt(0)}
          </span>
          <button
            onClick={handleLogout}
            className="bg-gray-400 text-white p-2 rounded mx-2 hover:bg-gray-600 hover:shadow-lg hover:shadow-red-300 cursor-pointer"
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
