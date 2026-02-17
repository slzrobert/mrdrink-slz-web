import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useSearchParams } from "react-router-dom";

function Login(){

    const {authLogin, isAuthenticated} = useAuth();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [searchParams] = useSearchParams();

    useEffect(()=>{
		if ( isAuthenticated ) {
            window.location = searchParams.has("ReturnUrl") 
            ? window.decodeURIComponent(searchParams.get("ReturnUrl"))
            : "/";
		}
	}, [searchParams, isAuthenticated])

    const handlerSubmit = async (e) => {
        e.preventDefault();
        authLogin(username, password);
    }

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-10 col-sm-6 col-lg-4 m-auto">
                        <h3>Login</h3>
                        <form name="formLogin" onSubmit={handlerSubmit}>
                            <div className="form-floating mb-3">
                                <input
                                    id="login"
                                    name="login"
                                    type="text"
                                    //required={true}
                                    className="form-control" 
                                    placeholder="Digite seu login" 
                                    onChange={(event) => setUsername(event.target.value)}
                                />
                                <label htmlFor="login">Digite seu login</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    id="senha"
                                    name="senha"
                                    type="password"
                                    //required={true}
                                    className="form-control"
                                    placeholder="Digite sua senha"
                                    autoComplete="off"
                                    onChange={(event) => setPassword(event.target.value)}
                                />
                                <label htmlFor="senha">Digite sua senha</label>
                            </div>
                            <div>
                                <button type="submit" className="btn btn-lg btn-primary w-100">ENTRAR</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Login