import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
      <h2>Connexion</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button type="submit">Connexion</button>

        
      </form>
    </>
  );
}
