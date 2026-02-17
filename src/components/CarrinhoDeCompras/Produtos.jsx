import swal from 'sweetalert';

import { TfiTrash } from "react-icons/tfi";
import { FaMinus, FaPlus } from "react-icons/fa6";

import FormatCurrency from '../../utils/FormatCurrency';
import { useCartStore } from '../../store/CarrinhoStore';
import PropTypes from 'prop-types';


function CarrinhoProdutos({produtos}){

    const [removeProductCart, increaseQuantityProduct, decreaseQuantityProduct, removeAllProductsCart, updateQuantityProduct] = useCartStore(state => [state.removeProductCart, state.increaseQuantityProduct, state.decreaseQuantityProduct, state.removeAllProductsCart, state.updateQuantityProduct]);

    const sumTotalPriceProduct = (product) => product.quantity * product.price;
    
    const handleIncreaseClick = (product) => increaseQuantityProduct(product);

    const handleDecreaseClick = (product) => decreaseQuantityProduct(product);

    const handleRemoveAllProductsCartClick = () => {
        swal("Deseja realmente remover todos os produtos?", {
            buttons: {
                cancel: "Não",
                confirm: {
                    text: "Sim",
                    value: true,
                }
            },
            dangerMode: true,
            icon: "warning",
        }).then((result) => {
            result &&
            removeAllProductsCart()
        });
        return;
    }
    
    const handleRemoveClick = (product) => {
        swal("Deseja realmente remover este produto?", {
            buttons: {
                cancel: "Não",
                confirm: {
                    text: "Sim",
                    value: true,
                }
            },
            dangerMode: true,
            icon: "warning",
        }).then((result) => {
            result &&
                removeProductCart(product)
        });
        return;
    }

    const updateProductQuantity = (product, quantity) => updateQuantityProduct(product, quantity);
    
    return (
        <>
            <div className="ProductsCart">
            {
                produtos.map((product, idx) => (
                    <div key={idx} className="ProductsCart__Product card border-0 bg-white text-black mb-3 p-3">
                        <div className="row g-0">
                            <div className="col-4">
                                <img src={product.image} className="ProductsCart__ProductImage img-fluid" />
                            </div>
                            <div className="col-8">
                                <span className="ProductsCart__Product--category">{product.category}</span>
                                <h5 className="ProductsCart__Product--name"><a href="#">{product.name}</a></h5>
                                <div className="ProductsCart__Product--price-area">
                                    <div className="ProductsCart__Product--discount-price">
                                        R$ 0,00
                                    </div>
                                    <div className="ProductsCart__Product--price">
                                        { FormatCurrency(product.price) }
                                    </div>
                                </div>
                                <div className="ProductsCart__Product--total-price">
                                    <div>Subtotal:</div><div>{ FormatCurrency( sumTotalPriceProduct(product) ) }</div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="ProductsCart__ProductControl d-flex justify-content-between">
                                    <div className="ProductsCart__ProductControl--quantity">
                                        <button
                                            type="button"
                                            className="ProductsCart__ProductControl--quantity-button"
                                            onClick={() => handleDecreaseClick(product)}>
                                            <FaMinus />
                                            <span className="sr-only d-none">diminuir quantidade</span>
                                        </button>
                                        <input
                                            id={'product-quantity-input-' + idx}
                                            className="ProductsCart__ProductControl--quantity-input"
                                            value={product.quantity}
                                            onChange={e => updateProductQuantity(product, e.target.value)}
                                            onBlur={e => e.target.value==0 && updateProductQuantity(product, 1)}
                                        />
                                        <button
                                            type="button"
                                            className="ProductsCart__ProductControl--quantity-button"
                                            onClick={() => handleIncreaseClick(product)}>
                                            <FaPlus />
                                            <span className="sr-only d-none">aumentar quantidade</span>
                                        </button>
                                    </div>
                                    <button 
                                        type="button"
                                        className="ProductsCart__ProductControl--remove-button"
                                        onClick={() => handleRemoveClick(product)}>
                                        <TfiTrash />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))                            
            }
            </div>
            <a
                type='button'
                role='button'
                className='link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fs-6'
                onClick={() => handleRemoveAllProductsCartClick()}>Remover Todos
            </a>
        </>
    )

}

CarrinhoProdutos.propTypes = {
    produtos: PropTypes.array
};

export default CarrinhoProdutos;