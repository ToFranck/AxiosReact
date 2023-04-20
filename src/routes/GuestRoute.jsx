import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const GuestRoute = ( Component ) => {
    const isLoading = useSelector((state) => state.loading.value);
    const LoggedUser = useSelector((state) => state.auth.LoggedUser);
    if (isLoading) {
        return <div>Loading...</div>
    }
    console.log(LoggedUser);
    return (
        LoggedUser ? <Navigate to="/" /> : Component

    )
}
export default GuestRoute;