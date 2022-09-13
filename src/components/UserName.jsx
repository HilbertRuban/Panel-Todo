import React, { useContext } from "react";
import { ToastContext } from "../App";

const UserName = ({ userData }) => {
  const { name, setName } = useContext(ToastContext);

  const renderName = () => {
    if (userData) {
      setName(
        Object.keys(userData).length !== 0 ? `Hi ${userData["name"]}` : null
      );
      return name;
    } else {
      return;
    }
  };
  return (
    <div className="relative bottom-[30px]">
      <h2 className="text-[35px] tracking-[2px] text-slate-500 font-serif">
        {console.log(userData, "yepppy")}
        {renderName()}
      </h2>
    </div>
  );
};

export default UserName;
