import React, { useEffect } from 'react';

function LogoutButton() {

  useEffect(() => {
    localStorage.clear(); 
  }, []);

  function handleLogout() {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <button onClick={handleLogout}>Déconnexion</button>
  );
}

export default LogoutButton;
