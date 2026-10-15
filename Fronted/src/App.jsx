import Home from './Components/Home'
import {BrowserRouter, Route, Routes, Link} from 'react-router'
import Products from './Components/Products'
import { useState, useEffect} from 'react'
import ProductDetails from './Components/ProductDetails'
import PaymentPage from './Components/PaymentPage'
import NotFound from './Components/NotFound'
import About from './Components/About'
import Contact from './Components/Contact'
function App() {

  const [product, setProduct] = useState([]);
  const [cartItem, setCartItem] = useState(0);
  const addtocart = () =>{
      setCartItem(cartItem + 1);
  }
  const removetocart = () =>{
      if(cartItem <= 0)return;
      else setCartItem(cartItem - 1);
  }
  useEffect(()=>{
    const APIcall = async ()=>{
      try {
        let data = await fetch("https://dummyjson.com/products?limit=30");
        data = await data.json();
        data = data.products;
        setProduct(data); 
      }catch(error) {
        console.error("Error fetching products:", error);
      }
    }
    APIcall();
  },[])
  return (
    <>
     <BrowserRouter>

     <h1>CART COUNT = {cartItem}</h1>

     <header>
      <Link to = "/">Home</Link>{"  ||  "}
      <Link to = "/about">About</Link>{"  ||  "}
      <Link to = "/contact">Contact</Link>{"  ||  "}
      <Link to = "/products">Products</Link>
     </header>

     <Routes>
        <Route path ="/"  element = {<Home/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/contact" element = {<Contact/>} />
        <Route path = "/products" element = {<Products  products = {product}  addtocart={addtocart}  removetocart={removetocart}/>}/>
        <Route path = "/product/:id" element = {<ProductDetails  products = {product}  addtocart={addtocart}  removetocart={removetocart}/>}/>
        <Route path="/product/:id/payment"  element={<PaymentPage/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>

     </BrowserRouter>
    </>
  )
}

export default App