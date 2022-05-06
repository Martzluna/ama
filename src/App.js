import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login';
import Checkout from './Components/Checkout';
import ProductDetail from './Components/ProductDetail';
import CreateProduct from './Components/CreateProduct';
import Dashboard from './Components/Dashboard';
import RouteAuth from './utils/RouteAuth';
import CreateCategory from './Components/CreateCategory';
import Register from './Components/Register';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { listCategoriesAction, listProductsAction } from './Redux/actions/product';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(listCategoriesAction())
    dispatch(listProductsAction())
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route exact path='/' element={<RouteAuth/>}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create-product" element={<CreateProduct />} />
            <Route path="/create-category" element={<CreateCategory />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
