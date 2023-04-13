

function LogoutButton() {



  function handleLogout() {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <button onClick={handleLogout}>Déconnexion</button>
  );
}

export default LogoutButton;
