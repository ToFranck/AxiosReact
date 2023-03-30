import React from "react";
import { useState } from "react";
import axios from "axios";
import "./CreateUser.css";

// import { useEffect } from 'react'
// import { useParams } from 'react-router-dom'

export default function CreateUser() {
  const url = "http://82.65.6.187:8002/api/users";
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [plainPassword, setplainPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        url,
        {
          nickname,
          plainPassword,
          email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )

      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      
      <form onSubmit={(e) => handleSubmit(e)} className="form">
      <h2 className="title">Crée un utilisateur </h2>
        <label>
          <p>Nickname</p>
          <input
            type="text"
            name="nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </label>
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
            value={plainPassword}
            onChange={(e) => setplainPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit" className="submit">Submit</button>
      </form>
    </>
  );
}
