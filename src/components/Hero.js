import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import StyledHero from "../style/StyledHero";
import Image from "./Image";

const Hero = () => {
  return (
      <StyledHero id="home">
        <div>
          <Image
            imageName="hero/footballer_l7oveg.png"
            alt="footballer"
            format="png"
          />
        </div>

        <Container>
          <header>
            <Typography component="h1" variant="h3">
              <span className="welcome">Welcome to</span>{" "}
              <span className="yunikstarz">Yunikstarz</span>
            </Typography>

            <Typography
              sx={{
                
              }}
              component="p"
              variant="body1"
            >
              We create infinite first class oppurtunities for young in need of
              potential hires from a variety of background.
            </Typography>
          </header>
        </Container>
      </StyledHero>
  );
};

export default Hero;
