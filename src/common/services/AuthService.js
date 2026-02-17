import AuthRepository from "../repositories/AuthRepository";
import UserService from "./UserService";

class AuthService {

    constructor(
        authRepository = new AuthRepository(),
        userService = new UserService()
    ){
        this.authRepository = authRepository;
        this.userService = userService;
    }

    async login(username, password) {
        const response = await this.authRepository.login(btoa(`${username}:${password}`));
        this.authRepository.saveToken(response?.data?.token);
        return response;
    }

    getToken(){
        return this.authRepository.findToken();
    }
}

export default AuthService