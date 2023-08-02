import styled from 'styled-components';

const StyledContainer = styled.div`
  color: #455e42;
  padding: 40px 25px 25px 25px;
  max-width: 100%;
  margin: 0;

  h1 {
    margin: 0 0 20px 0;
    font-size: 32px;
    text-shadow: 1px 1px 2px #16430c8f;
  }

  h2 {
    font-size: 26px;
    text-shadow: 1px 1px 2px #16430c8f;
    margin-bottom: 18px;
  }

  & .message {
    font-size: 26px;
    text-shadow: 1px 1px 2px #16430c8f;
    margin-top: 50px;
  }
`;

export default StyledContainer;
