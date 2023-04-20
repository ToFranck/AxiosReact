
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function Profil() {
  const url ="https://ynov-workplace.osc-fr1.scalingo.io/api/users/9/info"
  const [info, setInfo] = useState([]);
  

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await axios.get(url, {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         },
  //       });
  //       setInfo(response.data);
  //     } catch (error) {
  //       console.error(error.message);
  //     }
  //   })();
  // }, []);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Utilisateur")}`,
          },
        });
        setInfo(response.data);
      } catch (error) {
        console.error(error.message);
      }
    })();
  }, []);



  return (
    <>
      <div>
        <h2>My Profil</h2>
        <p> {info.id} </p>
        <p>Username: {info.nickname}</p>
        <p>Email: {info.email}</p>
        
      </div>
    </>
  );
}
