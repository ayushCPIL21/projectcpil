import axios from 'axios'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { RiLogoutCircleRLine } from "react-icons/ri";


function Logout() {
    const navigate = useNavigate()
    // async function logoutHandler(){
    //     const token = localStorage.getItem('token');
    //     if (!token) {
    //       // If token is missing in localStorage, redirect to login page
    //       navigate('/')
    //       return;
    //     }
        
    // //     const response = await axios.get("/api/account/logout/",{
    // //          headers: {
    // //     'Authorization': `Token ${localStorage.getItem('token')}` // Assuming token is stored in localStorage
    // //   }
    // //     })

    //     const response = await axios.get("/api/account/logout/", {
            
    //           Authorization : `Token ${token}`,
            
    //       })
    //     console.log(response);
    //     // navigate('/')
    // }

    async function logoutHandler() {
        const token = localStorage.getItem('token');
        if (!token) {
            // If token is missing in localStorage, redirect to login page
            navigate('/');
            return;
        }
    
        try {
            const response = await axios.get("/api/account/logout/", {
                headers: {
                    'Authorization': `Token ${token}` 
                }
            });
            console.log(response);
            localStorage.removeItem('token');
            navigate('/');

        } catch (error) {
            if (error.response && error.response.status === 401) {
                // console.error('Unauthorized. Redirecting to login page...');
                localStorage.removeItem('token');
                navigate('/');
            } else {
                // Other error handling
                console.error('Logout error:', error);
                // Handle other errors as needed
            }
        }
        
    }
    
  return (
    // <RiLogoutCircleRLine 
    // onClick={logoutHandler}
    // type="submit"
    // className="w-md text-white bg-[#ec1d23] shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
    // />
    <button
    onClick={logoutHandler}
    type="submit"
    className="w-md text-white bg-[#ec1d23] shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-full text-sm px-1 py-1 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
  >
   <RiLogoutCircleRLine 
   className='text-lg rotate-[-90deg] text-center' 
   />
  </button>
  )
}

export default Logout