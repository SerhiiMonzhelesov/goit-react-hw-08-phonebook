import Container from 'components/Container/Container';
import StyledSection from './StyledSection';

function HomePage() {
  return (
    <StyledSection>
      <Container>
        <h1>PHONEBOOK</h1>
        <p className="home-text">
          This application is designed to manage your contacts. In order to
          start using the application, register. You will be able to add, delete
          and filter the necessary contacts. If you are already registered - log
          in.
        </p>
      </Container>
    </StyledSection>
  );
}

export default HomePage;
