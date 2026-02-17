import { AxiosError } from 'axios';
import PropTypes from 'prop-types';
import { createContext, useState } from 'react';
import { removeToken } from '../common/helpers/AuthHelper';
import AuthService from '../common/services/AuthService';

const AuthContext = createContext({});

export function AuthProvider({ children }) {

	const authService = new AuthService();

	const [authError, setAuthError] = useState(null);
	const [isAuthenticated, setIsAuthenticated] = useState(() => {
		const token = authService.getToken();
		console.log(token);
		return token ? true : false;
	});

	const authLogin = async (username, password) => {
		try {
			if (username && password) {
				await authService.login(username, password);
				setIsAuthenticated(true);
				return;
			}
			throw new Error("Informe seu nome de usuário e senha.");
		} catch (error) {

			if ( error instanceof Error || error instanceof AxiosError){
				console.error(error.message);
				setAuthError({
					message: error.message
				});
			}
		}
	}

	const authLogout = () => {
		removeToken();	
	}

	return (
		<AuthContext.Provider value={{authLogin, authLogout, authError, isAuthenticated}}>
			{children}
		</AuthContext.Provider>
	)
}

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired
}

export default AuthContext
