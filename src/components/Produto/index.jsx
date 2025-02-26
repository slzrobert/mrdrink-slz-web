import { BsCartPlusFill } from "react-icons/bs";

import { useCartStore } from "../../store/CarrinhoStore";
import FormatCurrency from "../../utils/FormatCurrency";

import PropTypes from 'prop-types'

import "./index.css"

function Produto({dados}) {

    const addToCart = useCartStore(state => state.addToCart );

    return (
        <div className="card product-card">
            <img className="card-img-top product-card--image" src={dados.image} />
            <div className="card-body">
                <h3 className="card-title product-card--name">
                    <a href="#">{ dados.name }</a>
                </h3>
                <p className="card-text">{ FormatCurrency(dados.price) }</p>

                <button
                    className="btn btn-outline-warning btn-sm d-inline-flex"
                    type="button"
                    role="button"
                    onClick={() => addToCart(dados)}>
                    <BsCartPlusFill className="fs-6" />
                    <span className="ps-1 d-block"> ADICIONAR</span>
                </button>
            </div>
        </div>
    )
}

Produto.propTypes = {
    dados: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string, 
        price: PropTypes.number
    })
}

export default Produto