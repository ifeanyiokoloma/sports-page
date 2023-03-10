import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import StyledHero from "../style/StyledHero";
import Background from "../style/Background";

const Hero = () => {
  return (
    <Background>
      <StyledHero id="home">
        <div>
          <img src="/images/hero/footballer.png" alt="football" />
        </div>

        <Container>
          <header>
            <Typography component="h1" variant="h3">
              <span className="welcome">Welcome to</span>{" "}
              <span className="yunikstarz">Yunikstarz</span>
            </Typography>

            <Typography
              sx={{ color: "black" }}
              component="p"
              variant="subtitle1"
            >
              We create infinite first class oppurtunities for young in need of
              potential hires from a variety of background.
            </Typography>
          </header>
        </Container>
      </StyledHero>
    </Background>
  );
};

export default Hero;
