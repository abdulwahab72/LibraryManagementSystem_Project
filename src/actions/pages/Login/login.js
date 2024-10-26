import React, { useState } from "react";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import axios from "../../../api/axios";
const Login = () => {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputData;
  const onInputChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const validateForm = () => {
    return inputData.email.length > 0 && inputData.pass.length > 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/login",
        inputData
      );
      localStorage.setItem("users", response.data);
      if (
        response.data &&
        response.data.message !== "not match" &&
        password !== ""
      ) {
        localStorage.setItem("loggedUserDetail", true);
        navigate("/home");
      } else if (response.data && response.data === "not match")
        alert("Complete all fields");
    } catch (error) {
      if (email === "")
        setEmailError("Email cannot be empty, please fill this field");
      else if (password === "")
        setPassError("Password field cannot be empty, please fill the field");
      else if (error.response.data && error.response.data.message)
        setError(error.response.data.message);
      else setError({ general: "An error occured, please try again" });
    }
  };
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <section class="bg-gray-100 dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Log in to your account
            </h1>
            <form
              class="space-y-4 md:space-y-6"
              action="#"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  autoFocus
                  name="email"
                  value={email}
                  onChange={(e) => onInputChange(e)}
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                  pattern="/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i"
                />

                {emailError && (
                  <p className="text-xs text-red-700">{emailError}</p>
                )}
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <div className="flex items-center relative">
                  <input
                    type={show ? inputData.password : "password"}
                    value={password}
                    name="password"
                    onChange={(e) => onInputChange(e)}
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                  <div onClick={handleClick} className="absolute right-2">
                    {show ? <BiSolidShow /> : <BiSolidHide />}
                  </div>
                </div>

                {error && <p className="text-xs text-red-700">{error}</p>}
                {passError && (
                  <p className="text-xs text-red-700">{passError}</p>
                )}

                {error.general && (
                  <p className="text-xs text-red-700">{error.general}</p>
                )}
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label
                      for="remember"
                      class="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                class="w-full text-white bg-gray-500 hover:bg-gray-800 cursor-pointer focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <a
                  href="/signup"
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
