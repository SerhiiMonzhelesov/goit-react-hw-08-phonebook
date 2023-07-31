import { useDispatch } from 'react-redux';
import { logOutThunk } from 'redux/authThunk';

function UserMenu({ userEmail }) {
  const dispatch = useDispatch();
  const handleLogOut = e => {
    dispatch(logOutThunk());
  };

  return (
    <div>
      <p>{userEmail}</p>
      <button type="button" onClick={handleLogOut}>
        Log Out
      </button>
    </div>
  );
}

export default UserMenu;
