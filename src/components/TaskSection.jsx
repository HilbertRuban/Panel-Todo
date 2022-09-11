import React from "react";
import InputTask from "./InputTask";
import TaskPad from "./TaskPad";

const TaskSection = () => {
  return (
    <div className="flex justify-center items-center gap-7 flex-col mt-[-150px] overflow-x-hidden pb-[10px]">
      <InputTask />
    </div>
  );
};

export default TaskSection;
