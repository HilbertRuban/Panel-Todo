import React, { useContext, useEffect, useRef, useState } from "react";
import TaskInput from "./TaskInput";
import { ToastContext } from "../App";
import axios from "axios";
const TaskPad = ({ usersData }) => {
  const [dataId, setDataId] = useState([]);
  const [strikeValue, setStrikeValue] = useState(false);
  const { userData } = useContext(ToastContext);
  let showCancelSave = false;


  if(dataId.length) {
    showCancelSave = true;
  }

  let list = usersData.map((item, index) => (
    <div key={item.id}>
      <span className="relative top-[100px] left-[50px] font-bold text-[28px]">{`${
        index + 1
      })`}</span>
      <div className="text-[30px] ml-[105px] pb-[10px] flex flex-col relative top-1 font-[cursive]">
        <TaskInput
          strikeValue={strikeValue}
          setStrikeValue={setStrikeValue}
          dataId={dataId}
          setDataId={setDataId}
          item={item}
        />
      </div>
    </div>
  ));

  const handleSave = () => {
    let data = {
      id: dataId
    }
    const res = axios.delete('https://httpbin.org/delete', { data });

    let getUserData = async () => {
      const response = await axios.get(
        `http://todo.localhost/api/task/all`
      );
      console.log(response,'response from task pad ')
      setGetData(response.data.data);
    };
  }

  return (
    <>
      <div
        className="
      bg-[#FFF]
        rounded-tl-[30px]
        rounded-tr-[30px]
        w-[60%] 
        min-h-[500px]
        overflow-y-hidden
        relative
        border-purple-300
        border-l-[12px]
        border-r-[12px]
        border-b-[12px]
        rounded-[10px]
        z-0
        "
      >
        <div
          className="
            bg-purple-300
              absolute
              w-[100%]
              h-[40px]
              rounded-tl-[20px]
              rounded-tr-[20px]
          "
        ></div>
        {showCancelSave && (
          <div className="absolute top-[60px] right-3 z-10 transition-all duration-500">
            <button className=" p-[10px] text-gray-500 rounded mr-[15px] cursor-pointer hover:opacity-80 hover:bg-slate-400 hover:text-white transition-all duration-300">
              cancel
            </button>
            <button
              onClick={handleSave}
              className=" p-[10px] rounded cursor-pointer hover:opacity-80 hover:bg-blue-400 transition-all duration-300"
            >
              save
            </button>
          </div>
        )}

        <p className="text-center underline decoration-slice text-[30px] pb-12 text-[#581c87] tracking-wider font-serif relative top-12">
          {localStorage.getItem("userId") === null ||
          localStorage.getItem("userId") === "0"
            ? "New Task"
            : `${userData["name"]}'s Task`}
        </p>
        <div className="absolute top-[40px] md:top-[40px] z-10 left-[50px] md:left-[100px] w-[3px] md:w-[5px] h-[100%] bg-[#1a1a1a7c]"></div>
        {usersData.length ? (
          list
        ) : (
          <div className="ml-[130px] mt-[150px] md:mt-[150px] md:ml-[320px]">
            <p className="text-[25px] text-slate-300">No task found</p>
          </div>
        )}
      </div>
    </>
  );
};

export default TaskPad;
