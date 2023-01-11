import { Card, Typography } from "@mui/material";
import React from "react";
import StyledContainer from "../style/StyledContainer";
import StyledGrid from "../style/StyledGrid";
import StyledArticle from "../style/StyledArticle";

const Career = () => {
  return (
    <StyledContainer id="career">
      <StyledGrid>
        <Card>
          <img src="/images/career.jpg" alt="career" />
        </Card>
        <StyledArticle>
          <Typography variant="h4" component="h2">
            CAREER PLANNING
          </Typography>
          <Typography variant="body1" component="p">
            At Yunikstarz, our goal is to support and advance the careers of all
            our clients and their families relying on our resources and strongly
            maintained relationships to maximise value for our clients. With
            careful career planning in what is practically a family atmosphere
            and managing the careers of professional sportsmen which is possible
            by the Way the Yunikstarz team is set up and functions, made up of
            close to twenty component and dedicated professionals indeed, this
            is the main reason behind the success of Yunikstarz which has lead
            to some of the major transfers in the world of football.
          </Typography>
        </StyledArticle>
      </StyledGrid>
    </StyledContainer>
  );
};

export default Career;
