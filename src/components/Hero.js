import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import StyledHero from "../style/StyledHero";

const Hero = () => {
  return (
    <StyledHero>
      <div>
        <img src="/images/hero/footballer.png" alt="football" />
      </div>
      <Container>
        <header>
          <Typography component="h1" variant="h3">
            <span className="welcome">Welcome to</span>{" "}
            <span className="yunikstarz">Yunikstarz</span>
          </Typography>
          <Typography sx={{ color: "black" }} component="p" variant="subtitle1">
            <b>
              We create infinite first class oppurtunities for young in need of
              potential hires from a variety of background.
            </b>
          </Typography>
        </header>
      </Container>
    </StyledHero>
  );
};

export default Hero;
