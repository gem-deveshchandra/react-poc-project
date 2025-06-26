import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Loader } from "lucide-react";

import logoIcon from "../assets/Logo1.png"; 
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
    <div className="flex min-h-screen bg-[#e6f7f7]">
      <div className="flex-1 bg-[#38a3a5] flex items-center justify-center p-12">
        <img
          src={logoIcon}
          alt="Logo Icon"
          className="h-80 w-auto drop-shadow-lg"
        />
      </div>


      <div className="flex-1 flex items-center justify-center p-12">
        <div className="bg-white rounded-xl shadow-xl p-10 w-full max-w-md">
          <h2 className="text-3xl font-extrabold text-[#38a3a5] mb-6 text-center">
            HR Dashboard
          </h2>

          {error && (
            <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
          )}

          <input
            type="text"
            placeholder="Username"
            className={`w-full p-3 border rounded mb-4 focus:outline-none focus:ring-2 ${
              error
                ? "border-red-500 focus:ring-red-300"
                : "border-gray-300 focus:ring-[#38a3a5]"
            }`}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className={`w-full p-3 border rounded mb-4 focus:outline-none focus:ring-2 ${
              error
                ? "border-red-500 focus:ring-red-300"
                : "border-gray-300 focus:ring-[#38a3a5]"
            }`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            disabled={loading}
            className={`w-full bg-[#38a3a5] text-white font-semibold py-3 rounded transition hover:bg-[#2e8c8e] flex justify-center items-center ${
              loading ? "cursor-not-allowed opacity-75" : ""
            }`}
          >
            {loading ? <Loader className="animate-spin h-5 w-5" /> : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
