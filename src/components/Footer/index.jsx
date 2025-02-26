import { Col, Container, Row } from "react-bootstrap";
import Logo from '../../assets/logo-branca.svg';
import Flags from '../../assets/flags.png';

import "./index.css"

export default function Footer() {
  return (
    <footer className="page-footer shadow-lg mt-5 pt-5 pb-5">
        <Container>
            <Row>
                <Col sm={12} md={12} lg={2}>
                    <img src={Logo} width={200} />
                </Col>
                <Col sm={12} md={6} lg={5}>
                    <h3 className="title-footer">Horário de Funcionamento:</h3>
                    <p>Segunda a sexta, das 8h às 22h;<br/>Sábado, das 8h às 23h;<br/>Domingos e feriados, das 8h às 18h.</p>
                    <h3 className="title-footer">Formas de Pagamento:</h3>
                    <img src={Flags} />
                </Col>
                <Col sm={12} md={6} lg={5}>
                    Aqui
                </Col>
            </Row>
        </Container>
    </footer>
  )
}
