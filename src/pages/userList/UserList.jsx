import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setUsers as setUsersReducer } from "../../store/reducers/user";
import "./UserList.css";

export default function UserList() {

  // const url ="http://82.65.6.187:8002"
  const url = "https://ynov-workplace.osc-fr1.scalingo.io"
  const dispatch = useDispatch();
  const [users, setUsers] = useState([])
  const usersInternal = useSelector(state => state.user.users);


  const retrieveUsers = async () => {
    let response = await axios.get(`${url}/api/users`,);
    let usersTmp = response.data["hydra:member"];
    dispatch(setUsersReducer(usersTmp));
    setUsers(usersTmp);
  }

  useEffect(() => {
    if(usersInternal.length > 0) {
      setUsers(usersInternal);
    } else {
      retrieveUsers();
      }
    },[])


  //v1 sans redux
  // useEffect(() => {
  //   (async () => {
  //     try
  //     {
  //       const response = await axios.get(url);
  //       setUsers(response.data["hydra:member"])

  //     } catch (error) {
  //       console.error(error.message);

  //     }
  //   })()
  // }, [])

  return (
    <>
      <div className="list">
        {users.map((user) => (
          <div className="card">
            <Link to={`/user/${user.id}`} className="link">
              {user.nickname}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
