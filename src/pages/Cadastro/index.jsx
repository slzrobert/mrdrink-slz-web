import { useEffect } from "react";

function Cadastro(){

    useEffect(() => {
        document.title =  'Cadastro - ' + import.meta.env.VITE_APP_TITLE;
    }, []);

    return(
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-4 m-auto">
                            <h3 className="text-center">Cadastro</h3>
                            <form>
                                <div className="row">
                                    <div className="col-12 mt-2">
                                        <label htmlFor="email" className="form-label">E-mail</label>
                                        <input type="email" className="form-control" id="email" required />
                                    </div>
                                    <div className="col-12 mt-2">
                                        <label htmlFor="nome" className="form-label">Nome e sobrenome</label>
                                        <input type="text" className="form-control" id="nome" required />
                                    </div>
                                    <div className="col-12 mt-2">
                                        <label htmlFor="cpf" className="form-label">CPF</label>
                                        <input type="text" className="form-control" id="cpf" required />
                                    </div>
                                    <div className="col-12 mt-2">
                                        <label htmlFor="telefone" className="form-label">Telefone</label>
                                        <input type="text" className="form-control" id="telefone" required />
                                    </div>
                                    <div className="col-12 mt-2">
                                        <label htmlFor="dtNascimento" className="form-label">Data de nascimento</label>
                                        <input type="text" className="form-control" id="dtNascimento" required />
                                    </div>
                                </div>
                                <div className="form-check mt-2">
                                    <input type="checkbox" className="form-check-input" id="same-address" />
                                    <label className="form-check-label" htmlFor="same-address">Declaro que li e aceito os <a href="/terms">termos e condições</a> e a <a href="/privacy">política de privacidade</a>.</label>
                                </div>
                                <button className="w-100 btn btn-primary btn-lg mt-2" type="submit">Concordar e Continuar</button>
                            </form>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cadastro;