import React, { useState } from 'react';
import './App.css';
import WebcamComponent from './WebCam';
import OcrComponent from './OCR';

function App() {
  const [capturedImage, setCapturedImage] = useState(null);
  const [ocrResult, setOcrResult] = useState('');

  const handleCapture = (imageSrc) => {
    setCapturedImage(imageSrc);
  };

  const handleOcrComplete = (result) => {
    setOcrResult(result);
  };

  return (
    <div className="App">
      <header className="App-header">
<p>Capture an image of your license</p>
<WebcamComponent onCapture={handleCapture}/>
{capturedImage && (
        <div>
          <img src={capturedImage} alt="Captured" />
          <OcrComponent imageSrc={capturedImage} onOcrComplete={handleOcrComplete} />
        </div>
      )}
      {ocrResult && (
        <div>
          <h3>OCR Result:</h3>
          <p>{ocrResult}</p>
        </div>
      )}
      </header>

    </div>
  );
}

export default App;
