import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StyledHeader, StyledNavLink } from './StyledHeader';
import UserMenu from 'components/UserMenu/UserMenu';
import Container from 'components/Container/Container';

function Layout() {
  const userData = useSelector(state => state.user.userData);
  return (
    <>
      <StyledHeader>
        <Container className="header-container">
          <nav>
            <StyledNavLink to="/">HOME</StyledNavLink>
            {userData ? (
              <div className="wrapper-user-menu">
                <StyledNavLink to="contacts">My phonebook</StyledNavLink>{' '}
                <UserMenu userEmail={userData.email} />
              </div>
            ) : (
              <div className="wrapper-auth-link">
                <StyledNavLink to="register">SIGN UP</StyledNavLink>
                <StyledNavLink to="login">SIGN IN</StyledNavLink>
              </div>
            )}
          </nav>
        </Container>
      </StyledHeader>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
