import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetCvCategoryIdQuery } from '../../../../features/CvCategory/CvCategoryapi';
import CVStepper from './components/CVStepper';
import CVStepperControl from './components/CVStepperControl';
import Step1 from './components/steps/Step1';
import Step2 from './components/steps/Step2';
import Step3 from './components/steps/Step3';
import Step4 from './components/steps/Step4';
import Step5 from './components/steps/Step5';
import { UseContextProvider, useStepperContext } from './contexts/CvStepperContext';

const CvHeader = () => {
    const [currentStep, setCurrentStep] = useState(1);
   const { userData, setUserData } = useStepperContext();
   const {id} = useParams();
   console.log(id)
   const {data, isLoading, isError} = useGetCvCategoryIdQuery(id);
   console.log(userData,data)

  const steps = [
    "PERSONAL INFORMATION",
    "EDUCATIONAL QUALIFICATION",
    "Skill/Experiance",
    "REFERENCE",
    "Finaly",
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      case 5:
        return <Step5 />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };
    return (
        <div className='py-10 bg-[#F2FAFB]'>
            <div className='w-11/12 mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                <div className='bg-white p-5 col-span-2'>
                    <div className=" rounded-2xl ">
                {/* Stepper */}
                <div className="horizontal container mt-5 ">
                    <CVStepper steps={steps} currentStep={currentStep} />

                    <div className="my-10 p-10 ">
                    <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
                    </div>
                </div>

                {/* navigation button */}
                {currentStep !== steps.length && (
                    <CVStepperControl
                    handleClick={handleClick}
                    currentStep={currentStep}
                    steps={steps}
                    />
                )}
                </div>
                </div>
                <div className='bg-white p-5'>
                    <div><img src={data?.cvImg} alt="" /></div>
                </div>
            </div>
            
            </div>
        </div>
    );
};

export default CvHeader;