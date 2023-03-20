import React from 'react';
import dashboardImg from "../../../../src/asset/Dashboard/img1.png";

const DashboardPage = () => {
    return (
        <div>
            <div className='flex justify-center md:pt-28 pt-20 lg:pt-36'>
                <div className=''><img src={dashboardImg} alt="" className='w-full' /></div>
            </div>
        </div>
    );
};

export default DashboardPage;