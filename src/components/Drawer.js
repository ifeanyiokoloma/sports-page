import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { navLinks } from "../store/data";
import { NavbarContext } from "../context";

const MobileDrawer = () => {
  const { handleDrawerToggle } = useContext(NavbarContext);

  return (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography className="brand" variant="h6" sx={{ my: 2 }}>
        Yunikstarz
      </Typography>
      <Divider />
      <List>
        {navLinks.map((link) => (
          <>
            <ListItem key={link.name} disablePadding>
              <ListItemButton sx={{ textAlign: "right" }}>
                <ListItemText
                  primary={
                    <a class="nav-links" href={`#${link.link}`}>
                      {link.name}
                    </a>
                  }
                />
              </ListItemButton>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
      
    </Box>
  );
};

export default MobileDrawer;
