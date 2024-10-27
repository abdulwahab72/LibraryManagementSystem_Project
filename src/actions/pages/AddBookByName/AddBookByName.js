import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import axios from "../../../api/axios";

const AddBookByName = () => {
  const [inputBookData, setInputBookData] = useState({
    book_id: "",
    book_name: "",
    author_name: "",
    edition: "",
    book_category: "",
  });
  const { book_id, book_name, author_name, edition, book_category } =
    inputBookData;
  const onInputChange = (e) => {
    setInputBookData({ ...inputBookData, [e.target.name]: e.target.value });
  };
  const [idError, setIdError] = useState("");
  const [bookError, setBookError] = useState("");
  const [authorError, setAuthorError] = useState("");
  const [editionError, setEditionError] = useState("");
  const [categoryError, setCategoryError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/addBookDetail",
        inputBookData
      );
      alert("add successfull");
      setInputBookData({
        book_id: "",
        book_name: "",
        author_name: "",
        edition: "",
        book_category: "",
      });
      localStorage.setItem("BookDataByName", JSON.stringify(response.data));
    } catch (error) {
      if (error.response.data && error.response.data.error)
        setIdError(error.response.data.error.book_id);
      if (error.response.data && error.response.data.error)
        setBookError(error.response.data.error.book_name);
      if (error.response.data && error.response.data.error)
        setAuthorError(error.response.data.error.author_name);
      if (error.response.data && error.response.data.error)
        setEditionError(error.response.data.error.edition);
      if (error.response.data && error.response.data.error)
        setCategoryError(error.response.data.error.book_category);
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
              name="book_id"
              value={book_id}
              onChange={(e) => onInputChange(e)}
              id="book_id"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            {idError && <p className="text-xs text-red-700">{idError}</p>}
            <label
              for="book_id"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Book Id
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="book_name"
              value={book_name}
              onChange={(e) => onInputChange(e)}
              id="book_name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            {bookError && <p className="text-xs text-red-700">{bookError}</p>}

            <label
              for="book_name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Book Name
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="author_name"
              value={author_name}
              onChange={(e) => onInputChange(e)}
              id="author_name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            {authorError && (
              <p className="text-xs text-red-700">{authorError}</p>
            )}

            <label
              for="author_ame"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Author Name
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="edition"
              value={edition}
              onChange={(e) => onInputChange(e)}
              id="edition"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            {editionError && (
              <p className="text-xs text-red-700">{editionError}</p>
            )}

            <label
              for="edition"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Edition
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="book_category"
              value={book_category}
              onChange={(e) => onInputChange(e)}
              id="book_category"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            {categoryError && (
              <p className="text-xs text-red-700">{categoryError}</p>
            )}

            <label
              for="category"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Book Category
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

export default AddBookByName;
