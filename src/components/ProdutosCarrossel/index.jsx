import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import PropTypes from 'prop-types';

import Slider from "react-slick";

import Produto from "../Produto";

import "./index.css";

function ProdutosCarrossel({ categoria = '', produtos = [], filtros = ({'show' : false}) }) {

    const configSlider = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 4,
                }
              },
              {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    arrows: false
                }
              },
              {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    arrows: false
                }
              },
          ]
    }

    return (
        <section className="produtos-carrossel mb-5" style={{'display': filtros.show ? 'block': 'none'}}>
            <Container>
                <Row>
                    <Col>
                        <h3 className="produtos-carrossel--titulo">{categoria}</h3>
                    </Col>
                </Row>
                <Slider {...configSlider}>
                {
                    produtos.map((produto, idx) => (
                        <Produto key={idx} dados={produto} />
                    ))
                }
                </Slider>
            </Container>
        </section>
    )
}

ProdutosCarrossel.propTypes = {
    categoria: PropTypes.string.isRequired,
    produtos: PropTypes.arrayOf(PropTypes.object),
    filtros: PropTypes.shape({
        show: PropTypes.bool.isRequired,
        teste: PropTypes.string
    })
}

export default ProdutosCarrossel;
