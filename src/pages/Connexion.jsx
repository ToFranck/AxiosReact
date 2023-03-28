// import React from 'react'
// import { useState } from 'react'
// import axios from 'axios'


// export default function Connexion() 
// {
//     const url = "http://82.65.6.187:8002/auth"
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
//     const [token, setToken] = useState("")
    
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.post(url, {
            
//             password,
//             email,
//             token
//         },
//         {
//             headers: {
//                 'Content-Type': 'application/json',
//             }
//         })
//         .then((response) => {
//             console.log(response.data);
//             setToken(response.data.token)
//         })
//         .catch((error) => {
//             console.log(error);

//         }
//         )
//     }


//   return (
//     <>
//     <h2>Connexion</h2>
//     <form onSubmit={
//         (e) => handleSubmit(e)
//     }>
       
//         <label>
//             Email:
//             <input type="text" name="email"

//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//             />
//         </label>
//         <label>
//             Password:
//             <input type="text" name="password"

//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//             />
//         </label>
//        <button 
//             type="submit"
            
//             >
//             Connexion
//             </button>
//     </form>

//     </>

//   )

// }



import React, { useState } from 'react';
import axios from 'axios';

export default function Connexion() {
    const url = "http://82.65.6.187:8002/auth";
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(url, {
            password,
            email
        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then((response) => {
            console.log(response.data);
            setToken(response.data.token);
            localStorage.setItem("token", response.data.token); // Stocker le token dans le localStorage
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return (
        <>
            <h2>Connexion</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
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
