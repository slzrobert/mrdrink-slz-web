import Container from "react-bootstrap/Container";
import Slider from "react-slick";

import LogoAntarctica from "../../assets/marcas/logo-antarctica.png"
import LogoBrahma from "../../assets/marcas/logo-brahma.png"
import LogoDevassa from "../../assets/marcas/logo-devassa.png"
import LogoHeineken from "../../assets/marcas/logo-heineken.png"
import LogoSkol from "../../assets/marcas/logo-skol.png"
import LogoSpaten from "../../assets/marcas/logo-spaten.png"
import LogoStella from "../../assets/marcas/logo-stella.png"

import "./index.css"

const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                infinite: true,
                slidesToShow: 6,
                autoplay: true,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                autoplay: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                autoplay: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                autoplay: true,
                arrows: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                autoplay: true,
                arrows: false,
            }
        },
    ]
}

function Marcas() {
    return (
        <section>
            <Container>
                <Slider {...settings}>
                    <div className="item"><img className="marca" src={LogoAntarctica} /></div>
                    <div className="item"><img className="marca" src={LogoBrahma} /></div>
                    <div className="item"><img className="marca" src={LogoDevassa} /></div>
                    <div className="item"><img className="marca" src={LogoHeineken} /></div>
                    <div className="item"><img className="marca" src={LogoSkol} /></div>
                    <div className="item"><img className="marca" src={LogoSpaten} /></div>
                    <div className="item"><img className="marca" src={LogoStella} /></div>
                </Slider>
            </Container>
        </section>
    );
}

export default Marcas;