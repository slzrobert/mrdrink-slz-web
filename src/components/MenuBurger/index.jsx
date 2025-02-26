import PropTypes from 'prop-types';
import './index.css';

function BurgerMenu() {

    const handleClick = (event) => {
        event.currentTarget.classList.toggle('open');
    }

    return (
        <div id="nav-icon2" onClick={handleClick}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}

BurgerMenu.propTypes = {
    open: PropTypes.string,
  }

export default BurgerMenu;