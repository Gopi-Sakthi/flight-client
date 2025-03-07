import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="text-center  content-center w-full h-[100vh] text-3xl">
      <p>404 Page Not Found</p> <br />
      <p className="text-xs text-blue-500">
        <Link to="/">Go Home</Link>
      </p>
    </div>
  );
};

export default ErrorPage;
