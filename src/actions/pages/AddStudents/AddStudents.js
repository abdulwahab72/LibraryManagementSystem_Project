import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import axios from "../../../api/axios";
// import AvailableBooks from "../ShowAvailableBooks/AvailableBooks";

const AddStudents = () => {
  const studentDataDetail = JSON.parse(
    localStorage.getItem("studentData") || "[]"
  );
  const [studentData, setStudentData] = useState({
    student_name: "",
    student_id: "",
    father_name: "",
    faculty_name: "",
    course_name: "",
  });
  const { student_name, student_id, father_name, faculty_name, course_name } =
    studentData;
  const onInputChange = (e) => {
    setStudentData({ ...studentData, [e.target.name]: e.target.value });
  };
  const [studentNameError, setStudentNameError] = useState("");
  const [studentIDError, setStudentIDError] = useState("");
  const [fatherNameError, setFatherNameError] = useState("");
  const [facultyNameError, setFacultyNameError] = useState("");
  const [courseNameError, setCourseNameError] = useState("");
  // studentDataDetail.push(studentData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/addStudentDetail",
        studentData
      );
      alert("successfull");
      setStudentData({
        student_name: "",
        student_id: "",
        father_name: "",
        faculty_name: "",
        course_name: "",
      });
      localStorage.setItem("studentData", JSON.stringify(response.data));
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
    }
    // if (studentData.studentName === "") {
    //   setStudentNameError("Please enter the field.");
    // } else if (studentData.studentID === "") {
    //   setStudentIDError("Please enter this field.");
    // } else if (studentData.fatherName === "") {
    //   setFatherNameError("Please enter this field.");
    // } else if (studentData.facultyName === "") {
    //   setFacultyNameError("Please enter this field.");
    // } else if (studentData.courseName === "") {
    //   setCourseNameError("Please enter this field.");
    // } else if (
    //   studentData.studentName !== "" &&
    //   studentData.studentID !== "" &&
    //   studentData.fatherName !== "" &&
    //   studentData.facultyName !== "" &&
    //   studentData.courseName !== ""
    // ) {
    //   localStorage.setItem("studentData", JSON.stringify(studentDataDetail));
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
              value={student_name}
              onChange={(e) => onInputChange(e)}
              id="student_name"
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
              name="student_id"
              value={student_id}
              onChange={(e) => onInputChange(e)}
              id="student_id"
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
              Student ID
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="father_name"
              value={father_name}
              onChange={(e) => onInputChange(e)}
              id="father_name"
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
              name="faculty_name"
              value={faculty_name}
              onChange={(e) => onInputChange(e)}
              id="faculty_name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />{" "}
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
              name="course_name"
              value={course_name}
              onChange={(e) => onInputChange(e)}
              id="course_name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />{" "}
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

export default AddStudents;
