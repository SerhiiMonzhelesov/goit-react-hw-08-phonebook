import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  border-bottom: 1px solid grey;

  nav {
    display: flex;
    gap: 40px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  padding: 10px;
`;
