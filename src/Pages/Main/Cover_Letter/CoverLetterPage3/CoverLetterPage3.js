import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import coverLetter from "../../../../asset/cover-letter-page/humayon-cover-letter.png";
import { UseContextProvider, useStepperContext } from "./contexts/StepperContext";


import Account from "./components/steps/Account";
import Details from "./components/steps/Details";
import Payment from "./components/steps/Payment";
import Final from "./components/steps/Final";
import Stepper from './components/Stepper';
import StepperControl from './components/StepperControl';
import Closer from './components/steps/Closer';
import { useGetCoverLetterCategoryIdQuery } from '../../../../features/CoverLetterCategory/CoverLetterCategoryapi';

const CoverLetterPage3 = () => {
  const {id} = useParams();
    const [currentStep, setCurrentStep] = useState(1);
   const { userData, setUserData } = useStepperContext();

   
   console.log(id)
   const {data, isLoading, isError} = useGetCoverLetterCategoryIdQuery(id);
   console.log(data, id)

  const steps = [
    "Profile",
    "OPENER",
    "BODY",
    "CLOSER",
    "Complete",
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Account />;
      case 2:
        return <Details />;
      case 3:
        return <Payment />;
      case 4:
        return <Closer />;
      case 5:
        return <Final />;
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
        <div className='bg-[#F2FAFB] py-10'>
            <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div className='bg-white'>
                <div className=" rounded-2xl ">
                {/* Stepper */}
                <div className="horizontal container mt-5 ">
                    <Stepper steps={steps} currentStep={currentStep} />

                    <div className="my-10 p-10 ">
                    <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
                    </div>
                </div>

                {/* navigation button */}
                {currentStep !== steps.length && (
                    <StepperControl
                    handleClick={handleClick}
                    currentStep={currentStep}
                    steps={steps}
                    />
                )}
                </div>
                
                </div>
                <div>
                    <div className='p-10'><img src={data?.coverLetterImg} alt="" /></div>
                </div>
            </div>
        </div>
    );
};

export default CoverLetterPage3;