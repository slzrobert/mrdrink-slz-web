import BaseRepository from "./BaseRepository";
import { setToken, getToken } from "../helpers/AuthHelper"

class AuthRepository extends BaseRepository {

    constructor(){
        super()
    }

    /**
     * Returns a string xxxxxxx.
     * @param credentials description
     */
    async login(credentials) {

        const response = await this.postAsync({path: '/auth/login', requestHeader: {
            'Authorization': `Basic ${credentials}`
        }});

        return response;
    }

    saveToken(token) {
        setToken(token);
    }

    findToken() {
        return getToken();
    }
}

export default AuthRepository