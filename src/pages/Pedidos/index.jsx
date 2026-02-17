import { useEffect } from "react";

import ListaPedidos from "../../components/ListaPedidos";

function Pedidos(){

    useEffect(() => {
        
        document.title =  'Pedidos - ' + import.meta.env.VITE_APP_TITLE;

        //const httpClient = new HttpClientService();
        //const api = new ApiBackEndService(httpClient);

        //console.log(api.getUsers());

    },[]);

    return(
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-8">
                            <h3>Pedidos</h3>
                            <ListaPedidos />
                        </div>
                        <div className="col-12 col-sm-4">
                            <h3>Sidebar</h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pedidos;