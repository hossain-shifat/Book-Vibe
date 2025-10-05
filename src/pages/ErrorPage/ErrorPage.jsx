// src/pages/ErrorPage.jsx
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-4">
      <h1 className="text-9xl font-playfair font-bold mb-4">404</h1>
      <h2 className="text-3xl md:text-5xl font-work-sans mb-6">
        Oops! Page Not Found
      </h2>
      <p className="text-lg md:text-xl mb-8 text-center max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default ErrorPage;
