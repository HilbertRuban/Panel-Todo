import React, { useState } from "react";
import Logout from "../utilitiesComponent/Logout";
import SignIn from "../utilitiesComponent/SignIn";
import SignUp from "../utilitiesComponent/SignUp";
export const UserSigned = React.createContext();
const UserInfo = () => {
  const [showSignedIn, setShowSignedIn] = useState(
    () => localStorage.getItem("userId") || 0
  );
  const [signUpClose, setSignUpClose] = useState(false);
  const [signInClose, setSignInClose] = useState(false);

  return (
    <>
      {!showSignedIn ? (
        <div className="ml-auto mr-8 pt-1">
          <SignUp setShowSignedIn={setShowSignedIn} signUpClose={signUpClose} />
          <SignIn
            setShowSignedIn={setShowSignedIn}
            signInClose={signInClose}
            setSignInClose={setSignInClose}
            setSignUpClose={setSignUpClose}
          />
        </div>
      ) : (
        <div className="ml-auto mr-4 pt-2">
          <SignUp setShowSignedIn={setShowSignedIn} signUpClose={signUpClose} />
          <Logout setShowSignedIn={setShowSignedIn} />
        </div>
      )}
    </>
  );
};

export default UserInfo;
