// import React, { useContext } from "react";
// import { useState } from "react";
// import { ToastContext } from "../App";

// const UserName = ({ userData }) => {
//   const { userName, setUserName } = useContext(ToastContext);

//   // const renderName = () => {
//   //   if (userData && Object.keys(userData).length) {
//   //     // setName(
//   //     //   Object.keys(userData).length !== 0 ? `Hi ${userData["name"]}` : null
//   //     // );
//   //     setName(userData['name']);
//   //     // return name;
//   //   } else {
//   //     return;
//   //   }
//   // };

//   // setName(
//   //   Object.keys(userData).length !== 0 ? `Hi ${userData["name"]}` : null
//   // );
//   // return name;
//   let setLocalStorageName =
//     userData && Object.keys(userData).length ? `Hi ${userData["name"]}` : "";
//   setUserName(window.localStorage.setItem("name", setLocalStorageName));

//   return (
//     <div className="relative bottom-[30px]">
//       <h2 className="text-[35px] tracking-[2px] text-slate-500 font-serif">
//         {console.log(userData, "yepppy")}
//         {localStorage.getItem("name")}
//       </h2>
//     </div>
//   );
// };

// export default UserName;
