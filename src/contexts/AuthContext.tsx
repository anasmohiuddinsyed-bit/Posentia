import { createContext, useContext, useState, ReactNode } from "react";

interface User {
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    // Check localStorage for existing session
    const stored = localStorage.getItem("posentia_user");
    return stored ? JSON.parse(stored) : null;
  });

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simple demo auth - in production, this would call your backend
    // For now, just store in localStorage
    const users = JSON.parse(localStorage.getItem("posentia_users") || "{}");
    
    if (users[email] && users[email].password === password) {
      setUser({ email, name: users[email].name });
      localStorage.setItem("posentia_user", JSON.stringify({ email, name: users[email].name }));
      return true;
    }
    
    return false;
  };

  const signup = async (email: string, password: string, name: string): Promise<boolean> => {
    // Simple demo auth - in production, this would call your backend
    const users = JSON.parse(localStorage.getItem("posentia_users") || "{}");
    
    if (users[email]) {
      return false; // User already exists
    }
    
    users[email] = { password, name };
    localStorage.setItem("posentia_users", JSON.stringify(users));
    setUser({ email, name });
    localStorage.setItem("posentia_user", JSON.stringify({ email, name }));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("posentia_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

