import React from 'react'
import { FcGoogle } from "react-icons/fc";



function SignUp() {
  return (
    <>
      <div className=' bg-white grid h-[80vh] grid-cols-12 my-[60px] mr-[120px] '>
        <div className=' grid col-span-7 bg-[url(./assets/cart4.jpg)]  bg-cover bg-bottom '></div>
        <div className=' grid  col-span-5'>
          <div className=' flex justify-center item-center pl-[130px] pt-[70px] '>
              <ul className=' flex flex-col gap-[20px]'>
                <li className=' text-[30px] font-bold'>Create an account</li>
                <li className='text-[13px]'>Enter Your Deatils Below</li>
                <li> 
                      <input type="text"
                        placeholder='Name'
                        className='   border-b-1 outline-none w-[220px]'
                         />
                </li>
                <li>
                      <input type="text"
                        placeholder='Email or Phone number'
                        className='   border-b-1 outline-none w-[220px]'
                         />
                </li>
                <li>
                      <input type="text"
                        placeholder='Password'
                        className='   border-b-1 outline-none w-[220px]'
                         />
                </li>
                <li>
                  <button className=' bg-red-500 w-[80%] h-[35px]'>Create Account</button>
                </li>
                <li>
                <button className=' border-1 flex text-[black] justify-center items-center text-[13px] text-center w-[80%] gap-[10px] h-[35px]'><FcGoogle size={16} />  Sign Up with Google</button>
                </li>
                <li className=' text-[13px]'>
                  <h6>Already have an Account <a className=' underline' href="">Login</a></h6>
                </li>

              </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp
