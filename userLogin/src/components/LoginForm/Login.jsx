import React from "react";
import { useNavigate } from "react-router-dom";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";
import { useState } from "react";
import axios from "axios";
import {ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";

function Login() {
  const navigate = useNavigate();
 

  const [showPassword , setShowPassword] = useState(false);
  const [formData , setFormData] = useState({
    // uid:"",
    email : "",
    password : "",
    // lob:"",
    // sublob: "",
  })

  const [userdata , setUserdata] = useState({});
  
  

  const {uid , email , password, lob , sublob} = formData;

  async function onSubmit(e) {
    // console.log(formData);
    e.preventDefault();
    try {
      // localStorage.clear() //will do it in logging out
      const response = await axios.post("/api/account/superuser/login/",{
        username : email,
        password :password
      })
      
      const token = response.data.token;
      localStorage.setItem('token' , token);
      // console.log(response.data.data);
      const userDataFromResponse = {
        full_name: response.data.data.full_name,
        phone_no: response.data.data.phone_no,
        email: response.data.data.email
      };

      setUserdata(userDataFromResponse)
      // setUserdata(response.data.data)
      
      // console.log(userdata);
      if(token){
        
        // navigate(
        //   '/process',
        //   {state : userdata}
        // )
      }else{
        console.log(error);
        // toast.error("Bad Credentials")
      }

      // console.log(response);
    } catch (error) {
      // AxiosError
      if(error.response.status === 400 ){
        if(error.response.data["username"]){
          toast.error(error.response.data.username[0])
        }else{
          toast.error(error.response.data.password[0])
          
        }
      }
      
      
    }
  }

  function onChange(e){
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id] : e.target.value,
    }))
  }

  useEffect(() => {
    if (Object.keys(userdata).length !== 0) {
      
      navigate('/process', { state: userdata });
    }
  }, [userdata, navigate]);
  


  return (
    <section >
      <div className=" flex flex-col items-center justify-center px-3 py-2 mx-auto min-h-screen lg:py-1">
        <img
          className="w-40 h-15 mb-2 mx-auto "
          src="https://zenlayercdn.centuryply.com/assets/img/logo.png"
          alt="logo"
        />
        {/* </a> */}
        {/* "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" */}
        <div className="w-full bg-white rounded-lg shadow-2xl  dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-2 space-y-2 md:space-y-4 sm:p-8">
         
            <h1 className="text-xl text-center font-thin leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Login to your account
            </h1>
            <form
              onSubmit={onSubmit}
              className="space-y-4 md:space-y-1"
              action="#"
            >
              {/* <div>
                <label
                  htmlFor="ID"
                  className="text-start block font-thin mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Id
                </label>
                <input
                  type="text"
                  name="uid"
                  id="uid"
                  value={uid}
                  onChange={onChange}
                  className="bg-gray-500 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="century123"
                  required
                />
              </div> */}
              <div>
                <label
                  htmlFor="email"
                  className="text-start font-thin block mb-2 text-sm  text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  
                  onChange={onChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@centuryply.com"
                  required
                />
              </div>
              {/* <div>
                              <label htmlFor="password" className="text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                              <input type="password" name="password" id="password" 
                              placeholder="••••••••" 
                              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                          </div> */}
              <div>
                
              <label htmlFor="password" className="text-start font-thin block mb-2 text-sm  text-gray-900 dark:text-white">Password</label>
                <div className="relative">
                    
                  <input
                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type={showPassword ? "text" : "Password"}
                    id="password"
                    value={password}
                    //tracks the ongoing changes
                    onChange={onChange}
                    placeholder="Password"
                    required
                  />
                  {showPassword ? (
                    <MdVisibilityOff
                      className="absolute right-3 top-3 text-white cursor-pointer text-xl"
                      onClick={() => setShowPassword((prevState) => !prevState)}
                    />
                  ) : (
                    <MdVisibility
                      className="absolute right-3 top-3 text-gray-300 cursor-pointer text-xl"
                      onClick={() => setShowPassword((prevState) => !prevState)}
                    />
                  )}
                </div>
              </div>


              {/* <div>
                <label
                  htmlFor="lob"
                  className="text-start block mb-2 font-thin text-sm font-medium text-gray-900 dark:text-white"
                >
                  Lob
                </label>
                <input
                  type="text"
                  name="lob"
                  id="lob"
                  value={lob}
                  onChange={onChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Deco"
                  required
                />
              </div> */}
              {/* <div>
                <label
                  htmlFor="sub_lod"
                  className="text-start block mb-2 text-sm font-thin font-medium text-gray-900 dark:text-white"
                >
                  Sub lob
                </label>
                <input
                  type="text"
                  name="sublob"
                  id="sublob"
                  value={sublob}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="DecoTeleSale"
                  onChange={onChange}
                  required
                />
              </div> */}

              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  {/* <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 font-thin dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div> */}
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-blue-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-[#ec1d23] shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Login
              </button>
              
              {/* <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                              Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                          </p> */}
            </form>
            
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
        
      </div>
      
    </section>
  );
}

export default Login;
