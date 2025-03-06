import React from 'react';

const FileDisplay = ({ handleAudioReset, file, audioStream }) => {
    return (
        <div className='flex flex-col items-center justify-center py-40 lg:py-30 gap-5'>
            <h1 className='text-6xl font-medium lg:text-7xl'>
                Your<span className='text-blue-500 font-semibold'> File</span>
            </h1>
            <h2>File Name</h2>
            <h3>{file ? file.name : "No file selected"}</h3>
            <div className='flex justify-between items-center w-60'>
                <button
                    onClick={handleAudioReset}
                    className='p-2 shadow-lg shadow-slate-100 hover:shadow-slate-200 duration-200 border-none cursor-pointer rounded-lg text-slate-700'
                >
                    Reset
                </button>
                <button className='p-2 border shadow-lg shadow-blue-100 hover:shadow-blue-200 duration-200 border-none cursor-pointer bg-white rounded-lg text-blue-900'>
                    Transcribe
                </button>
            </div>
        </div>
    );
};

export default FileDisplay;
