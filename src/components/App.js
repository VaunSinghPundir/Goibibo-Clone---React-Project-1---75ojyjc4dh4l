import "../styles/App.css";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Navbar/Navbar";
import {Signup } from "./pages/Signup.jsx"
import { Login } from "./pages/Login.jsx";
import { createContext, useContext, useState } from "react";
import { faL } from "@fortawesome/free-solid-svg-icons";
import Flight from "./Flights/Flight.jsx";

export const AuthContext = createContext();

function App() {
  // let isUserLoggedIn;
  const isUserLoggedIn = sessionStorage.getItem("userToken") ? true: false
  // if(token){
  //   isUserLoggedIn(true)
  // }
  // else{
  //   isUserLoggedIn(false)
  // }
  const [isLoggedIn, setIsLoggedIn] = useState(isUserLoggedIn)
  return (
    <div className="App-container">
      {/* navbar */}
      <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
      <Navbar/>
      <Routes>
        <Route path="/flight" element={<Flight/>}/>
        <Route path="/hotel" element={<h3>Hotels</h3>}/>
        <Route path="/train" element={<h3>Trains</h3>}/>
        <Route path="/bus" element={<h3>Buses</h3>}/>
        <Route path="/" element={<h3>Home</h3>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>

      </Routes>
      </AuthContext.Provider>
    </div>
  )
}

export default App;
