import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./Connexion.css";

//redux
import { useDispatch } from "react-redux";
import { setLoggedUser } from "../../store/reducers/auth";
// import { auth, userInfo } from "../../store/reducers/auth";



export default function Login() {
  // const url = "http://82.65.6.187:8002/auth";
  // const url = "https://ynov-workplace.osc-fr1.scalingo.io/auth";
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [token, setToken] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");
  const nav = useNavigate();

  // onSubmit={handleSubmit}
// const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post(
  //       url,
  //       {
  //         password,
  //         email,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     )
  //     .then((response) => {
  //       console.log(response.data);
  //       setToken(response.data.token);
  //       localStorage.setItem("token", response.data.token);
  //       nav("/profil");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setErrorMessage("Les identifiants sont incorrects.");
  //     });
  // };



  //redux
  
  
  const url ="https://ynov-workplace.osc-fr1.scalingo.io"
  const [email, setEmail] = useState("")
  const [password, setpassword] = useState("")
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/auth`, {
        email,
        password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      localStorage.setItem("Utilisateur", response.data.token);
      nav("/profil");

      const userResponse = await axios.get(`${url}/api/users/9/info`,
       {
        headers: {
          'Content-Type': 'application/json',
          "Authorization" : `Bearer ${localStorage.getItem("Utilisateur")}`
        }
      });

      console.log(userResponse.data);

      dispatch(setLoggedUser(userResponse.data));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
    
      <form
        onSubmit={handleSubmit}
         className="form">
        {/* {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>} */}
        <h2 className="title">Connexion</h2>
        <label>
          <p>Email</p>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <p>Password</p>

          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </label>

        <button type="submit" className="submit">
          Connexion
        </button>
      </form>
    </>
  );
}
