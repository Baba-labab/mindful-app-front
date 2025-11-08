import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';
import { Navigate, Outlet } from "react-router-dom";


function IsPrivate() {
    const { isLoggedIn, isLoading } = useContext(AuthContext);
    if (isLoading) return <p>Loading....</p>

    if (!isLoggedIn) {
        return <Navigate to="/login" replace/>
    } else {
        return <Outlet />;
    }
  
}

export default IsPrivate;