import { TextField, Typography } from "@mui/material";
import React from "react";
import StyledContainer from "../style/StyledContainer";
import StyledCard from "../style/StyledCard";
import StyledGrid from "../style/StyledGrid";
import StyledContact from "../style/StyledContact";

const Contact = () => {
  return (
    <StyledContact id="contact">
      <StyledContainer>
        <section>
          <Typography variant="h4" component="h2">
            Contact Us
          </Typography>

          <StyledGrid>
            <StyledCard
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                // sx={{ alignSelf: "flex-start" }}
                variant="subtitle2"
                component="h3"
              >
                Telephone
              </Typography>
              <Typography
                color="primary"
                sx={{ fontWeight: "bold" }}
                variant="h5"
              >
                <a href="tel:+2347065370113">+234 706 537 0113</a>
              </Typography>
              <Typography
                color="primary"
                sx={{ fontWeight: "bold" }}
                variant="h5"
                component="p"
              >
                <a
                  href="tel:+2347059885052
"
                >
                  +234 705 988 5052
                </a>
              </Typography>
            </StyledCard>

            <StyledCard
              sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <Typography variant="subtitle2" component="h3">
                Send Us Email
              </Typography>
              <div style={{ display: "flex", gap: "1rem" }}>
                <TextField
                  sx={{ flexBasis: "50%" }}
                  id="fname"
                  label="First Name"
                  variant="filled"
                />
                <TextField
                  sx={{ flexBasis: "50%" }}
                  id="lname"
                  label="Last Name"
                  variant="filled"
                />
              </div>
              <TextField id="tel" label="Telephone" variant="filled" />
              <TextField
                id="msg"
                label="Message"
                multiline
                rows={4}
                variant="filled"
              />
            </StyledCard>
          </StyledGrid>
        </section>
      </StyledContainer>
    </StyledContact>
  );
};

export default Contact;
