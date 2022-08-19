
import './App.css';
import { Routes,Route,BrowserRouter } from "react-router-dom";
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import ChecKout from './Components/ChecKout';
import Cart from './Components/Cart';
import CartContextComponent from './Components/CartContextComponent';



export default function App() {



  return (
    <>
    <CartContextComponent>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:idCategory' element={<ItemListContainer />} />
        <Route path='/item/:idItem' element={<ItemDetailContainer/>} />
        <Route path='/carrito' element={<Cart />} />
        <Route path='/checkout' element={<ChecKout />} />

      </Routes>
    </BrowserRouter>
    </CartContextComponent>

    </>
  );
}

