import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import SearchForm from "./components/SearchForm.jsx";
import Header from "./components/Header.jsx";
// import Logo from "./components/Logo.jsx";
import ShowPassengerList from "./components/ShowPassengerList.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import SignIn from "./components/SignIn.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/searchform" element={<SearchForm />} />
        <Route path="/header" element={<Header />} />
        <Route path="/showpassengers" element={<ShowPassengerList />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
