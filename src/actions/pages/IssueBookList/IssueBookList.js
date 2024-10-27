import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import axios from "../../../api/axios";

const IssueBookList = () => {
  const [issueBookData, setIssueBookData] = useState("");
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/getIssueBookDetail")
      .then((response) => setIssueBookData(response.data.issueBooks))
      .catch((error) => console.error("Error fetching issue books", error));
  },[]);
  localStorage.setItem("issueBooksData", JSON.stringify(issueBookData));
  // const issueBookData = JSON.parse(localStorage.getItem("issueBookFormData"));
  return (
    <div className="flex gap-4 bg-gray-100">
      <div>
        <Sidebar />
      </div>
      <div class="relative w-full m-4 overflow-x-auto shadow-md sm:rounded-lg">
        <div class="pb-4 bg-white dark:bg-gray-900">
          <label for="table-search" class="sr-only">
            Search
          </label>
          <div class="relative mt-1">
            <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              class="block p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for items"
            />
          </div>
        </div>
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-all-search" class="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" class="px-6 py-3">
                Issue Book ID
              </th>
              <th scope="col" class="px-6 py-3">
                Student ID
              </th>
              <th scope="col" class="px-6 py-3">
                Book ID
              </th>
              <th scope="col" class="px-6 py-3">
                Student Name
              </th>
              <th scope="col" class="px-6 py-3">
                Father Name
              </th>
              <th scope="col" class="px-6 py-3">
                Faculty Name
              </th>
              <th scope="col" class="px-6 py-3">
                Course Name
              </th>
              <th scope="col" class="px-6 py-3">
                Issue Date
              </th>
            </tr>
          </thead>
          <tbody>
            {issueBookData.length > 0
              ? issueBookData.map((item) => {
                  return (
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td class="w-4 p-4">
                        <div class="flex items-center">
                          <input
                            id="checkbox-table-search-1"
                            type="checkbox"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label for="checkbox-table-search-1" class="sr-only">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item.issue_book_id}
                      </th>
                      <td class="px-6 py-4">{item.student_id}</td>
                      <td class="px-6 py-4">{item.book_id}</td>
                      <td class="px-6 py-4">{item.student_name}</td>
                      <td class="px-6 py-4">{item.father_name}</td>
                      <td class="px-6 py-4">{item.faculty_name}</td>
                      <td class="px-6 py-4">{item.course_name}</td>
                      <td class="px-6 py-4">{item.issue_date}</td>

                      <td class="px-6 py-4">
                        <a
                          href="#"
                          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  );
                })
              : "No data yet"}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IssueBookList;
