import { useContext, useEffect } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../../../AuthProvider/AuthProvider";
import { usePostResumeMutation } from "../../../../../../features/resume/resumeApi";
import { useStepperContext } from "../../contexts/StepperContext";

export default function Final() {
  const { userData, setUserData } = useStepperContext();
  const {user} = useContext(AuthContext)
const [postResume, {isLoading, isError, isSuccess}] = usePostResumeMutation();
  // postResume(closerSort);
  let myShows = ['Sincerely', 'Expectations', 'Best Regards', 'Expression', 
'Thank you', 'Kind regards'];
let showCloser = myShows[Math.floor(Math.random() * myShows.length)];
  const navigate = useNavigate();
  console.log(userData);
  const submitInfo =()=>{
    postResume({...userData, userEmail: user?.email, closerSort:showCloser});
    toast.success('Create cover letter successful!');
    navigate('/dashboard');
  }
  
//   if (isSuccess) {
//     toast.success('Post successful');
//  }
//  else {
//     toast.error('Post failed');
//  }
    
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
       
            <button onClick={submitInfo} className="h-10 px-5 text-white font-bold  transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline bg-green-500 hover:text-green-100">
              submit
            </button>
         
        </div>
      </div>
    );
  }