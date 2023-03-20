import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../layout/Dashboard/Dashboard";
import Main from "../../layout/Main/Main";
import AllCoverLetterPage from "../../Pages/Dashboard/AllCoverLetterPage/AllCoverLetterPage";
import AllCVPage from "../../Pages/Dashboard/AllCVPage/AllCVPage";
import DashboardPage from "../../Pages/Dashboard/Dashboard/DashboardPage";
import MyCoverLetterPage from "../../Pages/Dashboard/MyCoverLetterPage/MyCoverLetterPage";
import MyCvPage from "../../Pages/Dashboard/MyCvPage/MyCvPage";
import UsersPage from "../../Pages/Dashboard/UsersPage/UsersPage";
import About from "../../Pages/Main/About/About/About";
import Contact from "../../Pages/Main/Contact/Contact/Contact";
import CoverLetterDownload from "../../Pages/Main/Cover_Letter/CoverLetterDownload/CoverLetterDownload";
import CoverLetterPage1 from "../../Pages/Main/Cover_Letter/CoverLetterPage1/CoverLetterPage1";
import CoverLetterPage2 from "../../Pages/Main/Cover_Letter/CoverLetterPage2/CoverLetterPage2";
import CoverLetterPage3 from "../../Pages/Main/Cover_Letter/CoverLetterPage3/CoverLetterPage3";
import CoverLetterPage4 from "../../Pages/Main/Cover_Letter/CoverLetterPage4/CoverLetterPage4";
import Cover_Letter from "../../Pages/Main/Cover_Letter/Cover_Letter";
import CVDownloadPage from "../../Pages/Main/CV_Builder/CVDownloadPage/CVDownloadPage";
import CvHeader from "../../Pages/Main/CV_Builder/CVHeader/CvHeader";
import CvPage1 from "../../Pages/Main/CV_Builder/CvPage1/CvPage1";
import CV_Builder from "../../Pages/Main/CV_Builder/CV_Builder";
import Home from "../../Pages/Main/Home/Home/Home";
import SignIn from "../../Pages/Main/Login/SignIn/SignIn";
import SignUp from "../../Pages/Main/Login/SignUp/SignUp";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
import PrivetRoutes from "../PrivetRoutes/PrivetRoutes";

export const router = createBrowserRouter([
    {path:'/', element:<Main></Main>, children:[
        {path:'/', element:<Home></Home>},
        {path:'/home', element:<Home></Home>},
        {path:'/about', element:<About></About>},
        {path:'/contact', element:<Contact></Contact>},
        {path:'/signIn', element:<SignIn></SignIn>},
        {path:'/signUp', element:<SignUp></SignUp>},
        {path:'/cv-builder', element:<CV_Builder></CV_Builder>},
        {path:'/coverLetter', element:<Cover_Letter></Cover_Letter>},
        {path:'/cv-builder/create-cv', element:<CvPage1></CvPage1>},
        {path:'/cv-builder/cv-header/:id', element:<CvHeader></CvHeader>},
        {path:'/createCoverLetter', element:<CoverLetterPage1></CoverLetterPage1>},
        {path:'/coverLetter/selected', element:<CoverLetterPage2></CoverLetterPage2>},
        {path:'/coverLetter/:id', element:<CoverLetterPage3></CoverLetterPage3>},
        {path:'/coverLetter/2/12345697887', element:<CoverLetterPage4></CoverLetterPage4>},
    ]},
    {path:'/dashboard', element:<PrivetRoutes><Dashboard></Dashboard></PrivetRoutes>, children:[
        {path:'/dashboard', element:<PrivetRoutes><DashboardPage></DashboardPage></PrivetRoutes>},
        {path:'/dashboard/my-cv', element:<PrivetRoutes><MyCvPage></MyCvPage></PrivetRoutes>},
        {path:'/dashboard/my-coverLetter', element:<PrivetRoutes><MyCoverLetterPage></MyCoverLetterPage></PrivetRoutes>},
        {path:'/dashboard/download/:id', element:<PrivetRoutes><CoverLetterDownload></CoverLetterDownload></PrivetRoutes>},
        {path:'/dashboard/cv/download/:id', element:<PrivetRoutes><CVDownloadPage></CVDownloadPage></PrivetRoutes>},
        {path:'/dashboard/allUsers', element:<AdminRoutes><UsersPage></UsersPage></AdminRoutes> },
        {path:'/dashboard/allCV', element:<AdminRoutes><AllCVPage></AllCVPage></AdminRoutes>  },
        {path:'/dashboard/allCoverLetter', element:<AdminRoutes><AllCoverLetterPage></AllCoverLetterPage></AdminRoutes> },
        
    ]}
])