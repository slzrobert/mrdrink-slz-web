import Offcanvas from 'react-bootstrap/Offcanvas';
import { useCartStore } from '../../store/CarrinhoStore';
import FormatCurrency from '../../utils/FormatCurrency';

import CarrinhoVazio from './Vazio';
import CarrinhoProdutos from './Produtos';

import './index.css';
import BotaoFlutuante from './BotaoFlutuante';

function CarrinhoDeCompras() {

    const [isOpen, products, handleOpenClose] = useCartStore(state => [state.isOpen, state.products, state.handleOpenClose]);

    const somaTotalPrice = products.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

    const disabledFinish = (products.length <= 0 ? 1 : 0);

    return (
        <>
            <BotaoFlutuante />
            <Offcanvas show={isOpen} placement="end" onHide={handleOpenClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Carrinho de Compra</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {
                        (disabledFinish)?
                        <CarrinhoVazio />:
                        <CarrinhoProdutos produtos={products} />
                    }
                </Offcanvas.Body>
                <div className="offcanvas-footer shadow">
                    <div className="cart-products--subtotal-itens d-flex justify-content-between align-items-stretch border-bottom border-2 pb-3 mb-3">
                        <span className="fs-5">Subtotal:</span>
                        <span className="fs-5 fw-bold">{ FormatCurrency(somaTotalPrice) }</span>
                    </div>
                    <div className="d-grid gap-2">
                        <button
                            type="button"
                            className="btn btn-primary d-block rounded-0"
                            disabled={disabledFinish}>CONTINUAR
                        </button>
                    </div>
                </div>
            </Offcanvas>
        </>
    );
}

export default CarrinhoDeCompras;