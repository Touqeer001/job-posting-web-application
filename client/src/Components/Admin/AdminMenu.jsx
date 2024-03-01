import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../Header";
const AdminMenu = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group dashboard-menu">
          <h4 style={{ color: "white" }}>Admin Panel</h4>
          <NavLink
            to="/dashboard/admin/create-category"
            className="list-group-item list-group-item-action"
          >
            Create Category
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-job"
            className="list-group-item list-group-item-action"
          >
            Create job
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
