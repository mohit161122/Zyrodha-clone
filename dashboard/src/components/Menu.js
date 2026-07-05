import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };
  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  // Resolve home URL: in production the frontend is at the root domain
  const homeURL = process.env.PUBLIC_URL
    ? window.location.origin + "/"
    : "http://localhost:3000";

  return (
    <div className="menu-container">
      <img src={`${process.env.PUBLIC_URL || ""}/logo.png`} style={{ width: "50px" }} alt="logo" />
      <div className="menus">
        <ul>
          <li>
            <a
              href={homeURL}
              className="menu"
              style={{ textDecoration: "none" }}
              title="Back to Zerodha Home"
            >
              <p className="menu" style={{ color: "#4184f3" }}>← Home</p>
            </a>
          </li>
          <li>
            <Link
              to="/"
              className="menu"
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(0)}
            >
              {" "}
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard{" "}
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/orders"
              className="menu"
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/holdings"
              className="menu"
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/positions"
              className="menu"
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/funds"
              className="menu"
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/apps"
              className="menu"
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(6)}
            >
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
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
