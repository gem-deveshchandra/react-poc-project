import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Loader  } from "lucide-react";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setError("");

    setTimeout(() => {
      const isSuccess = login(username, password);
      setLoading(false);

      if (isSuccess) {
        navigate("/");
      } else {
        setError("Invalid username or password");
      }
    }, 800);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white p-8 rounded-xl shadow-xl w-96">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-800">
          HR Dashboard Login
        </h2>

        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}

        <input
          type="text"
          placeholder="Username"
          className={`w-full p-3 border ${
            error ? "border-red-500" : "border-gray-300"
          } rounded mb-4 focus:outline-none focus:ring-2 ${
            error ? "focus:ring-red-300" : "focus:ring-blue-400"
          }`}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className={`w-full p-3 border ${
            error ? "border-red-500" : "border-gray-300"
          } rounded mb-4 focus:outline-none focus:ring-2 ${
            error ? "focus:ring-red-300" : "focus:ring-blue-400"
          }`}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className={`w-full bg-blue-600 text-white font-semibold py-3 rounded transition hover:bg-blue-700 flex justify-center items-center ${
            loading ? "cursor-not-allowed opacity-75" : ""
          }`}
        >
          {loading ? <Loader  className="animate-spin h-5 w-5" /> : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Login;
