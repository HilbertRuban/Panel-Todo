import React, { useEffect, useRef, useState } from "react";
import TaskInput from "./TaskInput";
const TaskPad = () => {
  let a = [
    "hi",
    "dlad",
    "aenfkankj",
    "afnenafja",
    "aefnalnfk",
    "hqeodandk",
    "wndkjaenkjn",
    "daenajnj",
    "afnanfja",
  ];

  let list = a.map((item, index) => (
    <>
      <span className="relative top-20 left-[50px] font-bold text-[28px]">{`${
        index + 1
      })`}</span>
      <div className="text-[30px] ml-[105px] pb-[30px] flex flex-col relative top-9 font-[cursive]">
        <TaskInput />
      </div>
    </>
  ));

  return (
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
      <p className="text-center underline decoration-slice text-[30px] pb-12 text-[#581c87] tracking-wider font-serif relative top-12">
        Hilbert's Task
      </p>
      <div className="absolute top-[40px] z-10 left-[100px] w-[5px] h-[100%] bg-[#1a1a1a7c]"></div>
      {list}
    </div>
  );
};

export default TaskPad;
