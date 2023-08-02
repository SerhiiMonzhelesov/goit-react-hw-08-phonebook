import styled from 'styled-components';

const StyledUserMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;

  button {
    border: none;
    background-color: transparent;
    padding: 24px 0;
  }
  button:hover {
    color: black;
    text-shadow: 0px 0px 30px rgb(0 0 0);
    transform: scale(1.1);
    transition: transform 200ms ease-in-out, text-shadow 200ms ease-in-out;
  }
`;
export default StyledUserMenu;
