import { useContext } from 'react'
import { AuthContext } from '../context/auth.context'
import { Navigate, Outlet } from 'react-router-dom'
 

function IsAnon() {
    const { isLoading, isLoggedIn, user } = useContext(AuthContext);
    
  
    if (isLoading) return <p>Loading...</p>

    if (isLoggedIn) {
        //navigate to user dashboard & addreplace to remove previous page/login from browser history
        return <Navigate to={`/user/${user._id}`} replace />
    } else {
        return <Outlet />
    }
}

export default IsAnon;