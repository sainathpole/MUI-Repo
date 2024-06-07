import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          FIFTH WALL
        </Typography>
        <Button color="inherit">About</Button>
        <Button color="inherit">Team</Button>
        <Button color="inherit">Portfolio</Button>
        <Button color="inherit">project</Button>
        <Button color="inherit">haring</Button>
        <Button color="inherit">management structure</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
