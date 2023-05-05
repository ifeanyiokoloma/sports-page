import { Card, Typography } from "@mui/material";
import React from "react";
import StyledContainer from "../style/StyledContainer";
import StyledGrid from "../style/StyledGrid";
import StyledArticle from "../style/StyledArticle";
import Image from "./Image";
import Background from "../style/Background";

const Deals = () => {
  return (
    <Background>
      <StyledContainer id="deals">
        <StyledGrid>
          <Card>
            <Image imageName="deal/deal_shxm84.jpg" alt="deal" />
          </Card>
          <StyledArticle>
            <Typography variant="h4" component="h2">
              DEALS AND ENDORSEMENTS
            </Typography>
            <Typography variant="body1" component="p">
              Yunikstarz Sports Agency has a full time marketing staffs that
              works around the clock to aggressively scour the market to find
              brands that activate with footballers and coaches both Nationally
              and Internationally and push our clients into their plans. Wether
              it be securing a quarterback to star in national commercials aired
              on every TV network across the world or partneering an offensive
              lineman with a regional brand showcased on billboards. All our
              clients are represented by the entire Agency making it easier for
              football talents to build their brands and career across various
              platforms and discipline.
            </Typography>
            <Typography>
              Our proffesional team of experts has proven to dominate every
              aspect of the sports marketing industry by never leaving any
              potential deal on the table.
            </Typography>
          </StyledArticle>
        </StyledGrid>
      </StyledContainer>
    </Background>
  );
};

export default Deals;
