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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/create-product" element={<CreateProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
