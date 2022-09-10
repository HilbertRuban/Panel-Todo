import React, { useState } from "react";
import Logout from "../utilitiesComponent/Logout";
import SignIn from "../utilitiesComponent/SignIn";
import SignUp from "../utilitiesComponent/SignUp";
export const UserSigned = React.createContext();
const UserInfo = () => {
  const [showSignedIn, setShowSignedIn] = useState(false);
  const [signUpClose, setSignUpClose] = useState(false);
  const [signInClose, setSignInClose] = useState(false);
  return (
    <>
      <UserSigned.Provider value={setShowSignedIn}>
        {!showSignedIn ? (
          <div className="ml-auto mr-8 pt-1">
            <SignUp signUpClose={signUpClose} />
            <SignIn
              signInClose={signInClose}
              setSignInClose={setSignInClose}
              setSignUpClose={setSignUpClose}
            />
          </div>
        ) : (
          <div className="ml-auto mr-4 pt-2">
            <SignUp signUpClose={signUpClose} />
            <Logout />
          </div>
        )}
      </UserSigned.Provider>
    </>
  );
};

export default UserInfo;
