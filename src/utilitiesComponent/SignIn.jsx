import React, { useState } from 'react'
import SignInModal from '../components/SignInModal'

const SignIn = () => {
    const[show, SetShow]  = useState(false)
  return (
    <>
        <button onClick={() => SetShow(!show)}
          className="font-serif font-semibold text-slate-500 border-2  border-purple-300 p-2 rounded-md hover:bg-purple-200 hover:text-purple-800 active:bg-purple-300"
        >
          Sign in
        </button>
        {show && <SignInModal />}
    </>
  )
}

export default SignIn