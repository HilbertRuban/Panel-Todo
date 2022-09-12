import React, { useState } from "react";
import SignInModal from "../components/SignInModal";

const SignIn = ({ signInClose, setSignInClose, setSignUpClose }) => {
  const [signInShow, setSignInShow] = useState(false);
  const openModal = () => {
    setSignInShow(!signInShow);
  };
  return (
    <>
      <button
        onClick={openModal}
        className="font-serif font-semibold text-slate-500 border-2  border-purple-300 p-2 rounded-md hover:bg-purple-200 hover:text-purple-800 active:bg-purple-300"
      >
        Sign in
      </button>
      {signInShow && (
        <SignInModal
          signInClose={signInClose}
          setSignInClose={setSignInClose}
          setSignUpClose={setSignUpClose}
          setSignInShow={setSignInShow}
        />
      )}
    </>
  );
};

export default SignIn;
