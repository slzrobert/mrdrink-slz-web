import Offcanvas from 'react-bootstrap/Offcanvas';
import { useCartStore } from '../../store/CarrinhoStore';
import FormatCurrency from '../../utils/FormatCurrency';
import CarrinhoVazio from '../CarrinhoVazio';
import swal from 'sweetalert';

import "./index.css";

function CarrinhoDeCompras() {

    const [isOpen, products, handleOpenClose, removeProductCart, increaseQuantityProduct, decreaseQuantityProduct] = useCartStore(state => [state.isOpen, state.products, state.handleOpenClose, state.removeProductCart, state.increaseQuantityProduct, state.decreaseQuantityProduct]);

    const somaTotalPrice = products.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

    const sumTotalPriceProduct = (product) => product.quantity * product.price;

    const handleIncreaseClick = (product) => increaseQuantityProduct(product);

    const handleDecreaseClick = (product) => decreaseQuantityProduct(product);

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

    const disabledFinish = (products.length <= 0 ? 1 : 0);

    return (
        <>
            <Offcanvas show={isOpen} placement="end" onHide={handleOpenClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Carrinho de Compra</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {
                        disabledFinish
                        ? <CarrinhoVazio />
                        : <div className="cart-products-list">
                        {
                            products.map((product, idx) => (
                                <div key={idx} className="cart-products--product">
                                    <div className="cart-products--product-image">
                                        <img src={product.image}  />
                                    </div>
                                    <div className="cart-products--product-info">
                                        <h4 className="cart-products--product-name">{product.name}</h4>
                                        <div className="cart-products--product-price">{ FormatCurrency(product.price) }</div>
                                        <div className="cart-products--product-control d-flex mb-1">
                                            <div className="input-group input-group-sm">
                                                <button
                                                    type="button"
                                                    className="btn btn-dark"
                                                    onClick={() => handleDecreaseClick(product)}>{'-'}
                                                </button>
                                                <input
                                                    readOnly
                                                    disabled
                                                    aria-label="Product quantity"
                                                    id={'input-product-quantity-' + idx}
                                                    className="form-control cart-products--product-input-control"
                                                    value={product.quantity}
                                                />
                                                <button
                                                    type="button"
                                                    className="btn btn-dark"
                                                    onClick={() => handleIncreaseClick(product)}>{'+'}
                                                </button>
                                            </div>
                                            <button
                                                type="button"
                                                className="btn btn-danger cart-products--product-control-remove"
                                                onClick={() => handleRemoveClick(product)}>{'X'}
                                            </button>
                                        </div>
                                        <div className="cart-products--product-total-price">
                                            <span>Sub-total</span> <span>{ FormatCurrency( sumTotalPriceProduct(product) ) }</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        </div>
                    }
                    
                </Offcanvas.Body>
                <div className="offcanvas-footer shadow">
                    <div className='cart-products--subtotal-itens d-flex justify-content-between align-items-stretch border-bottom border-2 pb-3 mb-3'>
                        <span className='fs-5'>Subtotal:</span>
                        <span className='fs-5 fw-bold'>{ FormatCurrency(somaTotalPrice) }</span>
                    </div>
                    <div className="d-grid gap-2">
                        <button type='button' className='btn btn-success d-block' disabled={disabledFinish} >FINALIZAR COMPRA</button>
                    </div>
                </div>
            </Offcanvas>
        </>
    );
}

export default CarrinhoDeCompras;