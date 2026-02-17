const SESSION_NAME_TOKEN = "window_session_token";

export const setToken = (token) => {
    window.sessionStorage.setItem(SESSION_NAME_TOKEN, token);
}

export const getToken = () => {
    const token = window.sessionStorage.getItem(SESSION_NAME_TOKEN);
    if (token === null || token === ''){
        return null;
    }

    return token;
}

export const removeToken = () => {
    window.sessionStorage.removeItem(SESSION_NAME_TOKEN)
}

export const checkTokenValidity = () => {
    const token = getToken();
    console.log("Token Valido: " + token);
}

export default null
