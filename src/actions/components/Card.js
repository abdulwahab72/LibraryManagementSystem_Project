import React from "react";
import { FaBookOpen } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { GoIssueClosed } from "react-icons/go";
import { PiStudentFill } from "react-icons/pi";

const Card = () => {
  const booksData = JSON.parse(localStorage.getItem("booksData")) || [];
  console.log(booksData)
  const studentsData = JSON.parse(localStorage.getItem("studentsData")) || [];
  const issueBookData =
    JSON.parse(localStorage.getItem("issueBooksData")) || [];
  const returnBookData =
    JSON.parse(localStorage.getItem("returnBooksData")) || [];
  //to check the objects in array.
  let count = 0;
  for (let i = 0; i < booksData.length; i++) {
    count++;
  }
  let studentCount = 0;
  for (let i = 0; i < studentsData.length; i++) {
    studentCount++;
  }
  let issueBookCount = 0;
  for (let i = 0; i < issueBookData.length; i++) {
    issueBookCount++;
  }
  let returnBookCount = 0;
  for (let i = 0; i < returnBookData.length; i++) {
    returnBookCount++;
  }
  const detail = [
    {
      name: "Total Books",
      number: count,
      icon: <FaBookOpen />,
      Link: "/availableBooks",
    },
    {
      name: "Total Students",
      number: studentCount,
      icon: <PiStudentFill />,
      Link: "/studentsList",
    },
    {
      name: "Issue Books",
      number: issueBookCount,
      icon: <GoIssueClosed />,
      Link: "/issueBookList",
    },
    {
      name: "Return Books",
      number: returnBookCount,
      icon: <GiReturnArrow />,
      Link: "/returnBookList",
    },
  ];
  return (
    <div className="grid grid-cols-4 gap-4 my-4 mr-4">
      {detail.map((item) => {
        return (
          <div class="block max-w-sm px-6 py-3 bg-gray-100 border text-center border-gray-600 transition-all duration-150 cursor-pointer shadow-md rounded-lg shadow hover:bg-gray-400 ">
            <div className="text-xl bg-gray-300 mx-24 rounded-full p-4">
              {item.icon}
            </div>
            <a href={item.Link}>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {item.name}
              </h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                {item.number}
              </p>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
