import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const handleProfileClick = () => {
    alert("Profile clicked");
  };

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} alt="logo" />
      <div className="menus">
        <ul>
          <li>
            <Link to="/" className="menu">Dashboard</Link>
          </li>
          <li>
            <Link to="/orders" className="menu">Orders</Link>
          </li>
          <li>
            <Link to="/holdings" className="menu">Holdings</Link>
          </li>
          <li>
            <Link to="/positions" className="menu">Positions</Link>
          </li>
          <li>
            <Link to="/funds" className="menu">Funds</Link>
          </li>
          <li>
            <Link to="/apps" className="menu">Apps</Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;