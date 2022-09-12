import axios from "axios";
import React, { useContext, useState } from "react";
import TaskPad from "./TaskPad";
import { ToastContext } from "../App";
import { useEffect } from "react";
import { useCallback } from "react";
import Toast from "../utilitiesComponent/Toast";

const InputTask = () => {
  const { message, setMessage, userData, userId, getData, setGetData } =
    useContext(ToastContext);
  const [term, setTerm] = useState([]);

  const handleChange = (e) => {
    setTerm(e.target.value);
  };
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (
      localStorage.getItem("userId") === "0" ||
      localStorage.getItem("userId") === null
    ) {
      // console.log(userId,'user if from inputTask')
      setMessage("You have to sign in to save your daily task");
      setTerm("");
      return <Toast message={message} />;
    }
    let data = {
      user_id: userData.id,
      task_input: term,
    };
    let userPost = axios.post("http://todo.localhost/api/task/new", data);
    userPost
      .then((resp) => {
        getUserData();
      })
      .catch((err) => {
        console.log(err);
      });
    setTerm("");
  });

  let getUserData = async () => {
    console.log(userId, "user id from input task");
    let user_id = localStorage.getItem("userId") || 0;
    const response = await axios.get(
      `http://todo.localhost/api/task/${user_id}`
    );
    // console.log(response,'response from input')
    setGetData(response.data.data);
  };

  useEffect(() => {
    localStorage.removeItem("userId");
    getUserData();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mt-4 md:mt-10">
          <input
            value={term}
            onChange={handleChange}
            className="font-bold tracking-[1.2px] p-2 md:text-2xl w-[400px] text-slate-700 border-2 md:w-[600px] md:p-3 rounded-md focus:outline-purple-300 placeholder:pl-5 placeholder:font-normal"
            type="text"
            placeholder="Write your task..."
          />
        </div>
      </form>
      <TaskPad usersData={getData} />
    </>
  );
};

export default InputTask;
