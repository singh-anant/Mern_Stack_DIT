import { Container, Grid } from "@mui/material";
import React from "react";
import Header from "../../../shared/components/Header";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  // console.log(location);
  // Navbar is AppBar in materialUI
  return (
    <Container>
      <Header
        username={location.state.username}
        displayPicture={location.state.profilePicture}
      />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Sidebar />
        </Grid>
        <Grid item xs={8}>
          <Main />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
