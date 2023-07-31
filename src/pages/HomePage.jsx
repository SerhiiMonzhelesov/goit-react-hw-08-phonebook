import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUserThunk } from 'redux/authThunk';

function HomePage() {
  const dispatch = useDispatch();
  const token = useSelector(state => state.user.token);

  useEffect(() => {
    if (!token) return;
    dispatch(refreshUserThunk(token));
  }, [token, dispatch]);

  return (
    <>
      <h1>THIS IS HOMEPAGE.</h1>
    </>
  );
}

export default HomePage;
