import Navbar from "./Components/Navbar/Navbar";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/Signup";
import Product from "./Pages/Product";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import './index.css'
import { BrowserRouter,Router,Route, Routes } from "react-router-dom";
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kids_banner from './Components/Assets/banner_kids.png';
import ProductDisplay from "./Components/ProductDisplay/ProductDisplay";
import Login from "./Pages/Login";

function App() {
  return (
   <>
   <BrowserRouter>
    <Navbar/>
    <Routes>

      <Route path="/" element={<Shop/>}/> 
      <Route path="/mens" element={<ShopCategory category="men" banner={men_banner}/>}/> 
      <Route path="/womens" element={<ShopCategory category="women" banner={women_banner} />}/> 
      <Route path="/kids" element={<ShopCategory category="kid" banner={kids_banner} />}/> 
      <Route path="/product" element={<Product />}/> 
      <Route path="product/:productId" element={<ProductDisplay />}/> 
      <Route path="/cart" element={<Cart />}/> 
      <Route path="/signup" element={<LoginSignup />}/> 

      <Route path="/login" element={<Login />}/> 






    </Routes>



   </BrowserRouter>
   </>
  );
}

export default App;
