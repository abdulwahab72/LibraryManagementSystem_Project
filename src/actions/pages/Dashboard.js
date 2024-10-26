import React from "react";
import { Link } from "react-router-dom";
import bg from "../../assets/dashboard/bgimage.jpg";
import Card from "../components/Card";
import { MdAddCircleOutline } from "react-icons/md";
import { GoIssueClosed } from "react-icons/go";
import { GiReturnArrow } from "react-icons/gi";

const Dashboard = () => {
  const CardData = [
    {
      name: "Add Book by Name",
      buttonName: "Add",
      Link: "/addBookbyNameForm",
      icon: <MdAddCircleOutline />,
    },
    // {
    //   name: "Add Book by Author",
    //   buttonName: "Add",
    //   Link: "addBookbyAuthorForm",
    //   icon: <MdAddCircleOutline />,
    // },
    // {
    //   name: "Add Book by Category",
    //   buttonName: "Add",
    //   Link: "/addBookbyCategoryForm",
    //   icon: <MdAddCircleOutline />,
    // },
    {
      name: "Add Student",
      buttonName: "Add",
      Link: "/addStudentsForm",
      icon: <MdAddCircleOutline />,
    },
    // { name: "Update Student List", buttonName: "Update" },
    {
      name: "Issue Book",
      buttonName: "Issue",
      Link: "/issueBookForm",
      icon: <GoIssueClosed />,
    },
    { name: "Return Book", buttonName: "Issue", icon: <GiReturnArrow /> },
  ];
  return (
    <div>
      <Card />
      <div className=" w-[98%] ">
        <div className="relative">
          <img src={bg} alt="" className="fit w-full h-80" />
          {/* <p className="absolute top-1/2 left-5/2 right-5/2 bottom-1/2 w-full text-3xl font-bold text-white">
            Library Management System
          </p> */}
        </div>
        <div className="grid grid-cols-4 my-4 gap-4">
          {CardData.map((item) => {
            return (
              <div class="max-w-sm cursor-pointer text-center px-8 bg-gray-100 border hover:bg-gray-400 transition-all duration-150 border-gray-800 ">
                <div className="text-2xl flex justify-center p-2 pt-4">
                  {item.icon}
                </div>
                <a href={item.Link}>
                  <h5 class=" text-xl font-bold tracking-tight text-gray-900">
                    {item.name}
                  </h5>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
