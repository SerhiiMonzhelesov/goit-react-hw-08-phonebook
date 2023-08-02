import { useDispatch } from 'react-redux';
import { logOutThunk } from 'redux/Thunk/userThunk';
import StyledUserMenu from './StyledUserMenu';

function UserMenu({ userEmail }) {
  const dispatch = useDispatch();

  const handleLogOut = e => {
    dispatch(logOutThunk());
  };

  return (
    <StyledUserMenu>
      <p>{userEmail}</p>
      <button type="button" onClick={handleLogOut}>
        Log Out
      </button>
    </StyledUserMenu>
  );
}

export default UserMenu;
