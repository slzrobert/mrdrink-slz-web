import { FaSearch } from "react-icons/fa";

import Offcanvas from  "react-bootstrap/Offcanvas";
import Nav from  "react-bootstrap/Nav";
import Navbar from  "react-bootstrap/Navbar";
import DropdownButton from  "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";

import FormLogin from "../FormLogin";

import Logo from "../../assets/logo.svg"

import "./index.css";


function Header2() {
    return (
        <>
            <header className="page-header">
                <Navbar className="position-absolute w-100" expand="lg" variant="">
                    <div className="container">
                        <Offcanvas className="flex-grow-1" placement="end" responsive="lg">
                            <Offcanvas.Body>

                                <Nav bsPrefix="navbar-nav">
                                    <Nav.Item>
                                        <Nav.Link href="/Ofertas">Ofertas</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="/Cobertura">Cobertura</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="/Central">CAC</Nav.Link>
                                    </Nav.Item>
                                </Nav>

                                <Nav className="ms-auto">
                                    <Nav.Item>
                                        <Button variant="primary" size="sm" href="/Cadastro">Cadastro</Button>
                                    </Nav.Item>
                                    <DropdownButton variant="outline-light" title="Login" size="sm" className="ms-2" id="login-nav-dropdown" align="end">
                                        <FormLogin />
                                    </DropdownButton>
                                </Nav>

                            </Offcanvas.Body>
                        </Offcanvas>
                    </div>
                </Navbar>

                <div className="d-flex d-flex pt-5 pb-5">
                    <a href="/" className="mx-auto">
                        <img src={Logo} />
                    </a>
                </div>

                <div id="search-form" className="pb-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-6">
                                <form>
                                    <div className="input-group input-group-lg">
                                        <input className="form-control" placeholder="Pesquisar em Mr. Drink SLZ..." />
                                        <button type="button" className="btn btn-primary"><FaSearch /></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-2">
                    <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                        <defs>
                            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                        </defs>
                        <g className="parallax">
                            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(39, 44, 54, 0.6)" />
                            <use xlinkHref="#gentle-wave" x="48" y="2" fill="rgba(39, 44, 54, 0.4)" />
                            <use xlinkHref="#gentle-wave" x="48" y="4" fill="rgba(39, 44, 54, 0.2)" />
                            <use xlinkHref="#gentle-wave" x="48" y="6" fill="#272c36" />
                        </g>
                    </svg>
                </div>
                
            </header>
        </>
    )
}

export default Header2