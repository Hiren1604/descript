import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    const [darkMode, setDarkMode] = useState(false);
  return (
    <div className='px-6 py-10 flex justify-between items-center lg:px-40'>
      <h1 className=' text-xl lg:text-2xl font-medium'>De<span className='text-blue-500 font-semibold'>Script</span></h1>
      <div className='flex gap-6'>
      <button className='border-none bg-blue-900 text-white cursor-pointer px-3 rounded-lg shadow-'><FontAwesomeIcon icon={faSun} /></button>
      <button className='p-2 border shadow-lg shadow-blue-100 hover:shadow-blue-200 duration-200 border-none cursor-pointer bg-white rounded-lg'><h1 className='font-medium flex gap-2 items-center justify-center text-l'><FontAwesomeIcon icon={faPlus} className='text-xl'/>New</h1></button>
      </div>
    </div>
  )
}

export default Header
