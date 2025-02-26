import { ImShocked } from "react-icons/im";

import "./index.css";

function CarrinhoVazio() {
    return (
        <div className='cart-products--empty-cart'>
            <div className='cart-products--empty-cart-icon'><ImShocked /></div>
            <p className='cart-products--empty-cart-title'>Oops!</p>
            <p className='cart-products--empty-cart-description'>Seu carrinho está vazio!</p>
        </div>
    );
}

export default CarrinhoVazio;