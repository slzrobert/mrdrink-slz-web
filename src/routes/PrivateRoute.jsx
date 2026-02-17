import PropTypes from 'prop-types';
import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) =>  {

	const { isAuthenticated } = useAuth();

	console.log(isAuthenticated);

	const url = `/Login?ReturnUrl=${window.encodeURIComponent(window.location.href)}`;

	console.log(url);

	if ( !isAuthenticated ) {
		return <Navigate to={url}></Navigate>
	} else {
		return children;
	}
}

PrivateRoute.propTypes = {
	children: PropTypes.element.isRequired
}

export default PrivateRoute;