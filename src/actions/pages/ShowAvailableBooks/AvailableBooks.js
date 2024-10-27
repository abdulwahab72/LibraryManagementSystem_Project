import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import axios from "../../../api/axios";

const AvailableBooks = () => {
  const [booksData, setBooksData] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/getBookDetail")
      .then((response) => setBooksData(response.data.books))
      .catch((error) => console.error("Error fetching Books data", error));
    }, []);
    localStorage.setItem('booksData',JSON.stringify(booksData));
  return (
    <div className="flex gap-4 bg-gray-100">
      <div>
        <Sidebar />
      </div>
      <div class="m-4 relative w-full overflow-x-auto sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Book name
              </th>
              <th scope="col" class="px-6 py-3">
                Author Name
              </th>
              <th scope="col" class="px-6 py-3">
                Edition
              </th>
              <th scope="col" class="px-6 py-3">
                Book Category
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {booksData.length > 0 &&
              booksData.map((item) => {
                return (
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.book_name}
                    </th>
                    <td class="px-6 py-4">{item.author_name}</td>
                    <td class="px-6 py-4">{item.edition}</td>
                    <td class="px-6 py-4">{item.book_category}</td>
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
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AvailableBooks;
