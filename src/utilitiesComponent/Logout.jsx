import axios from "axios";
import React, { useContext } from "react";
import { ToastContext } from "../App";

const Logout = ({ setShowSignedIn }) => {
  const { setGetData, setName,name } = useContext(ToastContext);
  const logoutSubmit = (e) => {
    e.preventDefault();
    setShowSignedIn(localStorage.setItem("userId", 0));
    const getUserData = async () => {
      let user_id = 0;
      const response = await axios.get(
        `http://todo.localhost/api/task/${user_id}`
        );
        setName(response.data.data.name || '');  
        setGetData(response.data.data);
      };
      getUserData();
    };
  return (
    <>
      <button
        onClick={logoutSubmit}
        className="font-serif font-semibold text-slate-500 mr-4 border-2  border-purple-300 p-2 rounded-md hover:bg-purple-200 hover:text-purple-800 active:bg-purple-300"
      >
        Logout
      </button>
    </>
  );
};

export default Logout;
