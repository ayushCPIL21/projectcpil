import React, { useEffect, useState } from "react";
import CardsItems from "./CardsItems";
import FiltersOffCanvas from "../Filters/FiltersOffCanvas";
import Logout from "../Logout/Logout";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { RiRefreshLine } from "react-icons/ri";


function Process() {
  const location = useLocation();
  const user = location.state;

  const [processInfo, setProcessInfo] = useState([]); // array of objects
  const [refresh , setRefresh] = useState(false);

  function onRefresh(){
    setRefresh(true)
  }

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get("/api/process/", {
          headers: {
            Authorization: `Token ${token}`,
          },
        });

        const val = [];
        for (let i = 0; i < response.data.data.length; i++) {
          val.push(response.data.data[i]);
        }
        // console.log(val);
        setProcessInfo(val);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    setRefresh(false)
    
  }, [refresh]);

  //searching
  const [searchedItem, setSearchedItem] = useState({
    searched: "",
  });

  const { searched } = searchedItem;

  function onchangeHandler(e) {
    setSearchedItem((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  // console.log(searchedItem);

  // console.log(user.full_name);
  return (
    <div className="w-full max-w-2xl mx-auto shadow-md  rounded-lg px-4 py-3 m-5 text-white bg-gray-800">
      
    
      <div className="flex items-center justify-between mb-4 ">

        <div className="flex justify-center space-x-2 items-center"> 
        <Logout />
        <button
   
    className="w-md text-white bg-green-600 shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-full text-sm px-1 py-1 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
  >
    <RiRefreshLine
    value={refresh}
    onClick={onRefresh}
   className='text-lg rotate-[-90deg] text-center' 
   />
  </button>

       
        </div>

        <div className="flex flex-col ml-2">
          <h6 className="text-sm  font-thin-bold leading-none text-gray-900 dark:text-white">
            Hi! Admin 👋
          </h6>
          <h6 className="text-xs  font-thin-bold leading-none text-gray-900 dark:text-white">
            {user.email}
          </h6>
          {/* <h6 className="text-xs  font-thin-bold leading-none text-gray-900 dark:text-white">{user.phone_no}</h6> */}
        </div>
        <FiltersOffCanvas />
      </div>
      
      <div className="relative">
          <div className="absolute inset-y-0 left-4 lg:start-4 flex items-center pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="searched"
            value={searched}
            onChange={onchangeHandler}
            className="block w-full lg:w-full p-2 pl-12 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
            required
          />
      </div>
        
      <div className="flow-root">
       

        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          {processInfo
            .filter((item) =>
              item.name.toLowerCase().includes(searched.toLowerCase())
            )
            .map((item) => (
              <CardsItems
                key={item.id}
                title={item.name}
                desc={item.path}
                freq={item.logs}
                lob={item.lob}
                isActive={item.status}
                time={item.updated_on}
              />
            ))}
          {/* Conditional rendering for no matching items */}
          {processInfo.filter((item) =>
            item.name.toLowerCase().includes(searched.toLowerCase())
          ).length === 0 &&
            searched !== "" && (
              <div className="text-center">
                <p className="mb-4 text-lg text-gray-300">
                  Oops! No Process found.
                </p>
                <div className="animate-bounce">
                  <svg
                    className="mx-auto h-16 w-16 text-[#ec1d23]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    ></path>
                  </svg>
                </div>
                <p className="mt-4 text-gray-400">Please search correctly</p>
              </div>
            )}
        </ul>
      </div>
    </div>
  );
}

export default Process;
