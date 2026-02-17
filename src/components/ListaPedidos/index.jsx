import Pedido from "../Pedido";
import "./index.css"

function ListaPedidos() {

    const pedidos = [
        {
            id: "order-1",
            data: "22-05-2025",
            status: "PENDENTE",
            itens: [
                {
                    id:"id-item-0001"
                },
                {
                    id:"id-item-0002"
                }
            ]
        },
        {
            id: "order-2",
            data: "26-05-2025",
            status: "PENDENTE",
            itens: [
                {
                    id:"id-item-0003"
                },
                {
                    id:"id-item-0004"
                }
            ]
        },
        {
            id: "order-3",
            data: "28-05-2025",
            status: "PENDENTE",
            itens: [
                {
                    id:"id-item-0005"
                },
                {
                    id:"id-item-0006"
                }
            ]
        }
    ];

    return (
        <table className="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">Data do Pedido</th>
                    <th scope="col">Status</th>
                    <th scope="col">Ação</th>
                </tr>
            </thead>
            <tbody id="accordionOrders" className="accordion">
                {
                    pedidos.map((pedido, idx) => (
                        <Pedido key={idx} dados={pedido} />
                    ))
                }
            </tbody>
        </table>
    )
}

export default ListaPedidos;