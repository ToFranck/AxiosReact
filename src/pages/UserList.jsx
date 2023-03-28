import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

export default function UserList() {
  
  const url ="http://82.65.6.187:8002/api/users"
  const [users, setUsers] = useState([])

  useEffect(() => {
    (async () => {
      try
      {
        const response = await axios.get(url);
        setUsers(response.data["hydra:member"])

      } catch (error) {
        console.error(error.message);

      }
    })()
  }, [])

  return (
    <>
        {users.map((user) => (

            <div>
                <Link to={`/user/${user.id}`}>
                  {user.nickname}
                </Link>
            </div>
        ))}
    </>
  )


}
