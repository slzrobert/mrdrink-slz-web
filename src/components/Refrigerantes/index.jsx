import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Slider from "react-slick";

import Produto from "../Produto";

import "./index.css";

function Refrigerantes() {

    const listProducts = [
        {
            image: "assets/beers/CocaCola-Pet-2L.png",
            name: "Coca-Cola Pet 2L",
            price: 9.99,
        },
        {
            image: "assets/beers/Fanta-Laranja-Pet-2L.png",
            name: "Fanta Laranja Pet 2L",
            price: 8.49,
        },
        {
            image: "assets/beers/Fanta-Uva-Pet-2L.png",
            name: "Fanta Uva Pet 2L",
            price: 8.49,
        },
        {
            image: "assets/beers/Guarana-Antarctica-Pet-2L.png",
            name: "Guaraná Antarctica Pet 2L",
            price: 8.99,
        },
        {
            image: "assets/beers/Guarana-Bare-Pet-2L.png",
            name: "Guaraná Baré Pet 2L",
            price: 7.49,
        },
        {
            image: "assets/beers/Guarana-Jesus-Pet-2L.png",
            name: "Guaraná Jesus Pet 2L",
            price: 6.49,
        },
        {
            image: "assets/beers/Guarana-Kuat-Pet-2L.png",
            name: "Guaraná Kuat Pet 2L",
            price: 5.99,
        },
        {
            image: "assets/beers/Pepsi-Cola-Pet-2L.png",
            name: "Pepsi Cola 2L",
            price: 5.99,
        }
    ];

    const settings = {
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
        <section>
            <Container>
                <Row>
                    <Col>
                        <h3>Refrigerantes</h3>
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

export default Refrigerantes
