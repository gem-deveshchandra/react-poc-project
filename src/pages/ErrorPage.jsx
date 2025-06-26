// src/pages/ErrorPage.jsx
import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import { useEffect, useState } from "react";

const REDIRECT_SECONDS = 10;

const ErrorPage = () => {
  const error = useRouteError();
  const [countdown, setCountdown] = useState(REDIRECT_SECONDS);

  let title = "Something went wrong";
  let message = "An unexpected error occurred.";

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      title = "Page Not Found";
      message = "The page you're looking for doesn't exist.";
    } else if (error.status === 500) {
      title = "Server Error";
      message = "Something broke on our side. Please try again later.";
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          window.location.href = "/";
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e6f7f7] px-4 py-12">
      <div className="text-center max-w-xl space-y-6">
        <h1 className="text-4xl font-extrabold text-[#38a3a5]">{title}</h1>
        <p className="text-gray-700 text-md">{message}</p>

        <p className="text-sm text-gray-500">
          Redirecting to{" "}
          <a href="/" className="underline text-[#38a3a5]">
            home
          </a>{" "}
          in <span className="font-semibold">{countdown}</span> second
          {countdown !== 1 && "s"}...
        </p>

        <button
          onClick={() => (window.location.href = "/")}
          className="mt-4 bg-[#38a3a5] text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-[#2e8c8e] transition"
        >
          Go to Homepage Now
        </button>

        <div className="mt-10 text-xs text-gray-400">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
