import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';

import PropTypes from 'prop-types';

import "./index.css";

Menu.propTypes = {
    show: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired

}

function Menu({show, onHide}) {

    return (
        <>
            <Offcanvas className="menu" show={show} placement="start" onHide={onHide}>
                <Offcanvas.Body>
                    <Nav className="flex-column">
                        <Nav.Item>
                            <Nav.Link href="/">Principal</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Cervejas 600ml</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Cervejas Long Neck</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Refrigerantes</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Menu;
