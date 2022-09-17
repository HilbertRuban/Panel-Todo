import React, { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Hero from "./components/Hero";
import TaskSection from "./components/TaskSection";
import Toast from "./utilitiesComponent/Toast";
import axios from "axios";
export const ToastContext = React.createContext();

function App() {
  const [message, setMessage] = useState("");
  const [userData, setUserData] = useState([]);
  const [getData, setGetData] = useState([]);
  const [userId, setUserId] = useState(
    () => window.localStorage.getItem("userId") || 0
  );
  const [showSignedIn, setShowSignedIn] = useState(
    () => localStorage.getItem("userId") || 0
  );
  // const [userName, setUserName] = useState(localStorage.getItem("name") || "");
    console.log('setdata')
  useEffect(() => {
    setShowSignedIn(localStorage.removeItem("userId"));
    // setUserName(localStorage.removeItem("name"));
  }, []);

  return (
    <div
      className=" w-[100vw] max-h-[80px]
    bg-gradient-to-r from-white to-purple-100"
    >
      <ToastContext.Provider
        value={{
          setMessage,
          userData,
          setUserData,
          userId,
          setUserId,
          getData,
          setGetData,
          showSignedIn,
          setShowSignedIn,
          // userName,
          // setUserName,
        }}
      >
        <Hero />
        <TaskSection />
        <Toast message={message} setMessage={setMessage} />
      </ToastContext.Provider>
    </div>
  );
}
export default App;
