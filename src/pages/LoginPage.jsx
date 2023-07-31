import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginThunk } from 'redux/authThunk';

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector(state => state.user.userData);

  useEffect(() => {
    if (!userData) return;
    navigate('/contacts', { replace: true });
  }, [navigate, userData]);

  const handleSubmit = e => {
    e.preventDefault();
    const inputs = e.currentTarget.elements;
    const email = inputs.email.value;
    const password = inputs.password.value;

    dispatch(loginThunk({ email, password }));
    e.currentTarget.reset();
  };

  return (
    <>
      <h1>Login into your account</h1>
      <form onSubmit={handleSubmit}>
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
    </>
  );
}

export default LoginPage;
