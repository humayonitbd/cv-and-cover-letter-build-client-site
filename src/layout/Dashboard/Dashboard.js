import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useAdminGetUserQuery } from '../../features/admin/adminSlice';
import Footer from '../../SharedPage/Footer/Footer';
import Header from '../../SharedPage/Header/Header';

const Dashboard = () => {
  const {user} = useContext(AuthContext);
  const {data} = useAdminGetUserQuery(user.email);
  console.log(data)
    return (
        <div>
            <Header />
            <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content bg-slate-50">
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  <Outlet />
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-200 shadow text-base-content">
      {
        data?.admin === "admin" ? <><li className='mb-2 bg-white'><Link to="/dashboard/allUsers">All Users</Link></li>
        <li className='mb-2 bg-white'><Link to="/dashboard/allCV">All CV</Link></li>
        <li className='mb-2 bg-white'><Link to="/dashboard/allCoverLetter">All Cover Letter</Link></li></>:<><li className='mb-2 bg-white'><Link to="/dashboard/my-cv">My CV</Link></li>
      <li className='mb-2 bg-white'><Link to="/dashboard/my-coverLetter">Cover letter</Link></li></>
      }
      
      
    </ul>
  
  </div>
</div>
        </div>
        
    );
};

export default Dashboard;