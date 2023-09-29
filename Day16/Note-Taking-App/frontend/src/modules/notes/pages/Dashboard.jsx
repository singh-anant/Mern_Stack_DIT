import { Container, Grid } from "@mui/material";
import React from "react";
import Header from "../../../shared/components/Header";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  // Navbar is AppBar in materialUI
  if (location && location.state) {
    localStorage.setItem("state", JSON.stringify(location.state));
    console.log(JSON.parse(localStorage.getItem("state"))?.username);
  }
  return (
    <Container>
      {/* sending props username and displayPicture to Header */}

      <Header
        username={JSON.parse(localStorage.getItem("state"))?.username}
        displayPicture={
          JSON.parse(localStorage.getItem("state"))?.profilePicture
        }
      />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Sidebar />
        </Grid>
        <Grid item xs={8}>
          <MainContent />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
