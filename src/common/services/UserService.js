import AuthRepository from "../repositories/AuthRepository";

class UserService {
    
    #authRepository

    constructor(authRepository = new AuthRepository()){
        this.#authRepository = authRepository;
    }

    static encryptPassword(password){
        return password;
    }
}

export default UserService