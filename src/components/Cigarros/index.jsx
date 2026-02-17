import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Slider from "react-slick";

import Produto from "../Produto";

import "./index.css";

function Cigarros() {

    const listProducts = [
        {
            image: "assets/beers/Cigarro-Lucky-Strike.png",
            name: "Cigarro Lucky Strike",
            price: 14.99,
        },
        {
            image: "assets/beers/Cigarro-Clean-By-Click.png",
            name: "Cigarro Clean By Click",
            price: 12.99,
        },
        {
            image: "assets/beers/Cigarro-Kent.png",
            name: "Cigarro Kent",
            price: 9.99,
        },
        {
            image: "assets/beers/Cigarro-X-Lint.png",
            name: "Cigarro X-Lint",
            price: 7.99,
        },
        {
            image: "assets/beers/Cigarro-X-Lint.png",
            name: "Cigarro Dunhill Tradicional",
            price: 14.99,
        }
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
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
        <section>
            <Container>
                <Row>
                    <Col>
                        <h3>Cigarros</h3>
                    </Col>
                </Row>
                <Slider {...settings}>
                {
                    listProducts.map((product, idx) => (
                        <Produto key={idx} dados={product} />
                    ))
                }
                </Slider>
            </Container>
        </section>
    )
}

export default Cigarros
