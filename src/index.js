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
import Connexion from "./pages/login/Connexion";
import MyProfil from "./pages/myProfil/MyProfil";


const Layout = () => (
  <>
    <Nav />
    <Outlet />
  </>
);



const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <App /> },
      { path: "userList", element: <UserList /> },
      { path: "user/:userId", element: <User/> },
      { path: "createUser", element: <CreateUser /> },
      { path: "connexion", element:<Connexion />},
      { path: "profil", element:<MyProfil />},
      { path: "*", element: <div>404</div>}
    ],
  }
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
