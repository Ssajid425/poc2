import React, { useState } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepConnector from '@mui/material/StepConnector';
import { styled,ThemeProvider} from '@mui/material/styles';
import Button from '@mui/material/Button';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Step1Form from '../stepperData/step1Form';
import Step2Form from '../stepperData/step2Form';
import Step3Form from '../stepperData/step3Form';
import Step4Form from '../stepperData/step4Form';
import theme from './theme';

const StyledStepper = styled(Stepper)(({ theme}) => ({
  backgroundColor: theme.palette.primary.blue,
  height: '84px',
  display: 'flex',
  boxShadow: '0px 4px 12px',
  justifyContent: 'center',
  paddingLeft: '150px', // Add left padding to center the lines
  paddingRight: '40px', // Add right padding to center the lines
  overflowX: 'auto',
  alignItems: 'center',
}));

const StyledConnector = styled(StepConnector)(({ theme ,active,completed  }) => ({
  '& .MuiStepConnector-line': {
    borderColor: active || completed ? theme.palette.common.white : theme.palette.secondary.main,
    borderWidth: '9px', // Adjust the border width here
    borderRadius: '5px',
    alignSelf: 'stretch',
  },
}));

const StepText = styled('div')(({ theme }) => ({
  color: 'white',
  fontWeight: 'bold',
  marginBottom: theme.spacing(2), // Add margin to create space between text and stepper
  position: 'absolute',
  top: '-40px', // Adjust the top position as needed
  left: '0',
  right: '0',
  display: 'flex',
  justifyContent: 'center',
}));

const Footer = styled('div')(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px 64px",
  gap: "16px",
  position: "fixed",
  width: "100%",
  height: "80px",
  left: "0",
  bottom: "0",
  background: "#FFFFFF",
  boxShadow: "0px -4px 12px rgba(33, 33, 33, 0.05)",
  maxWidth: "100vw",
  boxSizing: "border-box",
}));



const NextButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#0071EB', // Set the background color for the next button
  color: 'white',
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "12px 24px",
  gap: "8px",
  textTransform: 'none'
}));

const PrevButton = styled(Button)(({ theme }) => ({
  color: '#0071EB',
  marginLeft: theme.spacing(2), // Add additional styles as needed
  textTransform: 'none'
}));




export default function CustomStepper() {
    const [activeStep, setActiveStep] = useState(0);
    const totalSteps = 8;
  
    const handleNext = () => {
        if (activeStep === totalSteps - 1) {
          toast.error("Cannot proceed further. You've reached the last step.");
        } else {
          setActiveStep(prevStep => prevStep + 1);
        }
      };
    
    const handleBack = () => {
      setActiveStep(prevStep => prevStep - 1);
    };
  
    const renderStepContent = () => {
      switch (activeStep) {
        case 0:
          return <Step1Form />;
        case 1:
          return <Step2Form />;
        case 2:
          return <Step3Form />;
        case 3:
          return <Step4Form />;
        default:
          return null;
      }
    };
  
    return (
      <div>
        <div>
          <StyledStepper activeStep={activeStep} alternativeLabel>
            <Step style={{ width: 'calc(100% / 8)', display: 'flex', justifyContent: 'center' }}>
              <StyledConnector active={activeStep === 0} completed={activeStep > 0}/>
              <StepText>Step {activeStep + 1} of 8 Application</StepText>
            </Step>
            {[...Array(7)].map((_, index) => (
              <Step key={index} style={{ width: 'calc(100% / 8)', display: 'flex', justifyContent: 'center' }}>
                <StyledConnector active={activeStep === index + 1} completed={activeStep > index + 1}/>
              </Step>
            ))}
          </StyledStepper>
        </div>
        <div>{renderStepContent()}</div>
        <Footer>
          <PrevButton variant="outlined" color="primary" disableElevation onClick={handleBack} disabled={activeStep === 0}>
            Back
          </PrevButton>
          <NextButton  variant="contained" color="primary" disableElevation onClick={handleNext}>
            {activeStep === totalSteps-1? 'Finish' : 'Continue →'}
          </NextButton >
        </Footer>
        <ToastContainer /> {/* Add ToastContainer component for displaying toasts */}
      </div>
    );
  }
  