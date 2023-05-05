import { Card, Typography } from "@mui/material";
import React from "react";
import StyledContainer from "../style/StyledContainer";
import StyledGrid from "../style/StyledGrid";
import StyledList from "../style/StyledList";
import StyledArticle from "../style/StyledArticle";
import Image from "./Image";
import Background from "../style/Background";

const Draft = () => {
  return (
    <Background>
      <StyledContainer id="draft">
        <StyledGrid>
          <Card>
            <Image imageName="draft/draft_iketd8.jpg" alt="trophy" />
          </Card>
          <div>
            <StyledArticle>
              <Typography variant="h4" component="h2">
                DRAFT PREPARATION
              </Typography>

              <Typography variant="body1" component="p">
                Our commitment to our client service is reflected in everything
                we do. Our team presents the best players with the best
                representation in addition, we provide elite footballers with
                top of the line marketing services and positioning our clients
                for proffesional football success through;
              </Typography>
            </StyledArticle>
            <StyledList>
              <li>
                Developing customized pre-draft training programs for our
                clients.
              </li>

              <li>Media training and interview preparation for clients.</li>

              <li>
                Concierge Services as arranging travel and logistics documents
                for clients and their families
              </li>
            </StyledList>
          </div>
        </StyledGrid>
      </StyledContainer>
    </Background>
  );
};

export default Draft;
