import axios from "axios";
import React, { useEffect, useState } from "react";
import Toast from "../utilitiesComponent/Toast";
import { ToastContext } from "../App";
import { useContext } from "react";

const SignUpModal = ({ setShowSignedIn, setSignUpShow, signUpClose }) => {
  const { setMessage, setUserData, userId, setUserId, setGetData } =
    useContext(ToastContext);

  const [signUp, setSignUp] = useState({
    username: "",
    email: "",
    password: "",
  });
  const onSignupCloseHandle = () => {
    setSignUpShow(false);
  };

  const getUserData = async () => {
    let user_id = localStorage.getItem("userId") || 0;
    const response = await axios.get(
      `http://todo.localhost/api/task/${user_id}`
    );
    console.log(response, "response from signup");
    setGetData(response.data.data);
  };

  const { username, email, password } = signUp;
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserId(window.localStorage.removeItem("userId"));
    const data = {
      username,
      email,
      password,
      verified: 1,
    };
    let a = axios.post("http://todo.localhost/api/users/signup", data);
    a.then((resp) => {
      setSignUpShow(false);
      setMessage(resp.data.message);

      setUserData(resp.data.user);
      setUserId(window.localStorage.setItem("userId", resp.data.user.id));
      if (resp.data.message === "Registered successfully") {
        setShowSignedIn(resp.data.user.id);
        getUserData();
      }
    }).catch((err) => {
      console.log(err);
    });
  };

  return (
    <>
      {!signUpClose ? (
        <>
          <div className="fixed top-0 left-0 right-0 bottom-0 z-10 bg-[rgba(0,0,0,0.6)] h-screen w-screen"></div>
          <div
            id="authentication-modal"
            tabIndex="-1"
            className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex"
            aria-modal="true"
            role="dialog"
          >
            <div className="relative p-4 w-full max-w-md h-full md:h-auto">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                  type="button"
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  data-modal-toggle="authentication-modal"
                >
                  <svg
                    onClick={onSignupCloseHandle}
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
                <div className="py-6 px-6 lg:px-8">
                  <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                    Register
                  </h3>
                  <form className="space-y-6" action="#">
                    <div>
                      <label
                        htmlFor="username"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Your username
                      </label>
                      <input
                        type="text"
                        value={signUp.username}
                        onChange={(e) =>
                          setSignUp({ ...signUp, username: e.target.value })
                        }
                        name="username"
                        id="username"
                        className="peer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        value={signUp.email}
                        onChange={(e) =>
                          setSignUp({ ...signUp, email: e.target.value })
                        }
                        name="email"
                        id="email"
                        className="peer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="name@company.com"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Your password
                      </label>
                      <input
                        type="password"
                        value={signUp.password}
                        onChange={(e) =>
                          setSignUp({ ...signUp, password: e.target.value })
                        }
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Register your account
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default SignUpModal;
