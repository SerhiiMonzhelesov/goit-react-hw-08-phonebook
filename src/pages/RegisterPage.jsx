import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/Thunk/userThunk';

import Container from 'components/Container/Container';
import StyledSection from './StyledSection';

function RegisterPage() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const inputs = e.currentTarget.elements;
    const name = inputs.name.value;
    const email = inputs.email.value;
    const password = inputs.password.value;

    dispatch(registerThunk({ name, email, password }));
    e.currentTarget.reset();
  };

  return (
    <StyledSection>
      <Container>
        <h1>Register Account</h1>
        <form onSubmit={handleSubmit} className="form-signin">
          <label>
            Name:
            <input type="text" name="name"></input>
          </label>
          <label>
            Email:
            <input type="email" name="email"></input>
          </label>
          <label>
            Password:
            <input type="password" name="password" minLength={7}></input>
          </label>
          <button type="submit">Sign Up</button>
        </form>
      </Container>
    </StyledSection>
  );
}

export default RegisterPage;
