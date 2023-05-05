import styled from "styled-components";

const StyledHero = styled.section`
  margin-top: 50px;
  min-height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;

  & > *:first-child {
    height: 65vh;
  }

  & > *:last-child {
    padding: 1rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  header {
    font-weight: bold;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1 {
      background: -webkit-linear-gradient(red, orange);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .yunikstarz {
      font-size: 3.5rem;
      font-weight: 900;
    }

    .welcome {
      font-size: 1.3rem;
      font-weight: 500;
    }

    p {
      font-size: 0.8rem;
      font-weight: 400;
      margin: auto;
    }
  }

  @media (min-width: 374px) {
    & > *:first-child {
      height: 65vh;
    }
  }

  @media (min-width: 600px) {
    flex-direction: row;
    align-items: center;

    & > *:first-child {
      height: 100vh;
    }

    header {
      .yunikstarz {
        font-size: 3.6rem;
      }

      .welcome {
        font-size: 2rem;
      }
    }
  }

  @media (min-width: 720px) {
    header {
      .yunikstarz {
        font-size: 4.5rem;
      }

      .welcome {
        font-size: 2rem;
      }

      p {
        font-size: 0.9rem;
      }
    }

    & > * {
      flex-basis: 50%;
    }

    p {
      max-width: 400px;
    }
  }
`;

export default StyledHero;
