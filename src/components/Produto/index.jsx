import { BsCartPlusFill, BsTrashFill } from "react-icons/bs";

import { useCartStore } from "../../store/CarrinhoStore";
import FormatCurrency from "../../utils/FormatCurrency";

import PropTypes from 'prop-types';

import "./index.css"
import { useShallow } from "zustand/react/shallow";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function Produto({dados}) {

    const [prod, addToCart, removeProductCart, productIsAlreadyInCart] = useCartStore(useShallow(state => [state.products, state.addToCart, state.removeProductCart, state.productIsAlreadyInCart] ));

    const iscard = productIsAlreadyInCart(dados);

    useEffect(() => {
        useDispatch;
    }, [prod]);

    return (
        <div className="card product-card">
            <img className="card-img-top product-card--image" src={dados.image} />
            <div className="card-body">
                <h3 className="card-title product-card--name">
                    <a href="#">{ dados.name }</a>
                </h3>
                <p className="card-text">
                    <span className="product-card--price">
                        { FormatCurrency(dados.price) }
                    </span>
                </p>
                { !iscard ? (
                
                        <button
                            className="btn btn-primary btn-sm d-inline-flex"
                            type="button"
                            role="button"
                            onClick={() => addToCart(dados)}>
                            <BsCartPlusFill className="fs-6" />
                            <span className="ps-1 d-block"> ADICIONAR</span>
                        </button>
                    ) : (

                        <button
                            className="btn btn-danger btn-sm d-inline-flex"
                            type="button"
                            role="button"
                            onClick={() => removeProductCart(dados)}>
                            <BsTrashFill className="fs-6" />
                            <span className="ps-1 d-block"> REMOVER</span>
                        </button>
                    )
                }

            </div>
        </div>
    )
}

Produto.propTypes = {
    dados: PropTypes.shape({
        category: PropTypes.string, 
        image: PropTypes.string.isRequired,
        name: PropTypes.string, 
        price: PropTypes.number
    })
}

export default Produto