import { useEffect, useState } from "react"
import Login from "./components/Auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage"

function App() {
    const [user,setUser] = useState(null)
    const handleLogin = (email,password)=>{
      if(email == "admin@gmail.com" && password == "123"){
        setUser("admin")
      }else if(email == "rahul@gmail.com" && password == "123"){
        setUser("employee")
      }else{
        alert("Invaild credentials")
      }
    }
  return (
      <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard/> : <EmployeeDashboard/> }
      </>
  )
}

export default App
