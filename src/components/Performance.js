import { Card, Typography } from "@mui/material";
import React from "react";
import StyledContainer from "../style/StyledContainer";
import StyledGrid from "../style/StyledGrid";
import StyledArticle from "../style/StyledArticle";
import Background from "../style/Background";
import Gaps from "../style/Gaps";

const Performance = () => {
  return (
    <Background>
      <StyledContainer id="performance">
        <StyledGrid>
          <Gaps>
            <StyledArticle>
              <Typography variant="h4" component="h2">
                PERFORMANCE ANALYSIS
              </Typography>
              <Typography variant="body1" component="p">
                Yunikstarz Sports Agency have a team of specialist discipline
                involving systematic observations to enhance performance and
                improve decision making primarily delivered through the
                provision of objective statistical and visual feedback. This is
                driven by a Sports needs to understand and improve tactics,
                technique and movement achieved through the delivery of real and
                lapsed time objective feedback.
              </Typography>
            </StyledArticle>
            <Card>
              <img src="/images/graph.jpg" alt="graph" />
            </Card>
          </Gaps>
          <section>
            <Typography variant="h5" component="h3">
              Why is there a performance analysis team at Yunikstarz Sports
              Agency?
            </Typography>
            <Typography variant="body1" component="p">
              To achieve repeated success, coaches and athletes must know and
              understand What they have done to make them successful or
              unsuccessful to make the right decision at the right time. However
              research shows that on average, athletes and coaches can only
              recall 30% of their performance on the pitch correctly. This is
              where our team of experts comes in to play, with the remaining 70%
              by providing the facts of what happened which makes it a vital
              component for athlete improvement.
            </Typography>
            <Typography variant="body1" component="p">
              The Yunikstarz performance analysis agents work closely along side
              with coaches and athletes to provide relevant key performance
              information that helps objectify the performance which allows for
              more evidence based decisions, augment the experiences and
              knowledge that they have gained and reduces the speculation to
              enhance their decision at the right time.
            </Typography>
            <Typography variant="body1" component="p">
              Our team of experts are integrated within the coaching environment
              and having a detailed understanding of football, they look to stay
              on the front foot of technology using the most cutting edge video
              and data platforms such as the Dart Fish Video Analysis software
              for delivering pre competition intelligence through objective
              profiles of our athletes and the opposition strength and weakness
              to supporting the selection process with objective data.
            </Typography>
            <Typography variant="body1" component="p">
              Capture, code, Analyse and feedback are the sum up of our delivery
              model in any competition with our Analyst focused on delivering
              accessible video feedback and targeted data reporting in real time
              to provide a performance advantage immediately.
            </Typography>
          </section>
        </StyledGrid>
      </StyledContainer>
    </Background>
  );
};

export default Performance;
