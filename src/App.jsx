import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import FileDisplay from './components/FileDisplay';

const App = () => {
  const [file, setFile] = useState(null);
  const [audioStream, setAudioStream] = useState(null);
  const [recordingStatus, setRecordingStatus] = useState('inactive');
  const [audioChunks, setAudioChunks] = useState([]);
  const [duration, setDuration] = ('0');
  const mediaRecorder = useRef(null);
  const mimeType = 'audio/webm';

  async function startRecording() {
    let tempStream;
    console.log("startRecording");
    try {
      const streamData = navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false,
      })
      tempStream = streamData;
    }
    catch(err) {
      console.log(err.message);
      return;
    }
    const media = new MediaRecorder(tempStream, {type: mimeType});
    mediaRecorder.current = media;
    mediaRecorder.current.start();
    let localAudioChunks = [];
    mediaRecorder.current.ondataavailable = (event) => {
      if(typeof event.data === "undefined") { return; }
      if(event.data.size === 0) { return; }
      localAudioChunks.push(event.data);
    }
    setAudioChunks(localAudioChunks)
  }
  async function stopRecording() {
    setRecordingStatus('inactive');
    console.log('Stop Recording');

    mediaRecorder.current.stop();
    mediaRecorder.current.onstop = ()=> {

    }
  }
  const isAudioAvailable = file || audioStream;

  function handleAudioReset() {
    setFile(null);
    setAudioStream(null);
  }

  return (
    <div className='bg-gradient-to-b from-blue-100 to-transparent text-slate-700 text-sm sm:text-base min-h-screen flex flex-col'>
      <Header />
      {isAudioAvailable ? (
        <FileDisplay file={file} audioStream={audioStream} handleAudioReset={handleAudioReset} />
      ) : (
        <Body setFile={setFile} setAudioStream={setAudioStream} />
      )}
    </div>
  );
};

export default App;
