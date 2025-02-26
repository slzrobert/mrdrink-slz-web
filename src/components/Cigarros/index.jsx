import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Slider from "react-slick";

import Produto from "../Produto";

import "./index.css";

function Cigarros() {

    const listProducts = [
        {
            image: "assets/beers/Amstel.png",
            name: "Cerveja Amstel 600ml",
            price: 6.99,
        },
        {
            image: "assets/beers/AntarcticaOriginal.png",
            name: "Cerveja Antarctica 600ml",
            price: 7.79,
        },
        {
            image: "assets/beers/Bohemia.png",
            name: "Cerveja Bohemia Puro Malte 600ml",
            price: 6.49,
        },
        {
            image: "assets/beers/Brahma.png",
            name: "Cerveja Brahma Chopp 600ml",
            price: 6.49,
        },
        {
            image: "assets/beers/BrahmaDM.png",
            name: "Cerveja Brahma Duplo Malte 600ml",
            price: 6.49,
        },
        {
            image: "assets/beers/Budweiser.png",
            name: "Cerveja Budweiser 600ml",
            price: 6.49,
        },
        {
            image: "assets/beers/Devassa.png",
            name: "Cerveja Devassa 600ml",
            price: 5.99,
        },
        {
            image: "assets/beers/Eisenbahn.png",
            name: "Cerveja Eisenbahn 600ml",
            price: 5.99,
        },
        {
            image: "assets/beers/Heineken.png",
            name: "Cerveja Heineken Original 600ml",
            price: 11.49,
        },
        {
            image: "assets/beers/Magnifica.png",
            name: "Cerveja Magnífica 600ml",
            price: 5.99,
        },
        {
            image: "assets/beers/Petra.png",
            name: "Cerveja Petra 600ml",
            price: 5.99,
        },
        {
            image: "assets/beers/Skol.png",
            name: "Cerveja Skol Pilsen 600ml",
            price: 6.49,
        },
        {
            image: "assets/beers/SkolPM.png",
            name: "Cerveja Skol Puro Malte 600ml",
            price: 6.49,
        },
        {
            image: "assets/beers/Spaten.png",
            name: "Cerveja Spaten 600ml",
            price: 6.49,
        },
        {
            image: "assets/beers/Stella.png",
            name: "Cerveja Stella 600ml",
            price: 6.49,
        }
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
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
