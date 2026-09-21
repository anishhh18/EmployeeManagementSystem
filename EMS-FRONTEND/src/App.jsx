import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);

  const handleLogin = (email, password) => {
  if (
    authData &&
    authData.admin.find(
      (e) => email == e.email && password == e.password
    )
  ) {
    setUser("admin");

  } else if (
    authData &&
    authData.employees.find(
      (e) => email == e.email && password == e.password
    )
  ) {
    setUser("employee");

  } else {
    alert("Invalid credentials");
  }
};

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}

      {user === "admin" && <AdminDashboard />}

      {user === "employee" && <EmployeeDashboard />}
    </>
  );
}

export default App;
