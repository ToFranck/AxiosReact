import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const GuestRoute = ( Component ) => {
    const isLoading = useSelector(state => state.loading.value);
    const loggedUser = useSelector(state => state.auth.loggedUser);
    if (isLoading) {
        return <div>Loading...</div>
    }
    return (
        loggedUser ? <Navigate to="/" /> : <Component/>

    )
}
export default GuestRoute;