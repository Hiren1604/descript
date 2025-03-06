import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faArrowRight, faMicrophone } from '@fortawesome/free-solid-svg-icons'

const Body = (props) => {
    const {setAudioStream, setFile} = props;
  return (
    <div className='flex flex-col items-center justify-center py-40 lg:py-30 gap-5'>
      <h1 className='text-6xl font-medium lg:text-7xl'>De<span className='text-blue-500 font-semibold'>Script</span></h1>
      <div className='flex gap-2 items-center justify-center'>
        <h3 className='font-bold  text-md lg:text-lg text-slate-600'>Record</h3>
        <FontAwesomeIcon icon={faArrowRight} className='text-blue-700 text-sm'/>
        <h3 className='font-bold text-md lg:text-lg text-slate-600'>Transcribe</h3>
        <FontAwesomeIcon icon={faArrowRight} className='text-blue-700 text-sm'/>
        <h3 className='font-bold text-md lg:text-lg text-slate-600'>Translate</h3>
      </div>
      <button className='flex justify-between w-50 shadow-md shadow-blue-200 items-center px-3 py-3 rounded-xl cursor-pointer hover:shadow-xl duration-200 lg:w-75'>
        <p className='text-md font-semibold'>Record</p>
        <FontAwesomeIcon icon={faMicrophone} className='text-blue-800'/>
      </button>
      <p className='text-[16px] lg:text-lg'>Or <label className='text-blue-500 cursor-pointer hover:text-blue-600 duration-200'>upload <input className='hidden' type='file' accept='.mp3, .wave' onChange={(e)=>{const tempFile = e.target.files[0]; setFile(tempFile)}} /></label>a mp3 file</p>
    </div>
  )
}

export default Body
