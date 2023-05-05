import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import React from "react";
import StyledContainer from "../style/StyledContainer";
import StyledCard from "../style/StyledCard";
import StyledGrid from "../style/StyledGrid";
import StyledContact from "../style/StyledContact";
import BG from "./BG";
import {
  Facebook,
  Instagram,
  Send,
  Twitter,
  YouTube,
} from "@mui/icons-material";

const Contact = () => {
  return (
    <BG imagename="https://res.cloudinary.com/kaiserlowe/image/upload/w_auto,c_fill/v1683286448/yunikstarz/contact/contact_nxt5ud.webp">
      <StyledContact id="contact">
        <StyledContainer>
          <Box component="section">
            <Typography color="white" variant="h4" component="h2">
              Contact Us
            </Typography>

            <StyledGrid>
              <StyledCard>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                    gap: "2rem",
                  }}
                >
                  <Box
                    component="section"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "1em",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      color="primary"
                      variant="subtitle2"
                      component="h3"
                    >
                      Telephone
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "'Sacramento', cursive",
                      }}
                      variant="h5"
                      component="p"
                    >
                      <a className="tel" href="tel:+2347065370113">
                        +234-706-537-0113
                      </a>
                    </Typography>

                    <Typography
                      sx={{
                        fontFamily: "'Sacramento', cursive",
                      }}
                      variant="h5"
                      component="p"
                    >
                      <a
                        className="tel"
                        href="tel:+2347059885052
"
                      >
                        +234-705-988-5052
                      </a>
                    </Typography>
                  </Box>
                  <Box
                    component="section"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <Typography
                      color="primary"
                      variant="subtitle2"
                      component="h3"
                    >
                      Social
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "1rem",
                      }}
                    >
                      <IconButton size="large" aria-label="facebook">
                        <Facebook fontSize="inherit" />
                      </IconButton>
                      <IconButton size="large" aria-label="facebook">
                        <Twitter fontSize="inherit" />
                      </IconButton>
                      <IconButton size="large" aria-label="facebook">
                        <YouTube fontSize="inherit" />
                      </IconButton>
                      <IconButton size="large" aria-label="facebook">
                        <Instagram fontSize="inherit" />
                      </IconButton>
                    </Box>
                    
                  </Box>
                </Box>
              </StyledCard>

              <StyledCard>
                <Box
                  sx={{
                    // border: "3px solid #ffa500",
                    padding: "1rem",
                    borderRadius: "5px",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <Typography
                    color="primary"
                    variant="subtitle2"
                    component="h3"
                  >
                    Send Us Email
                  </Typography>
                  <div style={{ display: "flex", gap: "1rem" }}>
                    <TextField
                      sx={{
                        flexBasis: "50%",
                      }}
                      id="fname"
                      label="First Name"
                      variant="standard"
                      color="primary"
                    />
                    <TextField
                      sx={{ flexBasis: "50%" }}
                      id="lname"
                      label="Last Name"
                      variant="standard"
                      color="primary"
                    />
                  </div>
                  <TextField id="tel" label="Telephone" variant="standard" />
                  <TextField
                    id="msg"
                    label="Message"
                    multiline
                    rows={4}
                    variant="standard"
                    color="primary"
                  />
                  <Button variant="contained" endIcon={<Send />}>
                    Send
                  </Button>
                </Box>
              </StyledCard>
            </StyledGrid>
          </Box>
        </StyledContainer>
      </StyledContact>
    </BG>
  );
};

export default Contact;
