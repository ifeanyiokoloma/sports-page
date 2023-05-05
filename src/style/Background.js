import { Box } from "@mui/material";
import React from "react";

const Background = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundColor: "secondary.main",
      }}
    >
      {children}
    </Box>
  );
};

export default Background;
