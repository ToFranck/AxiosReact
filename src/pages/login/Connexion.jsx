import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Connexion.css";

export default function Connexion() {
  const url = "http://82.65.6.187:8002/auth";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Nouvelle variable d'état
  const nav = useNavigate();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        url,
        {
          password,
          email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token); // Stocker le token dans le localStorage
        nav("/profil");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("Les identifiants sont incorrects.");
      });
  };

  return (
    <>
      
      <form onSubmit={(e) => handleSubmit(e)} className="form">
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
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
            type="text"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button type="submit" className="submit">Connexion</button>

        
      </form>
    </>
  );
}
