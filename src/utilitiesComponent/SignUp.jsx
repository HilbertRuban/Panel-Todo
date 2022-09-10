import React, { useState } from "react";
import SignUpModal from "../components/SignUpModal";

const SignUp = ({ signUpClose }) => {
  const [signUpShow, setSignUpShow] = useState(false);

  return (
    <>
      <button
        onClick={() => setSignUpShow(!signUpShow)}
        className="font-serif font-semibold text-slate-500 mr-4 border-2  border-purple-300 p-2 rounded-md hover:bg-purple-200 hover:text-purple-800 active:bg-purple-300"
      >
        Sign up
      </button>
      {signUpShow && (
        <SignUpModal signUpClose={signUpClose} setSignUpShow={setSignUpShow} />
      )}
    </>
  );
};

export default SignUp;
