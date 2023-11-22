import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css"

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    function clearCookie(name) {
      document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    }
    clearCookie("userdata");
    navigate("/");
  };

  return (
    <div className="header">
      <h1>React Assessment</h1>
      <div className="links">
        <Link className="link" to="/home">
          Home
        </Link>
        <Link className="link" to="/users">
          Users
        </Link>
        {/* <Link className="link" onClick={handleLogout}>
          Logout
        </Link> */}
        <button className="signout" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Header;
