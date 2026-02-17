import { TiShoppingCart } from "react-icons/ti";
import { useCartStore } from "../../store/CarrinhoStore";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function BotaoFlutuante() {

    const [produtos, handleOpenClose] = useCartStore(state => [state.products, state.handleOpenClose]);

    useEffect(() => {
        useDispatch;
    }, [produtos]);

    return(
        <>
            <div className="floating-cart-button" data-product-count={produtos.length} onClick={handleOpenClose}>
                <TiShoppingCart className="floating-cart-button--icone" />
            </div>
        </>
    )   
}

export default BotaoFlutuante;