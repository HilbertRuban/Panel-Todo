import React from "react";

const UserName = ({ userData }) => {
  return (
    <div className="relative bottom-[30px]">
      <h2 className="text-[35px] tracking-[2px] text-slate-500 font-serif">
        {Object.keys(userData).length !== 0 ? `Hi ${userData["name"]}` : null}
      </h2>
    </div>
  );
};

export default UserName;
