import React from "react";
import { Link } from "react-router-dom";

const DashboardSidebar = ({ activeLink }) => {
  return (
    <aside className="dashboard-sidebar col-12 col-lg-3">
      <ul className="list-group">
        <Link to="/account/dashboard">
          <li
            className={`list-group-item ${
              activeLink === "/account/dashboard" ? "active" : ""
            }`}
          >
            Account Dashboard
          </li>
        </Link>
        <Link to="/account/user-info">
          <li
            className={`list-group-item ${
              activeLink === "/account/user-info" ? "active" : ""
            }`}
          >
            User Information
          </li>
        </Link>
        <Link to="/account/address">
          <li
            className={`list-group-item ${
              activeLink === "/account/address" ? "active" : ""
            }`}
          >
            Address
          </li>
        </Link>
        <Link to="/account/orders">
          <li
            className={`list-group-item ${
              activeLink === "/account/orders" ? "active" : ""
            }`}
          >
            My Orders
          </li>
        </Link>
        <Link to="/account/wishlist">
          <li
            className={`list-group-item ${
              activeLink === "/account/wishlist" ? "active" : ""
            }`}
          >
            My Wish List
          </li>
        </Link>
        <Link to="/account/logout">
          <li
            className={`list-group-item ${
              activeLink === "/account/logout" ? "active" : ""
            }`}
          >
            Sign Out
          </li>
        </Link>
      </ul>
    </aside>
  );
};

export default DashboardSidebar;
