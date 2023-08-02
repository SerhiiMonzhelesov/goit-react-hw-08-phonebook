import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  border-bottom: 1px solid grey;

  .header-container {
    padding-top: 0;
    padding-bottom: 0;
  }

  nav {
    display: flex;
    gap: 40px;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
  }

  .wrapper-auth-link {
    display: flex;
    gap: 24px;
  }

  .wrapper-user-menu {
    display: flex;
    gap: 20px;
    width: 100%;
    justify-content: space-between;
  }
`;

export const StyledNavLink = styled(NavLink)`
  padding: 24px 0;
  text-decoration: none;
  color: inherit;

  &.active {
    color: black;
    text-shadow: 0px 0px 7px rgb(13 86 28 / 71%);
    transform: scale(1.1);
    transition: transform 200ms ease-in-out, text-shadow 200ms ease-in-out;
  }

  &:hover {
    color: black;
    text-shadow: 0px 0px 30px rgb(0 0 0);
    transition: text-shadow 200ms ease-in-out;
  }
`;
