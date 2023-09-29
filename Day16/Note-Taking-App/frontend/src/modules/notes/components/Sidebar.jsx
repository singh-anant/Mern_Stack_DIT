import React from "react";
import { NavLink } from "react-router-dom";
// NavLink has much more features than Link itself

const Sidebar = () => {
  return (
    // Add and Update will be same component.
    // While other 3 will be same screen only.
    <>
      <NavLink to="/dashboard">Home</NavLink>
      <br />
      <NavLink to="/dashboard/add-note/Update">Update A Note</NavLink>
      <br />
      <NavLink to="/dashboard/add-note/Add">Add A Note</NavLink>
      <br />
      <NavLink to="/dashboard/view-all?type=delete">Delete A Note</NavLink>
      <br />
      <NavLink to="/dashboard/view-all?type=view">View All Note</NavLink>
      <br />
      <NavLink to="/dashboard/view-all?type=search">Search A Note</NavLink>
    </>
  );
};

export default Sidebar;
