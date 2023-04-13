import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter
} from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./store/store";
import axios from "axios";
import { setLoggedUser } from "./store/reducers/auth";






const url = "https://ynov-workplace.osc-fr1.scalingo.io";

const checkUser = async () => {
  const token = localStorage.getItem("Utilisateur");
  if (token) {
    let user = await axios.get(`${url}/api/users/1/info`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    store.dispatch(setLoggedUser(setLoggedUser.data));
  }
};

// const router = createBrowserRouter([
//   {
//     element: <Layout />,
//     children: [
//       { path: "/", element: <App /> },
//       { path: "userList", element: <UserList /> },
//       { path: "user/:userId", element: <User /> },
//       { path: "createUser", element: <CreateUser /> },
//       { path: "createGroup", element: <CreateGroup /> },
//       { path: "login", element: <Login /> },
//       { path: "profil", element: <MyProfil /> },
//       { path: "*", element: <div>404</div> },
//     ],
//   },
// ]);

async function retrieveLoggedUser() {
  try {
    let loggedUser = await axios.get(`${url}/api/users/1/info`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("Utilisateur")}`,
      },
    });
    console.log(loggedUser.data);
    let user = loggedUser.data;
    console.log(user);
    let userLogged = { nickname: user.nickname, id: user.id };
    store.dispatch(setLoggedUser(userLogged));
  } catch (e) {}
}

Promise.all([retrieveLoggedUser(), checkUser()]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <RouterProvider router={router} /> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
