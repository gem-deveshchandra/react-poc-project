import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

const validUsers = [
  { username: "admin", password: "admin123" },
  { username: "hruser", password: "hr@2025" },
];

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = sessionStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  
  const login = (username, password) => {
    const match = validUsers.find(
      (u) => u.username === username && u.password === password
    );
    if (match) {
      setUser({ username });
      sessionStorage.setItem("user", JSON.stringify({ username }));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
