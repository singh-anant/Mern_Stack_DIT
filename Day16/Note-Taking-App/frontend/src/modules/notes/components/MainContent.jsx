import React from "react";
import { Outlet } from "react-router-dom";

const MainContent = () => {
  return (
    <>
      {/* <p>Main Content</p> */}
      <Outlet />
    </>
  );
};

export default MainContent;
