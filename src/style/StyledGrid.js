import styled from "styled-components";

const StyledGrid = styled.div`
display: flex;
flex-direction: column;

  @media (min-width: 500px) {
    flex-direction: row;
    gap: 1rem;

    & >* {
        flex-basis: 50%
    }
`;

export default StyledGrid;
