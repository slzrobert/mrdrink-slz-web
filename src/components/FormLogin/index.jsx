import { Row, Col, Form, Button } from "react-bootstrap"

function FormLogin(){
    return (
        <>
            <Form className="container" style={{width: 200}}>
                <Row className="mb-2">
                    <Col>
                        <Form.Control size="sm" placeholder="Login" />
                    </Col>
                </Row>
                    
                <Row className="mb-2">
                    <Col>
                        <Form.Control size="sm" type="password" placeholder="Senha" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button type="button" size="sm" variant="success" className="w-100">Login</Button>
                    </Col>
                </Row>

            </Form>
        </>
    )
}

export default FormLogin