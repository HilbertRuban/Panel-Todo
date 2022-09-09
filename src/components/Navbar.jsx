import React, { useState } from "react";
import UserInfo from "./UserInfo";

const Navbar = () => {
  const [showSignedIn, setShowSignedIn] = useState(false);
  return (
    <nav className="md:flex pt-3">
      <header className="pl-3 ">
        <p className="tracking-wider px-5 text-slate-500 font-semibold ">
          <span className="text-[25px] text-purple-300 font-serif font-extrabold tracking-widest">
            NOTES
          </span>
          ify
        </p>
      </header>
      <UserInfo signedIn={showSignedIn}/>
    </nav>
  );
};

export default Navbar;
