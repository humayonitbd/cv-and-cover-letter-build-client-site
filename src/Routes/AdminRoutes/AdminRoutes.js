import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import SmallLoading from '../../components/Loading/SmallLoading';
import { useAdminGetUserQuery } from '../../features/admin/adminSlice';

const AdminRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const {data} = useAdminGetUserQuery(user.email);
    console.log(data);
        const location = useLocation();
        if(loading){
            return <SmallLoading></SmallLoading>
        }

        if(user?.email && data.role === "admin"){
            return children;
        }
        return <Navigate to='/signIn' state={{from: location}} replace></Navigate>
};
 
export default AdminRoutes;