import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import './UserList.css'

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
    <div className='list'>
        {users.map((user) => (

            <div className='card'>
                <Link to={`/user/${user.id}`} className='link'>
                  
                    {user.nickname}
                  
                </Link>
            </div>
        ))}
    </div>
    </>
  )


}
