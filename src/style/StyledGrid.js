import styled from "styled-components";

const StyledGrid = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;

  @media (min-width: 500px) {
    flex-direction: row;
    gap: 3rem;

    & >* {
        flex-basis: 50%;
    }
`;

export default StyledGrid;
