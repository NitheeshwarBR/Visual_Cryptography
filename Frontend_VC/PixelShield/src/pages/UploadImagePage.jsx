import React, { useState } from 'react';
import HorizontalStepper from '../components/HorizontalStepper';
import UploadImage from '../components/UploadImage';

function UploadImagePage() {
  const [activeStep, setActiveStep] = useState(0);

  const handleUploadSuccess = () => {
    setActiveStep(1); 
  };

  return (
    <>
      <HorizontalStepper activeStep={activeStep} />
      <UploadImage onUploadSuccess={handleUploadSuccess} />
    </>
  );
}

export default UploadImagePage;
