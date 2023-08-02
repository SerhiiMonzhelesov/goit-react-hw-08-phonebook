import styled from 'styled-components';

const StyledSection = styled.section`
  text-align: center;

  .form-signin {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    border: 1px solid #cce2ce4d;
    border-radius: 8px;
    padding: 30px 15px;
    box-shadow: 3px 3px 5px 0px #d7d3d3;
    text-shadow: 0px 0px 3px #16430c8f;
    background: #dcf1e759;
  }

  label {
    font-size: 16px;
    text-align: end;
    width: 100%;
    max-width: 360px;
    text-shadow: 0px 0px 3px #16430c8f;
  }

  label.filter-label {
    text-align: center;
    max-width: 450px;
  }

  input {
    font-size: 14px;
    margin-left: 15px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #878987;
    border-left: none;
    border-top: none;
    box-shadow: 1px 1px 4px 0px #d7d3d3;
    background: #f9faf9fc;
    width: 100%;
    max-width: 235px;
  }

  input.filter-input {
    margin-bottom: 15px;
  }

  button {
    font-size: 16px;
    color: #22301e;
    padding: 10px;
    border: 1px solid #8aee8a7d;
    border-radius: 8px;
    background: #93e86973;
    cursor: pointer;
    text-shadow: 0px 0px 5px #16430cc9;
    align-self: center;
    max-width: 130px;
    width: 100%;
  }

  button:hover {
    box-shadow: 3px 3px 5px 0px #b7b1b1;
    background: #6ea46efc;
    color: #ffffff;
    border: 1px solid #5da45d7d;
    text-shadow: none;
  }

  button.delete-btn {
    border: none;
    background-color: inherit;
    padding: 0;
    display: flex;
    cursor: pointer;
    color: #9e9a9a;
    width: 16px;
  }

  button.delete-btn:hover {
    color: #f26969;
    box-shadow: none;
    background: none;
    border: none;
    text-shadow: none;
  }

  .home-text {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }
`;

export default StyledSection;
