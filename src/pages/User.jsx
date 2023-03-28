import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {

    let { userId } = useParams();
  return (
    <>
    <h2>User id:</h2>
      {userId}
    </>
  )
}
