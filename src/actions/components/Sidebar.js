import React, { useState } from "react";
import { FaList } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { GoIssueClosed } from "react-icons/go";
import { IoBookSharp } from "react-icons/io5";
import { MdContactMail, MdMenuOpen } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { RiMenuFold2Fill } from "react-icons/ri";
import { SiAboutdotme } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const handleChange = () => {
    setIsOpen(!isOpen);
  };
  const handleChangeDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown);
  };
  const navigate = useNavigate("");
  const handleClick = () => {
    localStorage.removeItem("loggedUserDetail");
    navigate("/");
  };
  const pathname = window.location.pathname;
  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      {!isOpen ? (
        <div
          className=" flex text-white items-center cursor-pointer w-full mx-5 justify-between "
          onClick={handleChange}
        >
          <p>Menu</p>
          <RiMenuFold2Fill className="text-xl font-bold cursor-pointer" />
        </div>
      ) : (
        <aside
          id="default-sidebar"
          class=" top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div class="h-full px-3 py-4 overflow-y-auto bg-gray-100 dark:bg-gray-800">
            <ul class="space-y-2 font-medium">
              <li>
                <a
                  href="/home"
                  class={`${
                    pathname === "/home"
                      ? "bg-gray-300 text-gray-900 hover:text-white flex items-center p-2 rounded-lg hover:bg-gray-600 group"
                      : "   flex items-center p-2 text-gray-900  rounded-lg hover:bg-gray-100 group"
                  }`}
                >
                  <svg
                    class="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <div className="flex items-center justify-between w-full">
                    <span class="ms-3">Dashboard</span>
                    <MdMenuOpen
                      className="text-xl font-bold cursor-pointer"
                      onClick={handleChange}
                    />
                  </div>
                </a>
              </li>
              <div
                onClick={handleChangeDropdown}
                className={`${
                  isOpenDropdown
                    ? "bg-gray-300 flex items-center gap-3 cursor-pointer w-full text-gray-900 hover:text-white p-2 rounded-lg font-medium hover:bg-gray-600 group"
                    : "flex items-center gap-3 cursor-pointer w-full text-gray-900 hover:text-white p-2 rounded-lg font-medium hover:bg-gray-600 group"
                }`}
              >
                <IoBookSharp class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />

                <button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  class=" inline-flex items-center"
                  type="button"
                >
                  Add Book{" "}
                  <svg
                    class="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
              </div>{" "}
              {isOpenDropdown && <Dropdown />}
              {/* <li>
                <a
                  href="/addBookbyNameForm"
                  class={`${
                    pathname === "/addBookbyNameForm"
                      ? "bg-gray-300 text-gray-900 hover:text-white flex items-center p-2 rounded-lg hover:bg-gray-600 group"
                      : "   flex items-center p-2 text-gray-900  rounded-lg hover:bg-gray-100 group"
                  }`}
                >
                  <IoBookSharp class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />

                  <span class="flex-1 ms-3 whitespace-nowrap">
                    Add Book By Name
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/addBookbyAuthorForm"
                  class={`${
                    pathname === "/addBookbyAuthorForm"
                      ? "bg-gray-300 text-gray-900 hover:text-white flex items-center p-2 rounded-lg hover:bg-gray-600 group"
                      : "   flex items-center p-2 text-gray-900  rounded-lg hover:bg-gray-100 group"
                  }`}
                >
                  <IoBookSharp class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />

                  <span class="flex-1 ms-3 whitespace-nowrap">
                    Add Book By Author
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/addBookbyCategoryForm"
                  class={`${
                    pathname === "/addBookbyCategoryForm"
                      ? "bg-gray-300 text-gray-900 hover:text-white flex items-center p-2 rounded-lg hover:bg-gray-600 group"
                      : "   flex items-center p-2 text-gray-900  rounded-lg hover:bg-gray-100 group"
                  }`}
                >
                  <IoBookSharp class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />

                  <span class="flex-1 ms-3 whitespace-nowrap">
                    Add Book By Catagory
                  </span>
                </a>
              </li> */}
              <li>
                <a
                  href="/addStudentsForm"
                  class={`${
                    pathname === "/addStudentsForm"
                      ? "bg-gray-300 text-gray-900 hover:text-white flex items-center p-2 rounded-lg hover:bg-gray-600 group"
                      : "   flex items-center p-2 text-gray-900 hover:text-white rounded-lg hover:bg-gray-600 group"
                  }`}
                >
                  <PiStudentFill class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />

                  <span class="flex-1 ms-3 whitespace-nowrap">Add Student</span>
                </a>
              </li>
              <li>
                <a
                  href="/availableBooks"
                  class={`${
                    pathname === "/availableBooks"
                      ? "bg-gray-300 text-gray-900 hover:text-white flex items-center p-2 rounded-lg hover:bg-gray-600 group"
                      : "   flex items-center p-2 text-gray-900  rounded-lg hover:bg-gray-600 hover:text-white group"
                  }`}
                >
                  <FaList class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />

                  <span class="flex-1 ms-3 whitespace-nowrap">
                    Show Available Books
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/studentsList"
                  class={`${
                    pathname === "/studentsList"
                      ? "bg-gray-300 text-gray-900 hover:text-white flex items-center p-2 rounded-lg hover:bg-gray-600 group"
                      : "   flex items-center p-2 text-gray-900  rounded-lg hover:bg-gray-600 hover:text-white group"
                  }`}
                >
                  <FaList class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />

                  <span class="flex-1 ms-3 whitespace-nowrap">
                    Show Students List
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/issueBookForm"
                  class={`${
                    pathname === "/issueBookForm"
                      ? "bg-gray-300 text-gray-900 hover:text-white flex items-center p-2 rounded-lg hover:bg-gray-600 group"
                      : "   flex items-center p-2 text-gray-900  rounded-lg hover:bg-gray-600 hover:text-white group"
                  }`}
                >
                  <GoIssueClosed class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />

                  <span class="flex-1 ms-3 whitespace-nowrap">
                    Issue Book Form
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/issueBookList"
                  class={`${
                    pathname === "/issueBookList"
                      ? "bg-gray-300 text-gray-900 hover:text-white flex items-center p-2 rounded-lg hover:bg-gray-600 group"
                      : "   flex items-center p-2 text-gray-900  rounded-lg hover:bg-gray-600 hover:text-white group"
                  }`}
                >
                  <GoIssueClosed class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />

                  <span class="flex-1 ms-3 whitespace-nowrap">
                    Issue Book List
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/returnBookForm"
                  class={`${
                    pathname === "/returnBookForm"
                      ? "bg-gray-300 text-gray-900 hover:text-white flex items-center p-2 rounded-lg hover:bg-gray-600 group"
                      : "   flex items-center p-2 text-gray-900  rounded-lg hover:bg-gray-600 hover:text-white group"
                  }`}
                >
                  <GiReturnArrow class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />

                  <span class="flex-1 ms-3 whitespace-nowrap">
                    Return Book Form
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/returnBookList"
                  class={`${
                    pathname === "/returnBookList"
                      ? "bg-gray-300 text-gray-900 hover:text-white flex items-center p-2 rounded-lg hover:bg-gray-600 group"
                      : "   flex items-center p-2 text-gray-900  rounded-lg hover:bg-gray-600 hover:text-white group"
                  }`}
                >
                  <GiReturnArrow class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />

                  <span class="flex-1 ms-3 whitespace-nowrap">
                    Return Book List
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-600 hover:text-white group"
                >
                  <MdContactMail class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />

                  <span class="flex-1 ms-3 whitespace-nowrap">Contact us</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-600 hover:text-white hover:bg-gray-100 group"
                >
                  <SiAboutdotme class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />

                  <span class="flex-1 ms-3 whitespace-nowrap">About us</span>
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  href="#"
                  class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-600 hover:text-white group"
                >
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                    />
                  </svg>
                  <span class="flex-1 ms-3 whitespace-nowrap">Sign Out</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      )}
    </div>
  );
};

export default Sidebar;
