import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";

import Home from "../pages/Home";

import App from "../App";

import ErrorBoundary from "./ErrorBoundary";

import Cobertura from "../pages/Cobertura";
import Cadastro from "../pages/Cadastro";
import Pedidos from "../pages/Pedidos";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} errorElement={<ErrorBoundary />}>
      <Route index path='/' element={<Home />} />
      <Route caseSensitive path='/Login' element={<Login />} />
      <Route caseSensitive path='/Cobertura' element={<Cobertura />} />
      <Route caseSensitive path='/Cadastro' element={<Cadastro />} />
      <Route caseSensitive path="/Pedidos" element={<PrivateRoute><Pedidos></Pedidos></PrivateRoute>} />
    </Route>
  )
)

export default router;