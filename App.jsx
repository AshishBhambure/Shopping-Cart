import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import { useState } from 'react';
const App = () => {
  const [cartItems,setCartItems] = useState([]);
 
  return (
    <div>
      <div className=' bg-[#0f172a] text-white'>
        <Navbar cartItems={cartItems}></Navbar>
      </div>

      <Routes>
        <Route path='/' element={<Home  cartItems={cartItems} setCartItems = {setCartItems}  />}></Route>
        <Route path='/cart' element={<Cart cartItems={cartItems} setCartItems = {setCartItems} ></Cart>}></Route>
        
      </Routes>
    </div>
  )
};

export default App;
