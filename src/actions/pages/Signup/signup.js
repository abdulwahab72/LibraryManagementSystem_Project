import React, { useState } from "react";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import axios from "../../../api/axios";
const Signup = () => {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
    password_confirmation: "",
  });
  const { email, password } = inputData;
  const onInputChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [password_confirmationError, setpassword_confirmationError] =
    useState("");
  const navigate = useNavigate("");
  const [show, setShow] = useState(false);
  const [showpassword_confirmation, setShowpassword_confirmation] =
    useState(false);
  // const email_regix = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i;

  const handleSubmit = async (e) => {
    e.preventDefault();
    // async function signup() {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/signup",
        inputData
      );
      alert("Successfull");
      setInputData({ email: "", password: "", password_confirmation: "" });
    } catch (error) {
      if (error.response.data && error.response.data.error)
        setEmailError(error.response.data.error.email);
      if (error.response.data && error.response.data.error)
        setPasswordError(error.response.data.error.password);
    }
    // }
    // if (inputData.email === "") {
    //   setEmailError("Email is not an empty");
    // }
    // // else if (
    // //   /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i.test(("#email").e())
    // // ) {
    // //   setEmailError("Your email is incorrect");
    // // }
    // else if (inputData.password === "") {
    //   setPasswordError("Password field is not an empty");
    // } else if (inputData.password.length < 8) {
    //   setPasswordError("Password length atleast eight characters");
    // } else if (inputData.password_confirmation === "") {
    //   setpassword_confirmationError("Confirm Password field is not an empty");
    // } else if (inputData.password !== inputData.password_confirmation) {
    //   setpassword_confirmationError("Password does not match");
    // } else if (
    //   inputData.email !== "" &&
    //   inputData.password !== "" &&
    //   inputData.password_confirmation !== "" &&
    //   inputData.password === inputData.password_confirmation
    // ) {
    //   localStorage.setItem("userDetail", JSON.stringify(inputData));
    //   navigate("/");
    // }
  };
  const handleClickShowPassword = () => {
    setShow(!show);
  };
  const handleClickShowpassword_confirmation = () => {
    setShowpassword_confirmation(!showpassword_confirmation);
  };
  return (
    <section class="bg-gray-100 dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form
              class="space-y-4 md:space-y-6"
              method="post"
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
                  name="email"
                  // value={inputData.email}
                  value={email}
                  // onChange={(e) =>
                  //   setInputData({
                  //     ...inputData,
                  //     [e.target.name]: e.target.value,
                  //   })
                  // }
                  onChange={(e) => onInputChange(e)}
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
                {emailError && (
                  <p className="text-xs text-red-700"> {emailError}</p>
                )}
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={show ? inputData.password : "password"}
                    name="password"
                    // value={inputData.password}
                    value={password}
                    // onChange={(e) =>
                    //   setInputData({
                    //     ...inputData,
                    //     [e.target.name]: e.target.value,
                    //   })
                    // }
                    onChange={(e) => onInputChange(e)}
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                  <div
                    onClick={handleClickShowPassword}
                    className="absolute right-[3%] top-[30%]"
                  >
                    {show ? <BiSolidShow /> : <BiSolidHide />}
                  </div>
                </div>
                {passwordError && (
                  <p className="text-xs text-red-700">{passwordError}</p>
                )}
              </div>
              <div>
                <label
                  for="password_confirmation"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <div className="relative">
                  <input
                    type={
                      showpassword_confirmation
                        ? inputData.password_confirmation
                        : "password"
                    }
                    name="password_confirmation"
                    value={inputData.password_confirmation}
                    // value={password_confirmation}
                    // onChange={(e) =>
                    //   setInputData({
                    //     ...inputData,
                    //     [e.target.name]: e.target.value,
                    //   })
                    // }
                    onChange={(e) => onInputChange(e)}
                    id="password_confirmation"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                  <div
                    onClick={handleClickShowpassword_confirmation}
                    className="absolute right-[3%] top-[30%]"
                  >
                    {showpassword_confirmation ? (
                      <BiSolidShow />
                    ) : (
                      <BiSolidHide />
                    )}
                  </div>
                </div>
                {password_confirmationError && (
                  <p className="text-xs text-red-700">
                    {password_confirmationError}
                  </p>
                )}
              </div>
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label
                    for="terms"
                    class="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <a
                      class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                // onClick={signup}
                class="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Create an account
              </button>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <a
                  href="/"
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
