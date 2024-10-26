import React from "react";

const Header = () => {
  return (
    <div>
      <header>
        <nav class="bg-gray-100 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div class="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl">
            <a href="/home" class="flex items-center">
              <span class="text-xl font-semibold whitespace-nowrap dark:text-white">
                Library Management System
              </span>
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
