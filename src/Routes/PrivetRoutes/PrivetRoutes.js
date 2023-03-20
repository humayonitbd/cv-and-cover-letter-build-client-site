import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import SmallLoading from '../../components/Loading/SmallLoading';

const PrivetRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
        const location = useLocation();
        if(loading){
            return <SmallLoading></SmallLoading>
        }

        if(user?.email){
            return children;
        }
        return <Navigate to='/signIn' state={{from: location}} replace></Navigate>
};

export default PrivetRoutes;