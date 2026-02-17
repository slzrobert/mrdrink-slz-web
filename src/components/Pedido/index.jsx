import PropTypes from 'prop-types';

const Pedido = ({dados}) => {

    return (
        <>
            <tr>
                <td>{dados.data}</td>
                <td>{dados.status}</td>
                <td>
                    <button 
                        className="btn btn-sm btn-primary"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={"#" + dados.id}
                        aria-expanded="false"
                        aria-controls={dados.id}>Item #{dados.id}
                    </button>
                </td>
            </tr>
            <tr id={dados.id} className="accordion-collapse collapse" data-bs-parent="#accordionOrders">
                <td colSpan={4}>Sem Texto</td>
            </tr>
        </>
    )
}

Pedido.propTypes = {
    dados: PropTypes.object.isRequired
}

export default Pedido;