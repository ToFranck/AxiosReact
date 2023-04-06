import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { useRef } from "react";

import { useSelector } from "react-redux";

export default function Navbar() {

  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };


  const LoggedUser = useSelector(state => state.auth.LoggedUser);



  return (
    <header>
      <h2>YnovMesc</h2>

      <> 
      {LoggedUser ? (<p>Ohh {LoggedUser.username} </p>):(<p>Salut</p>)}
      </>

      <nav ref={navRef} onClick={showNavbar}>

        <Link to="/" className="links">Home</Link>

        <Link to="userList" className="links">User List</Link>

        <Link to="createUser" className="links">Create User</Link>


        <Link to="login" className="links">Login</Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            color="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          color="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    </header>
  );
}
