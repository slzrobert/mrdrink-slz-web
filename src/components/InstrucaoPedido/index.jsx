import { MdProductionQuantityLimits, MdOutlinePayment, MdDeliveryDining } from "react-icons/md";

import "./index.css";

function InstrucaoPedido() {
    return(
        <>
        <section className="my-5 py-4" style={{backgroundColor:'#434853'}}>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="card-instrucao-pedido">
                            <MdProductionQuantityLimits className="card-instrucao-pedido--icone" />
                            <h4 className="card-instrucao-pedido--titulo">Escolha seus produtos</h4>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card-instrucao-pedido">
                            <MdOutlinePayment className="card-instrucao-pedido--icone"  />
                            <h4 className="card-instrucao-pedido--titulo">Pague como quiser</h4>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card-instrucao-pedido">
                            <MdDeliveryDining className="card-instrucao-pedido--icone"  />
                            <h4 className="card-instrucao-pedido--titulo">Aguarde a entrega</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default InstrucaoPedido;