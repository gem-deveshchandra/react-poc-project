// src/pages/ErrorPage.jsx
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="text-center max-w-md">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4">{title}</h1>
        <p className="text-gray-600 text-lg mb-6">{message}</p>

        <button
          onClick={() => (window.location.href = "/")}
          className="bg-blue-600 text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-blue-700 transition"
        >
          ⬅ Back to Home
        </button>

        <div className="mt-8 text-sm text-gray-400">
          If the problem persists, contact support.
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
