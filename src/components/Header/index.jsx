import { BiSolidUserCircle } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useCartStore } from "../../store/CarrinhoStore";
import Logo from "../../assets/logo.svg";
import Menu from "../Menu";
import { useState } from "react";

import "./index.css";

function Header() {

  const handleOpenClose = useCartStore(state => state.handleOpenClose);

  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => setShowMenu(true);
  const handleMenuClose = () => setShowMenu(false);

  return (
    <>
      <header className="page-header">
          
          <div className="logo">
            <a href="/">
              <img src={Logo} />
            </a>
          </div>

          <nav className="navbar bg-dark">
            <div className="container">

              <a className="link-header link-header-menu text-decoration-none" href="#" onClick={handleMenu}>
                <span className="px-2">
                  <GiHamburgerMenu />
                </span>
              </a>

              <form action="#" autoComplete="off" method="get" className="search-form" role="search">
                  <div className="input-group">
                      <input name="search" type="search" id="search" aria-label="search" placeholder="Buscar produto" className="form-control form-control-search"  />
                      <button type="submit" className="btn btn-primary btn-mrdrink" id="submit">
                          Buscar
                      </button>
                  </div>
              </form>

              <nav className="d-flex">

                <span className="px-2">
                  <a className="link-header my-account text-decoration-none" href="#">
                    <BiSolidUserCircle />
                  </a>
                </span>
                <span className="px-2">
                  <a className="link-header my-cart text-decoration-none" href="#" onClick={handleOpenClose}>
                    <FaShoppingCart />
                  </a>
                </span>

              </nav>

            </div>
          </nav>
      </header>
      <Menu show={showMenu} onHide={() => handleMenuClose()} />
    </>
  )
}

export default Header
