// import axios from 'axios';
// import React from 'react'
// import { useState } from 'react'
// import { useEffect } from 'react'

// export default function MyProfil() {

//     const url ="http://82.65.6.187:8002/api/users/1/info"
//     const [info, setInfo] = useState([])

//     // const [token, setToken] = useState(localStorage.getItem("token"))

//     useEffect(() => {
//         (async () => {
//             try
//             {
//                 const response = await axios.get(url, {
//                     headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`}
//                     // headers: {"Authorization" : `Bearer ${token}`}
//                 });
//                 setInfo(response.data)

//             } catch (error) {
//                 console.error(error.message);
//             }
//         })()
//     }, [])

//   return (
//     <>
//         <h2>My Profil</h2>
//         <div>
//             <p>Username: {info.nickname}</p>
//             <p>Email: {info.email}</p>
//         </div>
//     </>
//   )
// }


import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function Profil() {
  const url = "http://82.65.6.187:8002/api/users/1/info";
  const [info, setInfo] = useState([]);
  

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
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
        <p>Username: {info.nickname}</p>
        <p>Email: {info.email}</p>
      </div>
    </>
  );
}
