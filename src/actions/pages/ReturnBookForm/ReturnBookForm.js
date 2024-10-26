import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";

const ReturnBookForm = () => {
  const [returnBookData, setReturnBookData] = useState({
    studentName: "",
    fatherName: "",
    facultyName: "",
    courseName: "",
    bookName: "",
    studentID: "",
    issueDate: "",
  });
  const returnBookFormData =
    JSON.parse(localStorage.getItem("returnBookFormData")) || [];
  const [studentNameError, setStudentNameError] = useState("");
  const [fatherNameError, setFatherNameError] = useState("");
  const [facultyNameError, setFacultyNameError] = useState("");
  const [courseNameError, setCourseNameError] = useState("");
  const [bookNameError, setBookNameError] = useState("");
  const [studentIDError, setStudentIDError] = useState("");
  const [issueDateError, setIssueDateError] = useState("");
  //   const bookData = JSON.parse(localStorage.getItem("BookDataByName")) || [];
  //   const studentData = JSON.parse(localStorage.getItem("studentData")) || [];
  returnBookFormData.push(returnBookData);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      localStorage.getItem("issueBookFormData") === null ||
      returnBookData.studentName === "" ||
      returnBookFormData.forEach(
        (student) => returnBookData.studentName !== student.studentName
      )
    ) {
      setStudentNameError(
        `${
          localStorage.getItem("issueBookFormData") === null
            ? "There is an error"
            : returnBookData.studentName === ""
            ? "This field can't empty"
            : "This student name is not registered"
        }`
      );
    } else if (
      localStorage.getItem("issueBookFormData") === null ||
      returnBookData.fatherName === "" ||
      returnBookFormData.forEach(
        (student) => returnBookData.fatherName !== student.fatherName
      )
    ) {
      setFatherNameError(
        `${
          localStorage.getItem("issueBookFormData") === null
            ? "There is an error"
            : returnBookData.fatherName === ""
            ? "This field can't empty"
            : "This father name is not registered"
        }`
      );
    } else if (
      localStorage.getItem("issueBookFormData") === null ||
      returnBookData.facultyName === "" ||
      returnBookFormData.forEach(
        (student) => returnBookData.facultyName !== student.facultyName
      )
    ) {
      setFacultyNameError(
        `${
          localStorage.getItem("issueBookFormData") === null
            ? "There is an error"
            : returnBookData.facultyName === ""
            ? "This field can't empty"
            : "This faculty name is not registered"
        }`
      );
    } else if (
      localStorage.getItem("issueBookFormData") === null ||
      returnBookData.courseName === "" ||
      returnBookFormData.forEach(
        (student) => returnBookData.courseName !== student.courseName
      )
    ) {
      setCourseNameError(
        `${
          localStorage.getItem("issueBookFormData") === null
            ? "There is an error"
            : returnBookData.courseName === ""
            ? "This field can't empty"
            : "This course name is not registered"
        }`
      );
    } else if (
      (localStorage.getItem("issueBookFormData") === null &&
        returnBookFormData.forEach(
          (student) => returnBookData.bookName !== student.bookName
        )) ||
      returnBookData.bookName === ""
    ) {
      setBookNameError(
        `${
          localStorage.getItem("issueBookFormData") === null
            ? "There is an error"
            : returnBookData.bookName === ""
            ? "This field can't empty"
            : // : bookData.some((book) => issueBookData.bookName !== book.bookName)
              "This book name is not registered"
          // : ""
        }`
      );
    } else if (
      localStorage.getItem("issueBookFormData") === null ||
      returnBookData.studentID === "" ||
      returnBookFormData.forEach(
        (student) => returnBookData.studentID !== student.studentID
      )
    ) {
      setStudentIDError(
        `${
          localStorage.getItem("issueBookFormData") === null
            ? "There is an error"
            : returnBookData.studentID === ""
            ? "This field can't empty"
            : "This student id is not registered"
        }`
      );
    } else if (
      localStorage.getItem("issueBookFormData") === null ||
      returnBookData.issueDate === "" ||
      returnBookFormData.forEach(
        (student) => returnBookData.issueDate !== student.issueDate
      )
    ) {
      setIssueDateError(
        `${
          localStorage.getItem("issueBookFormData") === null
            ? "There is an error"
            : returnBookData.issueDate === ""
            ? "This field can't empty"
            : "This issue date is not registered"
        }`
      );
    } else if (
      localStorage.getItem("issueBookFormData") !== null &&
      returnBookFormData.some(
        (student) => returnBookData.studentName === student.studentName
      ) &&
      returnBookData.studentName !== "" &&
      returnBookFormData.some(
        (student) => returnBookData.fatherName === student.fatherName
      ) &&
      returnBookData.fatherName !== "" &&
      returnBookFormData.some(
        (student) => returnBookData.facultyName === student.facultyName
      ) &&
      returnBookData.facultyName !== "" &&
      returnBookFormData.some(
        (student) => returnBookData.courseName === student.courseName
      ) &&
      returnBookData.courseName !== "" &&
      returnBookFormData.some(
        (student) => returnBookData.bookName === student.bookName
      ) &&
      returnBookData.bookName !== "" &&
      returnBookFormData.some(
        (student) => returnBookData.studentID === student.studentID
      ) &&
      returnBookData.studentID !== "" &&
      returnBookFormData.some(
        (student) => returnBookData.issueDate === student.issueDate
      ) &&
      returnBookData.returnDate !== ""
    ) {
      alert("data ok hy");
      localStorage.setItem(
        "returnBookFormData",
        JSON.stringify(returnBookFormData)
      );
    }
  };
  return (
    <div className="bg-gray-100 h-screen flex gap-4">
      <div>
        <Sidebar />
      </div>
      <div className="w-full m-4 space-y-10">
        <form class="" onSubmit={handleSubmit}>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="studentName"
              id="studentName"
              value={returnBookData.studentName}
              onChange={(e) =>
                setReturnBookData({
                  ...returnBookData,
                  [e.target.name]: e.target.value,
                })
              }
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            {studentNameError && (
              <p className="text-xs text-red-700">{studentNameError}</p>
            )}

            <label
              for="studentName"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Student Name
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="fatherName"
              id="fatherName"
              value={returnBookData.fatherName}
              onChange={(e) =>
                setReturnBookData({
                  ...returnBookData,
                  [e.target.name]: e.target.value,
                })
              }
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            {fatherNameError && (
              <p className="text-xs text-red-700">{fatherNameError}</p>
            )}

            <label
              for="fatherName"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Father Name
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="facultyName"
              id="facultyName"
              value={returnBookData.facultyName}
              onChange={(e) =>
                setReturnBookData({
                  ...returnBookData,
                  [e.target.name]: e.target.value,
                })
              }
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            {facultyNameError && (
              <p className="text-xs text-red-700">{facultyNameError}</p>
            )}

            <label
              for="facultyName"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Faculty Name
            </label>
          </div>
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="courseName"
                id="courseName"
                value={returnBookData.courseName}
                onChange={(e) =>
                  setReturnBookData({
                    ...returnBookData,
                    [e.target.name]: e.target.value,
                  })
                }
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              {courseNameError && (
                <p className="text-xs text-red-700">{courseNameError}</p>
              )}

              <label
                for="courseName"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Course Name
              </label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="bookName"
                id="bookName"
                value={returnBookData.bookName}
                onChange={(e) =>
                  setReturnBookData({
                    ...returnBookData,
                    [e.target.name]: e.target.value,
                  })
                }
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              {bookNameError && (
                <p className="text-xs text-red-700">{bookNameError}</p>
              )}

              <label
                for="bookName"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Book Name
              </label>
            </div>
          </div>
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="studentID"
                id="studentID"
                value={returnBookData.studentID}
                onChange={(e) =>
                  setReturnBookData({
                    ...returnBookData,
                    [e.target.name]: e.target.value,
                  })
                }
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              {studentIDError && (
                <p className="text-xs text-red-700">{studentIDError}</p>
              )}

              <label
                for="studentID"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Student ID{" "}
              </label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="date"
                name="issueDate"
                id="issueDate"
                value={returnBookData.issueDate}
                onChange={(e) =>
                  setReturnBookData({
                    ...returnBookData,
                    [e.target.name]: e.target.value,
                  })
                }
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              {issueDateError && (
                <p className="text-xs text-red-700">{issueDateError}</p>
              )}

              <label
                for="issueDate"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Book Issue Date{" "}
              </label>
            </div>
          </div>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReturnBookForm;
