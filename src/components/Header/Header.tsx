import React from "react";
import { AppBar, Toolbar, Typography, CssBaseline } from "@material-ui/core";

export const Header = () => {
  return (
    <div>
      <AppBar position="static">
        <CssBaseline />
        <Toolbar>
          <Typography>Navbar</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
