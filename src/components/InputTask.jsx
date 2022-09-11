import axios from "axios";
import React, { useContext, useState } from "react";
import TaskPad from "./TaskPad";
import { ToastContext } from "../App";
import { useEffect } from "react";
import { useCallback } from "react";

const InputTask = () => {
  const { userData } = useContext(ToastContext);
  const [term, setTerm] = useState([]);
  const [termValue, setTermValue] = useState([]);

  const handleChange = (e) => {
    setTerm(e.target.value);
  };
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    let data = {
      user_id: userData.id,
      task_input: term,
    };
    let userPost = axios.post("http://todo.localhost/api/task/new", data);
    userPost
      .then((resp) => {
        // console.log(resp)
      })
      .catch((err) => {
        console.log(err);
      });
    setTermValue(term);
    setTerm("");
  });

  useEffect(() => {
    let getUserData = async () => {
      let user_id = localStorage.getItem("userId");
      const response = await axios.get(
        `http://todo.localhost/api/task/${user_id}`
      );
      console.log(response, "alll");
    };

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
      <TaskPad />
    </>
  );
};

export default InputTask;
