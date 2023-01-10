import { Typography } from "@mui/material";
import React from "react";
import StyledContainer from "../style/StyledContainer";

const Contracts = () => {
  return (
    <StyledContainer id="contract">
      <article>
        <Typography variant="h4" component="h2">
          CONTRACT NEGOTIATIONS
        </Typography>
        <Typography variant="body1" component="p">
          Yunikstarz Sports Agency is a full service acquisition firm that has
          been representing talented players, elite coaches, personnel and
          brands with satellite offices in Anambra state Nigeria and Abidjan
          Cote divoire.
        </Typography>
        <Typography variant="body1" component="p">
          Over the years we have created a culture with a most widely
          experienced team in the industry composed of forward thinkers, trained
          attorneys and master negotiators. Our agents hold bachelors, masters
          and law degrees from some of the most prestigious universities across
          the world.
        </Typography>
        <Typography variant="body1" component="p">
          We bring unparalleled expertise and experience to the contract
          negotiation process, with strong ,trusted relationship across the
          league, we understand exactly how much value our clients bring to
          their team and how to get great result at the negotiating table.
        </Typography>
      </article>
    </StyledContainer>
  );
};

export default Contracts;
