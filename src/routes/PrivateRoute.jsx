import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';
const PrivateRoute = (Component) => {
    const isLoading = useSelector(state => state.loading.value);
    const loggedUser = useSelector(state => state.auth.loggedUser);
    if (isLoading) {
        return <div>Loading...</div>
    }
    return (
        loggedUser ? Component : <Navigate to='/' />
    )
}
export default PrivateRoute