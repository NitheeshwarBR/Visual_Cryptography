import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Upload Image',
  'Shares Generation',
  'Distribute Shares',
  'Send Shares'
];

export default function HorizontalStepper({ activeStep }) {
  return (
    <Box sx={{ width: '100%',marginTop:"10px",marginBottom:"10px" }}>
      <Stepper  activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
