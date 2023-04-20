import './App.css';
import { useRoutes } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import routes from './routes';


export default function App() {
  
  // const loggedUser = useSelector(state => state.auth.loggedUser);
  // const routing = useRoutes(routes(loggedUser));
  const routing = useRoutes(routes());

  return (

    <>
      {routing}
    </>
      
  );
}

