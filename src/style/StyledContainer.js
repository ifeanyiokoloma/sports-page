import { Container } from "@mui/system";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  & > * {
    padding-block: calc(60px + 1rem);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-height: calc(100vh - 60px);

    section {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    p {
      text-align: justify;
    }
  }
`;

export default StyledContainer;
