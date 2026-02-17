import Header2 from './components/Header2';
import Footer from './components/Footer';

import CarrinhoDeCompras from './components/CarrinhoDeCompras';

import { Outlet } from 'react-router';

import './scss/custom.scss';

import './App.css';

function App() {

  return (
    <>
      <Header2 />
      <Outlet />
      <Footer />
      <CarrinhoDeCompras />
    </>
  )
}

export default App
