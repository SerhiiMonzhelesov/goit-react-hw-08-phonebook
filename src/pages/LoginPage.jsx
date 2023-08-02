import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/Thunk/userThunk';

import Container from 'components/Container/Container';
import StyledSection from './StyledSection';

function LoginPage() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const inputs = e.currentTarget.elements;
    const email = inputs.email.value;
    const password = inputs.password.value;

    dispatch(loginThunk({ email, password }));
    e.currentTarget.reset();
  };

  return (
    <StyledSection>
      <Container>
        <h1>Login into your account</h1>
        <form onSubmit={handleSubmit} className="form-signin">
          <label>
            Email:
            <input type="email" name="email"></input>
          </label>
          <label>
            Password:
            <input type="password" name="password" minLength={7}></input>
          </label>
          <button type="submit">Sign In</button>
        </form>
      </Container>
    </StyledSection>
  );
}

export default LoginPage;
