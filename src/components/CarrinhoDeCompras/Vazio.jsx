import { ImShocked } from "react-icons/im";

import "./index.css";

function CarrinhoVazio() {
    return (
        <div className='ProductsCart__EmptyCart'>
            <div className='ProductsCart__EmptyCart--icon'><ImShocked /></div>
            <p className='ProductsCart__EmptyCart--title'>Oops!</p>
            <p className='ProductsCart__EmptyCart--description'>Seu carrinho está vazio!</p>
        </div>
    );
}

export default CarrinhoVazio;