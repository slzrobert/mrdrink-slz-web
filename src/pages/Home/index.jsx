import Marcas from '../../components/Marcas';
import InstrucaoPedido from '../../components/InstrucaoPedido';
import ProdutosCarrossel from '../../components/ProdutosCarrossel';
import OndeEstamos from '../../components/OndeEstamos';

function Home(){

    let filtros = {
        show: true
    }

    const refrigerantes = [
        {
            category: "Refrigerantes",
            image: "assets/beers/CocaCola-Pet-2L.png",
            name: "Coca-Cola Pet 2L",
            price: 9.99,
        },
        {
            category: "Refrigerantes",
            image: "assets/beers/Fanta-Laranja-Pet-2L.png",
            name: "Fanta Laranja Pet 2L",
            price: 8.49,
        },
        {
            category: "Refrigerantes",
            image: "assets/beers/Fanta-Uva-Pet-2L.png",
            name: "Fanta Uva Pet 2L",
            price: 8.49,
        },
        {
            category: "Refrigerantes",
            image: "assets/beers/Guarana-Antarctica-Pet-2L.png",
            name: "Guaraná Antarctica Pet 2L",
            price: 8.99,
        },
        {
            category: "Refrigerantes",
            image: "assets/beers/Guarana-Bare-Pet-2L.png",
            name: "Guaraná Baré Pet 2L",
            price: 7.49,
        },
        {
            category: "Refrigerantes",
            image: "assets/beers/Guarana-Jesus-Pet-2L.png",
            name: "Guaraná Jesus Pet 2L",
            price: 6.49,
        },
        {
            category: "Refrigerantes",
            image: "assets/beers/Guarana-Kuat-Pet-2L.png",
            name: "Guaraná Kuat Pet 2L",
            price: 5.99,
        },
        {
            category: "Refrigerantes",
            image: "assets/beers/Pepsi-Cola-Pet-2L.png",
            name: "Pepsi Cola 2L",
            price: 5.99,
        }
    ];

    const cigarros = [
        {
            category: "Cigarros",
            image: "assets/beers/Cigarro-Lucky-Strike.png",
            name: "Cigarro Lucky Strike",
            price: 14.99,
        },
        {
            category: "Cigarros",
            image: "assets/beers/Cigarro-Clean-By-Click.png",
            name: "Cigarro Clean By Click",
            price: 12.99,
        },
        {
            category: "Cigarros",
            image: "assets/beers/Cigarro-Kent.png",
            name: "Cigarro Kent",
            price: 9.99,
        },
        {
            category: "Cigarros",
            image: "assets/beers/Cigarro-X-Lint.png",
            name: "Cigarro X-Lint",
            price: 7.99,
        },
        {
            category: "Cigarros",
            image: "assets/beers/Cigarro-X-Lint.png",
            name: "Cigarro Dunhill Tradicional",
            price: 14.99,
        }
    ];

    const cervejas = [
        {
            category: "Cervejas 600ml",
            image: "assets/beers/Amstel.png",
            name: "Cerveja Amstel 600ml",
            price: 7.50,
        },
        {
            category: "Cervejas 600ml",
            image: "assets/beers/AntarcticaOriginal.png",
            name: "Cerveja Antarctica 600ml",
            price: 8.00,
        },
        {
            category: "Cervejas 600ml",
            image: "assets/beers/Bohemia.png",
            name: "Cerveja Bohemia Puro Malte 600ml",
            price: 8.00,
        },
        {
            category: "Cervejas 600ml",
            image: "assets/beers/Brahma.png",
            name: "Cerveja Brahma Chopp 600ml",
            price: 7.50,
        },
        {
            category: "Cervejas 600ml",
            image: "assets/beers/BrahmaDM.png",
            name: "Cerveja Brahma Duplo Malte 600ml",
            price: 8.00,
        },
        {
            category: "Cervejas 600ml",
            image: "assets/beers/Budweiser.png",
            name: "Cerveja Budweiser 600ml",
            price: 8.00,
        },
        {
            category: "Cervejas 600ml",
            image: "assets/beers/Devassa.png",
            name: "Cerveja Devassa 600ml",
            price: 6.00,
        },
        {
            category: "Cervejas 600ml",
            image: "assets/beers/Eisenbahn.png",
            name: "Cerveja Eisenbahn 600ml",
            price: 8.00,
        },
        {
            category: "Cervejas 600ml",
            image: "assets/beers/Heineken.png",
            name: "Cerveja Heineken Original 600ml",
            price: 12.00,
        },
        {
            category: "Cervejas 600ml",
            image: "assets/beers/Magnifica.png",
            name: "Cerveja Magnífica 600ml",
            price: 7.50,
        },
        {
            category: "Cervejas 600ml",
            image: "assets/beers/Petra.png",
            name: "Cerveja Petra 600ml",
            price: 7.00,
        },
        {
            category: "Cervejas 600ml",
            image: "assets/beers/Skol.png",
            name: "Cerveja Skol Pilsen 600ml",
            price: 8.00,
        },
        {
            category: "Cervejas 600ml",
            image: "assets/beers/SkolPM.png",
            name: "Cerveja Skol Puro Malte 600ml",
            price: 8.00,
        },
        {
            category: "Cervejas 600ml",
            image: "assets/beers/Spaten.png",
            name: "Cerveja Spaten 600ml",
            price: 8.50,
        },
        {
            category: "Cervejas 600ml",
            image: "assets/beers/Stella.png",
            name: "Cerveja Stella 600ml",
            price: 10.00,
        }
    ];

    return(
        <>
            <Marcas />
            <InstrucaoPedido />
            <ProdutosCarrossel filtros={filtros} produtos={cervejas} categoria="Cervejas 600ml" />
            <ProdutosCarrossel filtros={filtros} produtos={cigarros} categoria="Cigarros" />
            <ProdutosCarrossel filtros={filtros} produtos={refrigerantes} categoria="Refrigerantes" />
            <OndeEstamos />
        </>
    )
}

export default Home;