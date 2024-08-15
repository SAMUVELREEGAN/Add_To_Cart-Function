import { CartProvider } from 'react-use-cart';
import './App.css';
import Header from './Header';
import Home from './Home';
import Cart from './Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
      <CartProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
