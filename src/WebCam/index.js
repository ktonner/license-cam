import React, { useRef } from 'react';
import Webcam from 'react-webcam';

const WebcamComponent = ({ onCapture }) => {
  const webcamRef = useRef(null);
  

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    onCapture(imageSrc);
  };

  return (
    <div>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      <br></br>
      <button onClick={captureImage}>Capture Image</button>
    </div>
  );
};

export default WebcamComponent;