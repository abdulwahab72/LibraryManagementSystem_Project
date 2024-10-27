import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import axios from "../../../api/axios";

const ReturnBookForm = () => {
  const [returnBookData, setReturnBookData] = useState({
    student_name: "",
    father_Name: "",
    faculty_name: "",
    course_name: "",
    student_id: "",
    book_id: "",
    issue_book_id: "",
    return_date: "",
    return_book_id: "",
  });
  // const returnBookFormData =
  //   JSON.parse(localStorage.getItem("returnBookFormData")) || [];
  const [studentNameError, setStudentNameError] = useState("");
  const [fatherNameError, setFatherNameError] = useState("");
  const [facultyNameError, setFacultyNameError] = useState("");
  const [courseNameError, setCourseNameError] = useState("");
  const [studentIDError, setStudentIDError] = useState("");
  const [bookIDError, setBookIDError] = useState("");
  const [issueBookIDError, setIssueBookIDError] = useState("");
  const [returnBookIDError, setReturnBookIDError] = useState("");
  const [returnDateError, setReturnDateError] = useState("");
  //   const bookData = JSON.parse(localStorage.getItem("BookDataByName")) || [];
  //   const studentData = JSON.parse(localStorage.getItem("studentData")) || [];
  // returnBookFormData.push(returnBookData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/returnBooks",
        returnBookData
      );
      alert("successfull");
      setReturnBookData({
        student_name: "",
        father_Name: "",
        faculty_name: "",
        course_name: "",
        student_id: "",
        book_id: "",
        issue_book_id: "",
        return_date: "",
        return_book_id: "",
      });
    } catch (error) {
      if (error.response.data && error.response.data.error)
        setStudentIDError(error.response.data.error.student_id);
      if (error.response.data && error.response.data.error)
        setStudentNameError(error.response.data.error.student_name);
      if (error.response.data && error.response.data.error)
        setFatherNameError(error.response.data.error.father_name);
      if (error.response.data && error.response.data.error)
        setFacultyNameError(error.response.data.error.faculty_name);
      if (error.response.data && error.response.data.error)
        setCourseNameError(error.response.data.error.course_name);
      if (error.response.data && error.response.data.error)
        setBookIDError(error.response.data.error.book_id);
      if (error.response.data && error.response.data.error)
        setIssueBookIDError(error.response.data.error.issue_book_id);
      if (error.response.data && error.response.data.error)
        setReturnDateError(error.response.data.error.return_date);
      if (error.response.data && error.response.data.error)
        setReturnBookIDError(error.response.data.error.return_book_id);
    }
    // if (
    //   localStorage.getItem("issueBookFormData") === null ||
    //   returnBookData.studentName === "" ||
    //   returnBookFormData.forEach(
    //     (student) => returnBookData.studentName !== student.studentName
    //   )
    // ) {
    //   setStudentNameError(
    //     `${
    //       localStorage.getItem("issueBookFormData") === null
    //         ? "There is an error"
    //         : returnBookData.studentName === ""
    //         ? "This field can't empty"
    //         : "This student name is not registered"
    //     }`
    //   );
    // } else if (
    //   localStorage.getItem("issueBookFormData") === null ||
    //   returnBookData.fatherName === "" ||
    //   returnBookFormData.forEach(
    //     (student) => returnBookData.fatherName !== student.fatherName
    //   )
    // ) {
    //   setFatherNameError(
    //     `${
    //       localStorage.getItem("issueBookFormData") === null
    //         ? "There is an error"
    //         : returnBookData.fatherName === ""
    //         ? "This field can't empty"
    //         : "This father name is not registered"
    //     }`
    //   );
    // } else if (
    //   localStorage.getItem("issueBookFormData") === null ||
    //   returnBookData.facultyName === "" ||
    //   returnBookFormData.forEach(
    //     (student) => returnBookData.facultyName !== student.facultyName
    //   )
    // ) {
    //   setFacultyNameError(
    //     `${
    //       localStorage.getItem("issueBookFormData") === null
    //         ? "There is an error"
    //         : returnBookData.facultyName === ""
    //         ? "This field can't empty"
    //         : "This faculty name is not registered"
    //     }`
    //   );
    // } else if (
    //   localStorage.getItem("issueBookFormData") === null ||
    //   returnBookData.courseName === "" ||
    //   returnBookFormData.forEach(
    //     (student) => returnBookData.courseName !== student.courseName
    //   )
    // ) {
    //   setCourseNameError(
    //     `${
    //       localStorage.getItem("issueBookFormData") === null
    //         ? "There is an error"
    //         : returnBookData.courseName === ""
    //         ? "This field can't empty"
    //         : "This course name is not registered"
    //     }`
    //   );
    // } else if (
    //   (localStorage.getItem("issueBookFormData") === null &&
    //     returnBookFormData.forEach(
    //       (student) => returnBookData.bookName !== student.bookName
    //     )) ||
    //   returnBookData.bookName === ""
    // ) {
    //   setBookNameError(
    //     `${
    //       localStorage.getItem("issueBookFormData") === null
    //         ? "There is an error"
    //         : returnBookData.bookName === ""
    //         ? "This field can't empty"
    //         : // : bookData.some((book) => issueBookData.bookName !== book.bookName)
    //           "This book name is not registered"
    //       // : ""
    //     }`
    //   );
    // } else if (
    //   localStorage.getItem("issueBookFormData") === null ||
    //   returnBookData.studentID === "" ||
    //   returnBookFormData.forEach(
    //     (student) => returnBookData.studentID !== student.studentID
    //   )
    // ) {
    //   setStudentIDError(
    //     `${
    //       localStorage.getItem("issueBookFormData") === null
    //         ? "There is an error"
    //         : returnBookData.studentID === ""
    //         ? "This field can't empty"
    //         : "This student id is not registered"
    //     }`
    //   );
    // } else if (
    //   localStorage.getItem("issueBookFormData") === null ||
    //   returnBookData.issueDate === "" ||
    //   returnBookFormData.forEach(
    //     (student) => returnBookData.issueDate !== student.issueDate
    //   )
    // ) {
    //   setIssueDateError(
    //     `${
    //       localStorage.getItem("issueBookFormData") === null
    //         ? "There is an error"
    //         : returnBookData.issueDate === ""
    //         ? "This field can't empty"
    //         : "This issue date is not registered"
    //     }`
    //   );
    // } else if (
    //   localStorage.getItem("issueBookFormData") !== null &&
    //   returnBookFormData.some(
    //     (student) => returnBookData.studentName === student.studentName
    //   ) &&
    //   returnBookData.studentName !== "" &&
    //   returnBookFormData.some(
    //     (student) => returnBookData.fatherName === student.fatherName
    //   ) &&
    //   returnBookData.fatherName !== "" &&
    //   returnBookFormData.some(
    //     (student) => returnBookData.facultyName === student.facultyName
    //   ) &&
    //   returnBookData.facultyName !== "" &&
    //   returnBookFormData.some(
    //     (student) => returnBookData.courseName === student.courseName
    //   ) &&
    //   returnBookData.courseName !== "" &&
    //   returnBookFormData.some(
    //     (student) => returnBookData.bookName === student.bookName
    //   ) &&
    //   returnBookData.bookName !== "" &&
    //   returnBookFormData.some(
    //     (student) => returnBookData.studentID === student.studentID
    //   ) &&
    //   returnBookData.studentID !== "" &&
    //   returnBookFormData.some(
    //     (student) => returnBookData.issueDate === student.issueDate
    //   ) &&
    //   returnBookData.returnDate !== ""
    // ) {
    //   alert("data ok hy");
    //   localStorage.setItem(
    //     "returnBookFormData",
    //     JSON.stringify(returnBookFormData)
    //   );
    // }
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
              name="student_name"
              id="student_name"
              value={returnBookData.student_name}
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
              for="student_name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Student Name
            </label>
          </div>
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="father_name"
                id="father_name"
                value={returnBookData.father_name}
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
                for="father_name"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Father Name
              </label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="return_book_id"
                id="return_book_id"
                value={returnBookData.return_book_id}
                onChange={(e) =>
                  setReturnBookData({
                    ...returnBookData,
                    [e.target.name]: e.target.value,
                  })
                }
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              {returnBookIDError && (
                <p className="text-xs text-red-700">{returnBookIDError}</p>
              )}

              <label
                for="return_book_id"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Return Book ID
              </label>
            </div>
          </div>
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="faculty_name"
                id="faculty_name"
                value={returnBookData.faculty_name}
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
                for="faculty_name"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Faculty Name
              </label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="issue_book_id"
                id="issue_book_id"
                value={returnBookData.issue_book_id}
                onChange={(e) =>
                  setReturnBookData({
                    ...returnBookData,
                    [e.target.name]: e.target.value,
                  })
                }
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              {issueBookIDError && (
                <p className="text-xs text-red-700">{issueBookIDError}</p>
              )}
              <label
                for="issue_book_id"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Issue Book ID
              </label>
            </div>
          </div>
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="course_name"
                id="course_name"
                value={returnBookData.course_name}
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
                for="course_name"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Course Name
              </label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="book_id"
                id="book_id"
                value={returnBookData.book_id}
                onChange={(e) =>
                  setReturnBookData({
                    ...returnBookData,
                    [e.target.name]: e.target.value,
                  })
                }
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              {bookIDError && (
                <p className="text-xs text-red-700">{bookIDError}</p>
              )}

              <label
                for="book_id"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Book ID{" "}
              </label>
            </div>
          </div>
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="student_id"
                id="student_id"
                value={returnBookData.student_id}
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
                for="student_id"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Student ID{" "}
              </label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="date"
                name="return_date"
                id="return_date"
                value={returnBookData.return_date}
                onChange={(e) =>
                  setReturnBookData({
                    ...returnBookData,
                    [e.target.name]: e.target.value,
                  })
                }
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              {returnDateError && (
                <p className="text-xs text-red-700">{returnDateError}</p>
              )}

              <label
                for="return_date"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Book Return Date{" "}
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
