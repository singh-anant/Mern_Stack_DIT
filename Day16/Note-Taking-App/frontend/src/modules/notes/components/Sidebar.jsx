import React from "react";
import { NavLink } from "react-router-dom";
// NavLink has much more features than Link itself

const Sidebar = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <br />
      <NavLink to="/add-note">Add A Note</NavLink>
      <br />
      <NavLink to="/delete-note">Delete A Note</NavLink>
      <br />
      <NavLink to="/view-all">View All Note</NavLink>
      <br />
      <NavLink to="/search-note">Search A Note</NavLink>
      <br />
      <NavLink to="/update-note">Update A Note</NavLink>
    </>
  );
};

export default Sidebar;
