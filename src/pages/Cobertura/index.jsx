import { useEffect } from "react";

function Cobertura(){


    useEffect(() => {
        
        document.title =  'Cobertura - ' + import.meta.env.VITE_APP_TITLE;
    }, []);

    return(
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <h3>Cobertura</h3>
                        </div>
                        <div className="col-4">
                            <h3>Sidebar</h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cobertura;