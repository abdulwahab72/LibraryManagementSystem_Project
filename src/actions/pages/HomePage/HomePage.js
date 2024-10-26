import React from "react";
import Sidebar from "../../components/Sidebar";
import Dashboard from "../Dashboard";
import bg from "../../../assets/dashboard/bgimage.jpg";

const HomePage = () => {
  return (
    <div className="bg-gray-100">
      <div
        className="flex gap-4 "
        // style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
      >
        <div className="">
          <Sidebar />
        </div>
        <div className="w-full">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
