import styles from "./UploadImagePage.module.css"

import React, { useState } from 'react';
import HorizontalStepper from '../../components/HorizontalStepper';
import UploadImage from '../../components/UploadImage/UploadImage';
import NavigationArrow from "../../components/NavigationArrow/NavigationArrow";

function UploadImagePage() {
  const [activeStep, setActiveStep] = useState(0);

  const handleUploadSuccess = () => {
    setActiveStep(1); 
  };

  return (
    <>
    <div className={styles.uploadPage}>
      <HorizontalStepper activeStep={activeStep} />
      <UploadImage onUploadSuccess={handleUploadSuccess} />
      <NavigationArrow/>
      </div>
    </>
  );
}

export default UploadImagePage;
