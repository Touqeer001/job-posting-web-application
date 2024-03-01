import React from "react";

import AdminMenu from "../../Components/Admin/AdminMenu";
import { useAuth } from "../context/auth";
import Header from "../Header";

export const AdminDashbord = () => {
  return (
    <>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h1>Admin dashboard</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminDashbord;
