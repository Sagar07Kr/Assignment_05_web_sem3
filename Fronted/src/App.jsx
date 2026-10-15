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
      <style>
        {`
          /* ========================================
             SHOPKART - GLOBAL DESIGN SYSTEM
          ======================================== */

          * {
            box-sizing: border-box;
          }

          html {
            scroll-behavior: smooth;
            scrollbar-gutter: stable;
          }

          body {
            margin: 0;
            padding: 0;
            background: #F5F7F4;
            color: #26382E;
            font-family: Arial, Helvetica, sans-serif;
            -webkit-font-smoothing: antialiased;
          }

          #root {
            min-height: 100vh;
            background: #F5F7F4;
          }

          button,
          input,
          textarea,
          select {
            font-family: inherit;
          }

          img {
            max-width: 100%;
          }

          a {
            -webkit-tap-highlight-color: transparent;
          }

          /* ========================================
             CART COUNT / TOP UTILITY BAR
          ======================================== */

          #root > h1:first-of-type {
            position: relative;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            min-height: 38px;
            margin: 0;
            padding: 8px 5%;
            background: #E7F5EA;
            border-bottom: 1px solid #D5E8D9;
            color: #12372A;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0.5px;
            line-height: 1.5;
            text-align: right;
          }

          /* ========================================
             PRIMARY NAVIGATION
          ======================================== */

          header {
            position: sticky;
            top: 0;
            z-index: 1000;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            flex-wrap: wrap;
            gap: 6px;
            width: 100%;
            min-height: 76px;
            margin: 0;
            padding: 12px 5%;
            background: #12372A;
            border-bottom: 3px solid #F28C28;
            box-shadow: 0 4px 16px rgba(18, 55, 42, 0.13);
            font-size: 0;
          }

          /* Brand displayed without adding JSX markup */
          header::before {
            content: "ShopKart";
            display: block;
            flex: 1 0 auto;
            margin-right: auto;
            color: #FFFFFF;
            font-size: 27px;
            font-weight: 800;
            letter-spacing: -0.8px;
            line-height: 1.2;
            white-space: nowrap;
          }

          header a {
            position: relative;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            min-height: 42px;
            padding: 10px 17px;
            border: 1px solid transparent;
            border-radius: 7px;
            color: #F5F7F4;
            font-size: 14px;
            font-weight: 600;
            line-height: 1.4;
            text-decoration: none;
            white-space: nowrap;
            transition:
              color 0.2s ease,
              background 0.2s ease,
              border-color 0.2s ease;
          }

          header a:hover {
            background: rgba(255, 255, 255, 0.10);
            color: #F4B942;
          }

          header a:focus-visible {
            outline: 3px solid #38BDF8;
            outline-offset: 3px;
          }

          header a:active {
            background: rgba(255, 255, 255, 0.16);
          }

          /* ========================================
             CONSISTENT INTERACTIVE ELEMENTS
          ======================================== */

          button {
            -webkit-tap-highlight-color: transparent;
          }

          button:focus-visible,
          a:focus-visible {
            outline-offset: 3px;
          }

          ::selection {
            background: #D8EEE0;
            color: #12372A;
          }

          /* ========================================
             TABLET RESPONSIVENESS
          ======================================== */

          @media (max-width: 900px) {
            #root > h1:first-of-type {
              min-height: 36px;
              padding: 8px 24px;
              font-size: 12px;
            }

            header {
              min-height: 68px;
              gap: 4px;
              padding: 10px 24px;
            }

            header::before {
              font-size: 24px;
            }

            header a {
              min-height: 40px;
              padding: 9px 12px;
              font-size: 13px;
            }
          }

          /* ========================================
             MOBILE RESPONSIVENESS
          ======================================== */

          @media (max-width: 600px) {
            #root > h1:first-of-type {
              min-height: 34px;
              padding: 7px 16px;
              font-size: 11px;
              letter-spacing: 0.3px;
            }

            header {
              position: sticky;
              top: 0;
              justify-content: space-between;
              gap: 4px;
              min-height: 0;
              padding: 12px 12px 10px;
            }

            header::before {
              flex: 1 0 100%;
              width: 100%;
              margin: 0 0 5px;
              padding: 2px 3px 7px;
              border-bottom: 1px solid rgba(255, 255, 255, 0.15);
              font-size: 24px;
            }

            header a {
              flex: 1 1 0;
              min-width: 0;
              min-height: 38px;
              padding: 9px 5px;
              border-radius: 5px;
              font-size: 12px;
              text-align: center;
            }
          }

          /* Extra-small mobile screens */
          @media (max-width: 360px) {
            header {
              padding-right: 8px;
              padding-left: 8px;
              gap: 2px;
            }

            header::before {
              font-size: 22px;
            }

            header a {
              min-height: 36px;
              padding: 8px 3px;
              font-size: 11px;
            }
          }

          /* ========================================
             REDUCED MOTION ACCESSIBILITY
          ======================================== */

          @media (prefers-reduced-motion: reduce) {
            html {
              scroll-behavior: auto;
            }

            header a {
              transition: none;
            }
          }
        `}
      </style>

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