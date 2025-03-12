import React from 'react'
import { DiApple } from "react-icons/di";
import { IoSearchOutline } from "react-icons/io5";
import { SlBag } from "react-icons/sl";
import { IoReorderTwoOutline } from "react-icons/io5";

import Image from 'next/image'
const Header = () => {
  return (
    <div >
      <div className="container mx-auto">

        <div className=" px-3 max-md:py-3">
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
            </div>
            <div className="drawer-side z-50">
              <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-80 text-3xl p-6 px-10">
                {/* Sidebar content here */}
                <li><a>Store</a></li>
                <li><a>Mac</a></li>
                <li><a>iPad</a></li>
                <li><a>iPhone</a></li>
                <li><a>Watch</a></li>
                <li><a>Vision</a></li>
                <li><a>AirPods</a></li>
                <li><a>TV & Home</a></li>
                <li><a>Entertainment</a></li>
                <li><a>Accessories</a></li>
                <li><a>Support</a></li>
              </ul>
            </div>
          </div>
          <div className='flex justify-between items-center text-gray-600 md:hidden'>
            <div className='text-2xl'>
              <DiApple />
            </div>

            <div className='flex justify-center items-center gap-7 text-xl'>
              <IoSearchOutline />
              <SlBag />
              {/* Drawer Toggle (Hamburger Icon) */}
              <label htmlFor="my-drawer" className="cursor-pointer text-3xl">
                <IoReorderTwoOutline />
              </label>


            </div>
          </div>
          <ul className="flex justify-center items-center gap-8 py-5 text-xs font-extralight max-md:hidden">
            <li><DiApple /></li>
            <li>Store</li>
            <li>Mac</li>
            <li>iPad</li>
            <li>iPhone</li>
            <li>Watch </li>
            <li>AirPods </li>
            <li>Tv & Home </li>
            <li>Enternatainment </li>
            <li>Accessories </li>
            <li>Support </li>
            <li><IoSearchOutline /> </li>
            <li><SlBag /> </li>
          </ul>
        </div>

        <div className="flex max-md:flex-col justify-center items-center w-full my-3 max-md:text-center max-md:hidden">
          <h1 className="text-sm font-extralight "><span className="text-blue-500">Shop online</span> for free delivery. </h1>
          <h1 className='text-sm font-extralight'>Call us at 1800-1651-0525 or visit <span className="text-blue-500">support</span></h1>
        </div>
      </div>


      <div className="mb-2">

        <div className="h-[500px] w-full bg-[url('/heroMacBook.jpg')] bg-cover bg-center bg-no-repeat text-white text-3xl font-bold  relative">
          <div className='flex flex-col text-center p-7'>

            <h1 className="font-bold text-3xl md:text-5xl  text-black my-1 ">MacBook Air</h1>
            <h1 className=' text-black/80 font-thin text-[20px] md:text-[24px]'>Sky blue color</h1>
            <h1 className=' text-black/80 font-thin text-[20px] md:text-[24px]'>Sky high performance with M4</h1>
            <h1 className=' font-thin text-gray-500 text-base max-md:hidden'>Check back later for availability</h1>

            <div className="flex gap-5 justify-center items-center mt-2">

              <button className="px-5 py-2  text-white rounded-full bg-[#0071E3] md:text-lg text-sm tracking-tight font-thin ">Learn more</button>
              <button className="px-5 py-2   rounded-full  md:text-lg text-sm border bg-blue-50 font-thin border-[#0071E3] text-blue-600 ">View pricing</button>
            </div>

          </div>



        </div>
      </div>

      <div className="mb-2">
        <div className="h-[500px] w-full bg-[url('/iPadAirImage.jpg')] bg-cover bg-center bg-no-repeat ">
          <div className='flex flex-col text-center p-7 '>

            <h1 className="font-bold text-5xl text-black my-1 flex justify-center items-center">
              <Image src="/iPadAirLogo.png" width={200} height={200} alt="Picture of the author" />
            </h1>
            <h1 className=' text-black/80 font-thin text-[20px] md:text-[24px]'>M4 Max and M3 Ultra</h1>
            <h1 className=' text-black/80 font-thin text-[20px] md:text-[24px]'>Choose your superpower.</h1>
            <h1 className=' font-thin text-gray-500 text-base max-md:hidden'>Check back later for availability</h1>

            <div className="flex gap-5 justify-center items-center mt-2">

              <button className="px-5 py-2  text-white rounded-full bg-[#0071E3] md:text-lg text-sm tracking-tight font-thin ">Learn more</button>
              <button className="px-5 py-2   rounded-full  md:text-lg text-sm border bg-blue-50 font-thin border-[#0071E3] text-blue-600 ">View pricing</button>
            </div>

          </div>
        </div>
      </div>
      <div className="mb-2">
        <div className="h-[500px] w-full bg-[url('/macStudio.jpg')] bg-cover bg-center bg-no-repeat ">
          <div className='flex flex-col text-center p-7 '>

            <h1 className="font-bold text-3xl md:text-5xl  text-black my-1 ">Mac Studio</h1>
            <h1 className=' text-black/80 font-thin text-[20px] md:text-[24px]'>M4 Max and M3 Ultra</h1>
            <h1 className=' text-black/80 font-thin text-[20px] md:text-[24px]'>Choose your superpower.</h1>
            <h1 className=' font-thin text-gray-500 text-base max-md:hidden'>Check back later for availability</h1>

            <div className="flex gap-5 justify-center items-center mt-2">

              <button className="px-5 py-2  text-white rounded-full bg-[#0071E3] md:text-lg text-sm tracking-tight font-thin ">Learn more</button>
              <button className="px-5 py-2   rounded-full  md:text-lg text-sm border bg-blue-50 font-thin border-[#0071E3] text-blue-600 ">View pricing</button>
            </div>

          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div>
          <div className="mb-2">
            <div className="h-[500px]  bg-[url('/iPadImage.jpg')] bg-cover bg-center bg-no-repeat ">
              <div className='flex flex-col text-center p-7 w-[50%] mx-auto'>

                <h1 className="font-bold text-5xl text-black my-1 flex justify-center items-center ">
                  iPad
                </h1>
                <h1 className=' text-black/80 font-thin text-[20px] md:text-[20px] '>Now with the speed of the A16 chip and double the starting storage</h1>

                <div className="flex gap-5 justify-center items-center mt-2">

                  <button className="px-5 py-2  text-white rounded-full bg-[#0071E3] md:text-sm text-sm tracking-tight font-thin ">Learn more</button>
                  <button className="px-5 py- 2   rounded-full  md:text-sm text-sm border bg-blue-50 font-thin border-[#0071E3] text-blue-600 ">View pricing</button>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-2">
            <div className="h-[500px]  bg-[url('/iPhoneImage.jpg')] bg-cover bg-center bg-no-repeat ">
              <div className='flex flex-col text-center p-7 w-[50%] mx-auto'>

                <h1 className="font-bold text-5xl text-black my-1 flex justify-center items-center ">
                  iPhone
                </h1>
                <h1 className=' text-black/80 font-thin text-[20px] md:text-[20px] '>Meet the iPhone 16 family.</h1>
                <h1 className=' font-thin text-gray-500 text-base max-md:hidden '>Check back later for availability</h1>

                <div className="flex gap-5 justify-center items-center mt-2">

                  <button className="px-5 py-2  text-white rounded-full bg-[#0071E3] md:text-sm text-sm tracking-tight font-thin ">Learn more</button>
                  <button className="px-5 py-2   rounded-full  md:text-sm text-sm border bg-blue-50 font-thin border-[#0071E3] text-blue-600 ">Shop iPhone</button>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-2">
            <div className="h-[500px]  bg-[url('/iPhoneImage.jpg')] bg-cover bg-center bg-no-repeat ">
              <div className='flex flex-col text-center p-7 w-[50%] mx-auto'>

                <h1 className="font-bold text-5xl text-black my-1 flex justify-center items-center ">
                  WATCH
                </h1>
                <h1 className=' text-black/80 font-thin text-[20px] md:text-[20px] '>Meet the iPhone 16 family.</h1>
                <h1 className=' font-thin text-gray-500 text-base max-md:hidden '>Check back later for availability</h1>

                <div className="flex gap-5 justify-center items-center mt-2">

                  <button className="px-5 py-2  text-white rounded-full bg-[#0071E3] md:text-sm text-sm tracking-tight font-thin ">Learn more</button>
                  <button className="px-5 py-2   rounded-full  md:text-sm text-sm border bg-blue-50 font-thin border-[#0071E3] text-blue-600 ">Shop iPhone</button>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>




    </div >
  )
}

export default Header