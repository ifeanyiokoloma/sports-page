import { Typography } from "@mui/material";
import React from "react";
import StyledContainer from "../style/StyledContainer";
import StyledGrid from "../style/StyledGrid";
import Gaps from "../style/Gaps";

const About = () => {
  return (
    <StyledContainer id="about">
      <article>
        <Typography variant="h4" component="h2">
          About Us
        </Typography>
        <StyledGrid>
          <Gaps>
            <Typography component="p" variant="body1">
              Yunikstarz Sports Agency Limited is a football career driven
              innovation firm known for connecting young footballers, elite
              coaches and personnels into active professional football service
              head by the CEO Onyibo E. Immanuel. We are player hiring bay
              holding registered in Nigeria Coperate Affairs Commission with the
              registration NO. 1994913 founded in 2022 and currently has offices
              in Nigeria and Cote divoire. We have been immensely successful in
              creating a regional network of highly talented and energetic young
              footballers mostly from Africa and beyond with great input to
              achieving the critical-mission project and goals of any
              professional football club around the world.
            </Typography>
            <Typography component="p" variant="body1">
              Keeping pace with projects and being on the lookout for the
              extremely talented football individuals specially from African
              teams,clubs and a range of backgrounds has been ever more
              challenging. Here is where Yunikstarz Sports Agency Limited comes
              into play to bring the best suited talent for your Club needs. All
              of our resources are multifaceted and comes with years of
              commended performance and more years of active footballer service
              ahead.
            </Typography>
            <Typography component="p" variant="body1">
              The discovery, promotion of young talents and providing them with
              careful career planning in what is practically a family atmosphere
              in a positive working environment is the main aim and the key
              reason for the success Yunikstarz Sports Agency Limited.
            </Typography>
          </Gaps>
          <div>
            <img src="/images/about/about.jpg" alt="about" />
          </div>
        </StyledGrid>
      </article>
    </StyledContainer>
  );
};

export default About;
