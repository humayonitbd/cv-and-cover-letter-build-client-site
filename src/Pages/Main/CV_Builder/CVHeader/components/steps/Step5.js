import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../../../AuthProvider/AuthProvider";
import { usePostCVMutation } from "../../../../../../features/CV/CVapi";
import { useStepperContext } from "../../contexts/CvStepperContext";
import { toast } from "react-hot-toast";

export default function Step5() {
  const {user} = useContext(AuthContext)
  const { userData, setUserData } = useStepperContext();
  const [postCV, {isLoading, isError}] = usePostCVMutation();
  
  
  const navigate = useNavigate();
  const submitInfo =()=>{
    postCV({...userData, userEmail: user?.email});
    toast.success('Create cv successful!');
    navigate('/dashboard');
    // console.log(userData)
  }
  console.log(userData)
    return (
      <div className="container md:mt-10">
        <div className="flex flex-col items-center">
          <div className="wrapper">
            <svg
              className="checkmark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              <circle
                className="checkmark__circle"
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />
              <path
                className="checkmark__check"
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg>
          </div>
  
          <div className="mt-3 text-xl font-semibold uppercase text-green-500">
          Thanks you give me for your informatin
          </div>
          <div className="text-lg font-semibold text-gray-500">
          finaly submited your information
          </div>
          
            <button onClick={submitInfo} className="h-10 px-5 mt-5 text-white font-bold  transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline bg-green-500 hover:text-green-100">
            submit
            </button>
         
        </div>
      </div>
    );
  }