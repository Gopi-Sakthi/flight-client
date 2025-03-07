import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./components/Header.jsx";
import ShowPassengerList from "./components/ShowPassengerList.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import SignIn from "./components/SignIn.jsx";
import BookingHistory from "./components/BookingHistory.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/showpassengers" element={<ShowPassengerList />} />
        <Route path="/bookinghistory" element={<BookingHistory />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

{
  /* <Route path="/searchform" element={<SearchForm />} /> */
}
{
  /* <Route path="/header" element={<Header />} /> */
}
