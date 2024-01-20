import React from 'react'
import ft from "../assets/icons8-football-48.png"
import menu from "../assets/icons8-menu-50 (1).png"
import real from "../assets/Real-Madrid-Logo.png"
import ronaldo from "../assets/cristiano.png"
import bar from "../assets/584a9b3bb080d7616d298777.png"
import messi from "../assets/messipng.parspng.com-8.png"


function Header() {
  return (
    <>
      <div className='bg-gradient-to-br from-rose-600 via-yellow-300 to-rose-800 h-[100%]'>
        <div className='text-center sm:flex p-6 gap-2'>
          <img className='w-[3%]' src={ft} alt="" />
          <h1 className='font-bold text-lg '>FOOTBALL</h1>          
        </div>

        <div className='flex justify-center  gap-3 sm:flex sm:justify-around sm:flex-row'>
          <div className='bg-gradient-to-br from-blue-900 to-blue-400 w-[30%] h-90'>
            <img className='w-[8%]' src={menu} alt="" />
            <div className='flex p-7 justify-stretch'>
              <h1 className='text-4xl text-white font-bold'>1<sup>st</sup></h1>
              <img className='w-[45%]' src={real} alt="" />
              <img className='w-[45%]' src="https://logos-world.net/wp-content/uploads/2023/02/Premier-League-Emblem.png" alt="" />
            </div>
            <h1 className='text-white font-bold text-2xl text-center'>Real Madrid</h1>
            <img className='-ml-10 pt-4' src={ronaldo} alt="" />
        </div>

         <div className='bg-gradient-to-br from-amber-700 to-red-500 w-[30%]'>
         <img className='w-[8%]' src={menu} alt="" />
         <div className='flex p-7 justify-between gap-4 sm:ml-8'>
         <h1 className='text-4xl text-white font-bold'>1<sup>st</sup></h1>
         <img className='w-[20%]' src={bar} alt="" />
         <img className='w-[45%]' src="https://logos-world.net/wp-content/uploads/2023/02/Premier-League-Emblem.png" alt="" />
         </div>
         <h1 className='text-white font-bold text-2xl text-center'>Barcelona</h1>
         <img className='pt-4 w-[80%] ml-7' src={messi} alt="" />
         </div>

        </div>
        
      </div>
    </>
  )
}

export default Header
