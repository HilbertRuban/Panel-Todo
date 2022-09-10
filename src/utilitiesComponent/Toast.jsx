import React from "react";

const Toast = ({ message, setMessage }) => {
  setTimeout(() => {
    setMessage("");
  }, 3000);
  return (
    <div className="flex justify-center">
      <div
        className={`fixed ${
          message
            ? "top-[16px] transition-all duration-[1000ms]"
            : "top-[-50px] transition-all duration-[1000ms]"
        }top-[-50px]  text-center font-serif tracking-[1px] bg-gradient-to-r from-cyan-300 to-blue-500 rounded-lg p-[10px] w-[600px] text-[20px]`}
      >
        {message}
      </div>
    </div>
  );
};

export default Toast;
