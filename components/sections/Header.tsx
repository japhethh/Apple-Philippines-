import React from 'react'
import { DiApple } from "react-icons/di";
import { IoSearchOutline } from "react-icons/io5";
import { SlBag } from "react-icons/sl";
const Header = () => {
  return (
    <div >
      <div className="container mx-auto">

        <div className="py-3 px-3">
          <ul className="flex justify-center items-center gap-8 text-xs font-extralight">
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

        <div className="flex justify-center items-center w-full my-3">
          <h1 className="text-sm font-extralight "><span className="text-blue-500">Shop online</span> for free delivery. Call us at 1800-1651-0525 or visit <span className="text-blue-500">support</span></h1>
        </div>
      </div>


      <div className="h-[500px] w-full bg-[url('/heroMacBook.jpg')] bg-cover bg-center bg-no-repeat text-white text-3xl font-bold mb-2">
        <div className='flex flex-col text-center p-7'>

          <h1 className="font-bold text-5xl text-black my-1">MacBook Air</h1>
          <h1 className='my-1 text-black font-thin text-[24px]'>Sky blue color</h1>
          <h1 className='my-1 text-black font-thin text-[24px]'>Sky high performance with M4</h1>
          <h1 className='my-1 font-thin text-gray-500 text-base'>Check back later for availability</h1>

          <div className="flex gap-5 justify-center items-center mt-2">

            <button className="px-4 py-2 text-white rounded-full bg-[#0071E3] text-sm">Learn more</button>
            <button className="px-4 py-2  rounded-full  text-sm border bg-blue-50 font-thin border-[#0071E3] text-blue-600">View pricing</button>
          </div>

        </div>

      </div>

      <div className="h-[500px] w-full bg-[url('/macStudio.jpg')] bg-cover bg-center bg-no-repeat ">
        <div className='flex flex-col text-center p-7 mb-2'>

          <h1 className="font-bold text-5xl text-black my-1">Mac Studio</h1>
          <h1 className='my-1 text-black font-thin text-[24px]'>M4 Max and M3 Ultra</h1>
          <h1 className='my-1 text-black font-thin text-[24px]'>Choose your superpower.</h1>
          <h1 className='my-1 font-thin text-gray-500 text-base'>Check back later for availability</h1>

          <div className="flex gap-5 justify-center items-center mt-2">

            <button className="px-4 py-2 text-white rounded-full bg-[#0071E3] text-sm">Learn more</button>
            <button className="px-4 py-2  rounded-full  text-sm border bg-blue-50 font-thin border-[#0071E3] text-blue-600">View pricing</button>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Header