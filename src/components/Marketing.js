import { Card, Typography } from "@mui/material";
import React from "react";
import StyledContainer from "../style/StyledContainer";
import StyledGrid from "../style/StyledGrid";
import StyledArticle from "../style/StyledArticle";
import Background from "../style/Background";

const Marketing = () => {
  return (
    <Background>
      <StyledContainer id="marketing">
        <StyledGrid>
          <StyledArticle>
            <Typography variant="h4" component="h2">
              TALENT MARKETING
            </Typography>
            <Typography variant="body1" component="p">
              Whether you are currently an amateur or already an Olympian,
              whether you are looking for an endorsement deal or need help
              planning your next career move, our human resource team has an
              exclusive roster for several football players and coaches,
              providing them with a meticulous through and professional service.
              Yunikstarz Talent Marketing team maintains a long standing
              commitment to growing it's clients careers and play a critical
              role in enabling our firm to deliver the best results for our
              clients through a very unique marketing skills by our staffs who
              are service oriented and passionate about football opportunities.
              We reach the world through creating one of a kind opportunities
              and partnerships for our football clients and support our clients
              philanthropic and advocacy work to make an impact in their
              families.
            </Typography>
          </StyledArticle>
          <Card>
            <img src="/images/footballer.jpg" alt="graph" />
          </Card>
        </StyledGrid>
      </StyledContainer>
    </Background>
  );
};

export default Marketing;
