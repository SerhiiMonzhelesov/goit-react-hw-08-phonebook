import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectToken } from 'redux/selectors';
import PropTypes from 'prop-types';

export const PrivateRoute = ({ children }) => {
  const token = useSelector(selectToken);
  return token ? children : <Navigate to="/" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};