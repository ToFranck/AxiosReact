import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/navbar/Nav";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import CreateUser from "./pages/create/CreateUser";
import CreateGroup from "./pages/createGroup/CreateGroups";
import Login from "./pages/login/Login";
import MyProfil from "./pages/myProfil/MyProfil";
import PrivateRoute from "./routes/PrivateRoute";
import GuestRoute from "./routes/GuestRoute";
import Home from "./pages/home/Home";


const Layout = () => (
    <>
      <Nav />
      <Outlet />
    </>
  );
  
  const routes = () => [
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/userlist",
          element: <UserList />,
        },
        {
          path: "user/:userId",
          element: (<User />),
        },

        {
            path: "profil",
            element: <>{PrivateRoute(<MyProfil />)}</>
          },
        {
          path: "createUser",
          element: (<CreateUser />),
        },
        {
            path: "createGroup",
            element: <>{PrivateRoute(<CreateGroup />)}</>
          },
        {
          path: "login",
          // element: (<Login />),
          element: <>{GuestRoute(<Login />)}</>
        },
        {
            path: "*",
            element: <> 404 </>
          }
      ]
    }
  ];
  
  export default routes;