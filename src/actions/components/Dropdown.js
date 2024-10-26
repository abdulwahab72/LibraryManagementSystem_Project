import React from "react";
import { IoBookSharp } from "react-icons/io5";

const Dropdown = () => {
  const bookData = [
    {
      name: "Add Book by Name",
      Link: "/addBookbyNameForm",
    },
    {
      name: "Add Book by Author",
      Link: "/addBookbyAuthorForm",
    },
    {
      name: "Add Book by Category",
      Link: "/addBookbyCategoryForm",
    },
  ];
  const pathname = window.location.pathname;

  return (
    <div>
      <div id="dropdown" class="z-10 bg-white rounded-lg shadow w-44 ">
        <ul
          class="py-2 text-sm text-gray-700 "
          aria-labelledby="dropdownDefaultButton"
        >
          {bookData.map((item) => {
            return (
              <li>
                <a
                  href={item.Link}
                  class={`${
                    pathname === item.Link
                      ? "block px-4 py-2 hover:bg-gray-100 bg-gray-300 text-center text-gray-900 items-center p-2 group"
                      : "   flex items-center p-2 text-gray-900 text-center group"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
