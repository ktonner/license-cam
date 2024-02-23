// src/components/Ocr.js
import React from 'react';
import Tesseract from 'tesseract.js';

const OcrComponent = ({ imageSrc, onOcrComplete }) => {
  const performOCR = async () => {
    const { data: { text } } = await Tesseract.recognize(
      imageSrc,
      'eng',
      { logger: (info) => console.log(info) }
    );

    onOcrComplete(text);
  };

  return (
    <div>
      <button onClick={performOCR}>Perform OCR</button>
    </div>
  );
};

export default OcrComponent;
