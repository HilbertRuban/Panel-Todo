import React, { useEffect, useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import TaskSection from "./components/TaskSection";
import Toast from "./utilitiesComponent/Toast";
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
  useEffect(() => {
    setShowSignedIn(localStorage.removeItem("userId"));
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
