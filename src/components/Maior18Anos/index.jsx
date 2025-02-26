import { Button } from "react-bootstrap";
import PropTypes from 'prop-types';

function MaiorDezoito({acao}) {
    return (
        <>
            <h1>VOCÊ TEM MAIS DE 18 ANOS?</h1>
            <Button onClick={() => acao(true)}>Sim</Button>{' '}
            <Button onClick={() => acao(false)}>Não</Button>
        </>
     );
}

MaiorDezoito.propTypes = {
    acao: PropTypes.func
  }

export default MaiorDezoito;
