import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation } from "react-router-dom";
import { Avatar } from "@mui/material";

const Header = ({ username, displayPicture }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#5cb55c" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NOTES_APP📄
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome {username}
          </Typography>
          <Button color="inherit">Logout</Button>
          <Avatar alt="U" src={displayPicture} />
          <img src="" alt="" />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
