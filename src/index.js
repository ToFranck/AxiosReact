import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import Nav from "./components/navbar/Nav";
import User from "./pages/user/User";
import CreateUser from "./pages/create/CreateUser";
import Login from "./pages/login/Login";
import MyProfil from "./pages/myProfil/MyProfil";
import { Provider } from "react-redux";
import { store } from "./store/store";
import axios from "axios";
import { setLoggedUser } from "./store/reducers/auth";



const Layout = () => (
  <>
    <Nav />
    <Outlet />
  </>
);


const url ="https://ynov-workplace.osc-fr1.scalingo.io";

const checkUser = async () => {
  const token = localStorage.getItem("Utilisateur");
  if (token) {
    let user = await axios.get(`${url}/api/users/1/info`,
    {
     headers: {
       'Content-Type': 'application/json',
       "Authorization" : `Bearer ${token}`,
     }
   });
   store.dispatch(setLoggedUser(setLoggedUser.data));
  }

};
 Promise.all([checkUser()])

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <App /> },
      { path: "userList", element: <UserList /> },
      { path: "user/:userId", element: <User/> },
      { path: "createUser", element: <CreateUser /> },
      { path: "login", element:<Login />},
      { path: "profil", element:<MyProfil />},
      { path: "*", element: <div>404</div>}
    ],
  }
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
