import { useContext } from 'react'
import { AuthContext } from '../context/auth.context'
import { Navigate, Outlet } from 'react-router-dom'
 

function IsAnon() {
    const { isLoading, isLoggedIn, user } = useContext(AuthContext);
    
  
    if (isLoading) return <p>Loading...</p>

    if (isLoggedIn) {
        //navigate to user dashboard & add replace to remove previous page/login from browser history
        return <Navigate to={`/dashboard`} replace />
    } else {
        return <Outlet />
    }
}

export default IsAnon;