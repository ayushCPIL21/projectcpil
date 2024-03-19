import React from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoMdNotificationsOutline } from "react-icons/io";
import axios from "axios";

function CardsItems({ title, desc, freq, isActive,lob, time }) {
  
  function onClickHandle() {
  //   axios.get("/api/run-batch-file/").then((response) =>{
  //     console.log(response);
  //   }).catch((error)=>{
  //     console.log(error);
  // });

    // console.log(title);
    toast.success(title + " Played");
  }

  return (
    <li className="py-3 sm:py-4">
      <div className="flex items-center">
        <div className="flex-shrink-0 mr-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="absolute w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
            />
          </svg>

          <span className="relative inset-0 object-right-top -mr-6 left-3 top-2" >
            <div className="inline-flex items-center justify-center px-1.5 py-0.5 border-2 border-white w-6 h-6 rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
              {freq}
            </div>
          </span>
        </div>
        <div className="flex-1 min-w-0 ms-4">
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            {title}
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            {desc}
          </p>
          <div className="flex justify-between pr-3 min-w-0">
            <div className="flex justify-center items-center text-sm font-medium text-gray-900 dark:text-white">
              Status :
              {isActive === "Completed" ? (
                <div className="w-2 h-2 ml-2 rounded-full bg-green-600 shadow-2xl ring ring-green-600 ring-opacity-50"></div>
              ) : isActive === "Error" ? (
                <div className="w-2 h-2 ml-2 rounded-full bg-red-600 shadow-2xl ring ring-red-600 ring-opacity-50"></div>
              ) : isActive === "Running"?(
                <div className="w-2 h-2 ml-2 rounded-full bg-yellow-600 shadow-2xl ring ring-red-600 ring-opacity-50"></div>
              ):""}
            </div>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              
              <a href="">{time}</a>
            </p>
          </div>
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          <div>
            <button
              onClick={onClickHandle}
              className="text-white bg-[#ec1d23] hover:bg-gradient-to-r from-gray-800 to-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-800 dark:focus:ring-blue-800  font-medium rounded-full text-sm text-center me-2"
            >
              <FaRegCirclePlay className="text-5xl" />
            </button>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
    </li>
  );
}

export default CardsItems;
