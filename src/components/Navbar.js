import React, { useContext } from "react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import MobileDrawer from "./Drawer";
import { NavbarContext } from "../context";

const drawerWidth = 240;

const Navbar = () => {
  const { handleDrawerToggle, mobileOpen, container } =
    useContext(NavbarContext);

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <Typography
            className="brand"
            variant="h6"
            component="div"
            sx={{ bgcolor: "black", width: "fit-content", px: "1rem", borderRadius: "10px" }}
          >
            <span className="yunik">Yunik</span><span className="stars" style={{}}>starz</span>
          </Typography>

          <Box component="nav">
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              <MobileDrawer />
            </Drawer>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
