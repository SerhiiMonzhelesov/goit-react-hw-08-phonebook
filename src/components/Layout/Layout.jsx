import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StyledHeader, StyledNavLink } from './StyledHeader';
import UserMenu from 'components/UserMenu/UserMenu';

function Layout() {
  const userData = useSelector(state => state.user.userData);
  return (
    <>
      <StyledHeader>
        <nav>
          <StyledNavLink to="/">HOME</StyledNavLink>
          {userData && (
            <StyledNavLink to="contacts">My phonebook</StyledNavLink>
          )}
          {!userData && (
            <>
              <StyledNavLink to="register">SIGN UP</StyledNavLink>
              <StyledNavLink to="login">SIGN IN</StyledNavLink>
            </>
          )}
        </nav>
        {userData && <UserMenu userEmail={userData.email} />}
      </StyledHeader>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
