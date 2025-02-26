//import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

import Container from  "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Offcanvas from  "react-bootstrap/Offcanvas";
import Nav from  "react-bootstrap/Nav";
import Navbar from  "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { FaSearch } from "react-icons/fa";

import Logo from "../../assets/logo.svg"

import "./index.css";

function Header2() {
    return (
        <>
            <header className="page-header">
                <Navbar className="position-absolute w-100" expand="lg" variant="">
                    <Container>
                        <Offcanvas className="flex-grow-1" placement="end" responsive="lg">
                            <Offcanvas.Body>


                                <Nav bsPrefix="navbar-nav">
                                    <Nav.Item>
                                        <Nav.Link href="#offers">Ofertas</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#coverage">Cobertura</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#coverage">CAC</Nav.Link>
                                    </Nav.Item>
                                </Nav>

                                <Nav className="ms-auto">
                                    <Nav.Item>
                                        <Button variant="outline-light" size="sm" href="#login">Login</Button>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Button variant="success" size="sm" className="ms-2" href="#create-account">Criar Conta</Button>
                                    </Nav.Item>
                                </Nav>

                            </Offcanvas.Body>
                        </Offcanvas>
                    </Container>
                </Navbar>

                <div className="d-flex d-flex pt-5 pb-5">
                    <a href="#" className="mx-auto">
                        <img src={Logo} />
                    </a>
                </div>

                <div id="search-form" className="pb-5">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="6">
                                <Form>
                                    <InputGroup size="lg">
                                        <Form.Control
                                            placeholder="Pesquisar em Mr. Drink SLZ..."
                                            aria-label="Pesquisar em Mr. Drink SLZ..."
                                            aria-describedby="basic-addon2"
                                            className=" rounded-0"
                                        />
                                        <Button variant="primary" className=" rounded-0"><FaSearch /></Button>
                                    </InputGroup>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="">
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