import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import axios from "../../../api/axios";

const IssueBookForm = () => {
  const [issueBookData, setIssueBookData] = useState({
    student_name: "",
    father_Name: "",
    faculty_name: "",
    course_name: "",
    student_id: "",
    book_id: "",
    issue_book_id: "",
    issue_date: "",
  });
  // const issueBookFormData = JSON.parse(
  //   localStorage.getItem("issueBookFormData") || "[]"
  // );
  const [studentNameError, setStudentNameError] = useState("");
  const [fatherNameError, setFatherNameError] = useState("");
  const [facultyNameError, setFacultyNameError] = useState("");
  const [courseNameError, setCourseNameError] = useState("");
  const [studentIDError, setStudentIDError] = useState("");
  const [bookIDError, setBookIDError] = useState("");
  const [issueBookIDError, setIssueBookIDError] = useState("");
  const [issueDateError, setIssueDateError] = useState("");
  // const bookData = JSON.parse(localStorage.getItem("BookDataByName")) || [];
  // const studentData = JSON.parse(localStorage.getItem("studentData")) || [];
  // issueBookFormData.push(issueBookData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/issueBooks",
        issueBookData
      );
      alert("successfull");
      setIssueBookData({
        student_name: "",
        father_Name: "",
        faculty_name: "",
        course_name: "",
        student_id: "",
        book_id: "",
        issue_book_id: "",
        issue_date: "",
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
        setIssueDateError(error.response.data.error.issue_date);
    }
    // if (
    //   localStorage.getItem("studentData") === null ||
    //   issueBookData.studentName === "" ||
    //   studentData.forEach(
    //     (student) => issueBookData.studentName !== student.studentName
    //   )
    // ) {
    //   setStudentNameError(
    //     `${
    //       localStorage.getItem("studentData") === null
    //         ? "There is an error"
    //         : issueBookData.studentName === ""
    //         ? "This field can't empty"
    //         : "This student name is not registered"
    //     }`
    //   );
    // } else if (
    //   localStorage.getItem("studentData") === null ||
    //   issueBookData.fatherName === "" ||
    //   studentData.forEach(
    //     (student) => issueBookData.fatherName !== student.fatherName
    //   )
    // ) {
    //   setFatherNameError(
    //     `${
    //       localStorage.getItem("studentData") === null
    //         ? "There is an error"
    //         : issueBookData.fatherName === ""
    //         ? "This field can't empty"
    //         : "This father name is not registered"
    //     }`
    //   );
    // } else if (
    //   localStorage.getItem("studentData") === null ||
    //   issueBookData.facultyName === "" ||
    //   studentData.forEach(
    //     (student) => issueBookData.facultyName !== student.facultyName
    //   )
    // ) {
    //   setFacultyNameError(
    //     `${
    //       localStorage.getItem("studentData") === null
    //         ? "There is an error"
    //         : issueBookData.facultyName === ""
    //         ? "This field can't empty"
    //         : "This faculty name is not registered"
    //     }`
    //   );
    // } else if (
    //   localStorage.getItem("studentData") === null ||
    //   issueBookData.courseName === "" ||
    //   studentData.forEach(
    //     (student) => issueBookData.courseName !== student.courseName
    //   )
    // ) {
    //   setCourseNameError(
    //     `${
    //       localStorage.getItem("studentData") === null
    //         ? "There is an error"
    //         : issueBookData.courseName === ""
    //         ? "This field can't empty"
    //         : "This course name is not registered"
    //     }`
    //   );
    // } else if (
    //   (localStorage.getItem("BookDataByName") === null &&
    //     bookData.forEach((book) => issueBookData.bookName !== book.bookName)) ||
    //   issueBookData.bookName === ""
    // ) {
    //   setBookNameError(
    //     `${
    //       localStorage.getItem("BookDataByName") === null
    //         ? "There is an error"
    //         : issueBookData.bookName === ""
    //         ? "This field can't empty"
    //         : // : bookData.some((book) => issueBookData.bookName !== book.bookName)
    //           "This book name is not registered"
    //       // : ""
    //     }`
    //   );
    // } else if (
    //   localStorage.getItem("studentData") === null ||
    //   issueBookData.studentID === "" ||
    //   studentData.forEach(
    //     (student) => issueBookData.studentID !== student.studentID
    //   )
    // ) {
    //   setStudentIDError(
    //     `${
    //       localStorage.getItem("studentData") === null
    //         ? "There is an error"
    //         : issueBookData.studentID === ""
    //         ? "This field can't empty"
    //         : "This student id is not registered"
    //     }`
    //   );
    // } else if (issueBookData.issueDate === "") {
    //   setIssueDateError("This field can't be empty");
    // } else if (
    //   localStorage.getItem("studentData") !== null &&
    //   localStorage.getItem("BookDataByName") !== null &&
    //   studentData.some(
    //     (student) => issueBookData.studentName === student.studentName
    //   ) &&
    //   issueBookData.studentName !== "" &&
    //   studentData.some(
    //     (student) => issueBookData.fatherName === student.fatherName
    //   ) &&
    //   issueBookData.fatherName !== "" &&
    //   studentData.some(
    //     (student) => issueBookData.facultyName === student.facultyName
    //   ) &&
    //   issueBookData.facultyName !== "" &&
    //   studentData.some(
    //     (student) => issueBookData.courseName === student.courseName
    //   ) &&
    //   issueBookData.courseName !== "" &&
    //   bookData.some((book) => issueBookData.bookName === book.bookName) &&
    //   issueBookData.bookName !== "" &&
    //   studentData.some(
    //     (student) => issueBookData.studentID === student.studentID
    //   ) &&
    //   issueBookData.studentID !== "" &&
    //   issueBookData.issueDate !== ""
    // ) {
    //   alert("data ok hy");
    //   localStorage.setItem(
    //     "issueBookFormData",
    //     JSON.stringify(issueBookFormData)
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
              value={issueBookData.student_name}
              onChange={(e) =>
                setIssueBookData({
                  ...issueBookData,
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
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="father_name"
              id="father_name"
              value={issueBookData.father_name}
              onChange={(e) =>
                setIssueBookData({
                  ...issueBookData,
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
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="faculty_name"
                id="faculty_name"
                value={issueBookData.facultyName}
                onChange={(e) =>
                  setIssueBookData({
                    ...issueBookData,
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
                value={issueBookData.issue_book_id}
                onChange={(e) =>
                  setIssueBookData({
                    ...issueBookData,
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
                value={issueBookData.courseName}
                onChange={(e) =>
                  setIssueBookData({
                    ...issueBookData,
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
                value={issueBookData.book_id}
                onChange={(e) =>
                  setIssueBookData({
                    ...issueBookData,
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
                Book Id
              </label>
            </div>
          </div>
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="student_id"
                id="student_id"
                value={issueBookData.student_id}
                onChange={(e) =>
                  setIssueBookData({
                    ...issueBookData,
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
                name="issue_date"
                id="issue_date"
                value={issueBookData.issue_date}
                onChange={(e) =>
                  setIssueBookData({
                    ...issueBookData,
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
                for="issue_date"
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

export default IssueBookForm;
