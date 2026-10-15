import React from 'react'
import {Link} from 'react-router'

function Products({products, addtocart, removetocart}) {
  return (
    <>
      <style>
        {`
          /* ShopKart: two product cards per row */
          #root:has(> div > #image > button) {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            align-items: stretch;
            gap: 22px;
            padding: 28px;
            box-sizing: border-box;
            background: #F5F7F4;
            color: #26382E;
            font-family: Arial, Helvetica, sans-serif;
          }

          /* Preserve full-width navigation and cart bar */
          #root:has(> div > #image > button) > h1,
          #root:has(> div > #image > button) > header {
            grid-column: 1 / -1;
          }

          /* Individual product card */
          #root:has(> div > #image > button) > div:has(> #image > button) {
            display: flex !important;
            flex-direction: column !important;
            align-items: stretch;
            min-width: 0;
            width: 100%;
            max-width: none;
            height: 100%;
            margin: 0;
            padding: 18px;
            box-sizing: border-box;
            overflow: hidden;
            background: #FFFFFF;
            border: 1px solid #E0E8E1;
            border-radius: 12px;
            box-shadow: 0 4px 14px rgba(18, 55, 42, 0.05);
            color: #26382E;
            transition: transform 0.2s ease,
                        box-shadow 0.2s ease,
                        border-color 0.2s ease;
          }

          #root:has(> div > #image > button) > div:has(> #image > button):hover {
            transform: translateY(-3px);
            border-color: #B8D2C1;
            box-shadow: 0 9px 24px rgba(18, 55, 42, 0.10);
          }

          /* Product image area */
          #root:has(> div > #image > button) > div:has(> #image > button) > #image {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            flex: none;
            width: 100%;
            min-width: 0;
            padding: 6px 8px 16px;
            box-sizing: border-box;
            border-bottom: 1px solid #EDF1ED;
          }

          #root:has(> div > #image > button) > div:has(> #image > button) > #image img {
            display: block;
            width: 100% !important;
            max-width: 260px;
            height: 220px !important;
            margin: 0 auto 16px;
            object-fit: contain;
            object-position: center;
            background: #FFFFFF;
            border-radius: 6px;
            transition: transform 0.25s ease;
          }

          #root:has(> div > #image > button) > div:has(> #image > button):hover > #image img {
            transform: scale(1.035);
          }

          /* Hide existing line breaks without changing JSX */
          #root:has(> div > #image > button) > div:has(> #image > button) > #image br {
            display: none;
          }

          /* Action buttons */
          #root:has(> div > #image > button) > div:has(> #image > button) > #image button {
            display: block;
            width: 100%;
            max-width: 280px;
            min-height: 42px;
            margin: 5px 0;
            padding: 10px 12px;
            border: 1px solid transparent;
            border-radius: 6px;
            box-sizing: border-box;
            font-family: inherit;
            font-size: 13px;
            font-weight: 700;
            cursor: pointer;
            transition: background 0.2s ease,
                        border-color 0.2s ease,
                        box-shadow 0.2s ease;
          }

          /* Orange: Add To Cart */
          #root:has(> div > #image > button) > div:has(> #image > button) > #image button:nth-of-type(1) {
            background: #F28C28;
            color: #17251E;
            box-shadow: 0 3px 8px rgba(242, 140, 40, 0.13);
          }

          #root:has(> div > #image > button) > div:has(> #image > button) > #image button:nth-of-type(1):hover {
            background: #E87918;
            box-shadow: 0 4px 12px rgba(242, 140, 40, 0.22);
          }

          /* Red: Remove To Cart */
          #root:has(> div > #image > button) > div:has(> #image > button) > #image button:nth-of-type(2) {
            background: #FCEBEB;
            color: #B42323;
            border-color: #F3C2C2;
          }

          #root:has(> div > #image > button) > div:has(> #image > button) > #image button:nth-of-type(2):hover {
            background: #F9DADA;
            border-color: #D62828;
          }

          /* Dark green: Buy */
          #root:has(> div > #image > button) > div:has(> #image > button) > #image button:nth-of-type(3) {
            background: #12372A;
            color: #FFFFFF;
          }

          #root:has(> div > #image > button) > div:has(> #image > button) > #image button:nth-of-type(3):hover {
            background: #0F766E;
          }

          #root:has(> div > #image > button) > div:has(> #image > button) > #image button a {
            display: block;
            color: inherit;
            text-decoration: none;
          }

          /* Product information */
          #root:has(> div > #image > button) > div:has(> #image > button) > #image + div {
            display: flex;
            flex: 1;
            flex-direction: column;
            align-items: flex-start;
            min-width: 0;
            width: 100%;
            padding: 18px 6px 6px;
            box-sizing: border-box;
          }

          /* Brand */
          #root:has(> div > #image > button) > div:has(> #image > button) > #image + div h1 {
            margin: 0 0 8px;
            color: #12372A;
            font-size: 20px;
            font-weight: 700;
            line-height: 1.4;
            overflow-wrap: anywhere;
          }

          #root:has(> div > #image > button) > div:has(> #image > button) > #image + div h1 b,
          #root:has(> div > #image > button) > div:has(> #image > button) > #image + div h2 b {
            color: #6F4E37;
          }

          /* Product name and category */
          #root:has(> div > #image > button) > div:has(> #image > button) > #image + div h2 {
            margin: 5px 0;
            color: #46574D;
            font-size: 15px;
            font-weight: 400;
            line-height: 1.6;
            overflow-wrap: anywhere;
          }

          #root:has(> div > #image > button) > div:has(> #image > button) > #image + div h2:first-of-type {
            color: #26382E;
            font-size: 16px;
            font-weight: 600;
          }

          /* Price */
          #root:has(> div > #image > button) > div:has(> #image > button) > #image + div h3 {
            margin: 14px 0 8px;
            color: #12372A;
            font-size: 25px;
            font-weight: 800;
            line-height: 1.3;
            overflow-wrap: anywhere;
          }

          /* Rating */
          #root:has(> div > #image > button) > div:has(> #image > button) > #image + div h4 {
            display: inline-block;
            align-self: flex-start;
            margin: 5px 0 0;
            padding: 6px 10px;
            border-radius: 5px;
            background: #E7F5EA;
            color: #236B38;
            font-size: 12px;
            font-weight: 700;
            line-height: 1.5;
          }

          /* Sky-blue keyboard focus */
          #root:has(> div > #image > button) > div:has(> #image > button) button:focus-visible,
          #root:has(> div > #image > button) > div:has(> #image > button) a:focus-visible {
            outline: 3px solid #38BDF8;
            outline-offset: 3px;
          }

          /* Tablet: maintain two cards per row */
          @media (max-width: 900px) {
            #root:has(> div > #image > button) {
              gap: 16px;
              padding: 20px;
            }

            #root:has(> div > #image > button) > div:has(> #image > button) {
              padding: 14px;
            }

            #root:has(> div > #image > button) > div:has(> #image > button) > #image img {
              height: 190px !important;
            }

            #root:has(> div > #image > button) > div:has(> #image > button) > #image + div h1 {
              font-size: 18px;
            }

            #root:has(> div > #image > button) > div:has(> #image > button) > #image + div h3 {
              font-size: 22px;
            }
          }

          /* Mobile: two compact cards per row */
          @media (max-width: 600px) {
            #root:has(> div > #image > button) {
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 12px;
              padding: 12px;
            }

            #root:has(> div > #image > button) > div:has(> #image > button) {
              padding: 10px;
              border-radius: 9px;
            }

            #root:has(> div > #image > button) > div:has(> #image > button) > #image {
              padding: 4px 2px 10px;
            }

            #root:has(> div > #image > button) > div:has(> #image > button) > #image img {
              height: 135px !important;
              margin-bottom: 10px;
            }

            #root:has(> div > #image > button) > div:has(> #image > button) > #image button {
              min-height: 35px;
              margin: 4px 0;
              padding: 7px 4px;
              font-size: 10px;
              letter-spacing: 0;
            }

            #root:has(> div > #image > button) > div:has(> #image > button) > #image + div {
              padding: 12px 2px 3px;
            }

            #root:has(> div > #image > button) > div:has(> #image > button) > #image + div h1 {
              margin-bottom: 6px;
              font-size: 14px;
            }

            #root:has(> div > #image > button) > div:has(> #image > button) > #image + div h2 {
              margin: 4px 0;
              font-size: 11px;
              line-height: 1.5;
            }

            #root:has(> div > #image > button) > div:has(> #image > button) > #image + div h2:first-of-type {
              font-size: 12px;
            }

            #root:has(> div > #image > button) > div:has(> #image > button) > #image + div h3 {
              margin: 9px 0 6px;
              font-size: 17px;
            }

            #root:has(> div > #image > button) > div:has(> #image > button) > #image + div h4 {
              padding: 5px 7px;
              font-size: 10px;
            }
          }

          @media (max-width: 360px) {
            #root:has(> div > #image > button) {
              gap: 8px;
              padding: 8px;
            }

            #root:has(> div > #image > button) > div:has(> #image > button) {
              padding: 8px;
            }

            #root:has(> div > #image > button) > div:has(> #image > button) > #image img {
              height: 110px !important;
            }

            #root:has(> div > #image > button) > div:has(> #image > button) > #image + div h1 {
              font-size: 12px;
            }

            #root:has(> div > #image > button) > div:has(> #image > button) > #image + div h3 {
              font-size: 15px;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            #root:has(> div > #image > button) > div:has(> #image > button),
            #root:has(> div > #image > button) > div:has(> #image > button) > #image img,
            #root:has(> div > #image > button) > div:has(> #image > button) > #image button {
              transition: none;
            }

            #root:has(> div > #image > button) > div:has(> #image > button):hover,
            #root:has(> div > #image > button) > div:has(> #image > button):hover > #image img {
              transform: none;
            }
          }
        `}
      </style>

      {
        products.map((ele)=>{
            return(
                <div key={ele.id}  style={{display:"flex"}}>
                    {/* <h1>{ele.id}</h1>
                    <h2>{ele.title}</h2>
                    <h1>{ele.category}</h1>
                    <button onClick={addtocart}>Add To Cart</button>
                    <button onClick={removetocart}>Remove To Cart</button>
                    <button><Link to = {`/product/${ele.id}`}>BUY</Link></button> */}

                    <div id='image'>
                        <img src={ele.images} alt={ele.thumbnail} style={{height:"100px", width:"100px"}}/>
                        <br />
                        <button onClick={addtocart}>Add To Cart</button>{"  "}
                        <button onClick={removetocart}>Remove To Cart</button>
                        <br />
                        <button><Link to = {`/product/${ele.id}`}>BUY</Link></button>
                    </div>
                    <div>
                        <h1><b>Brand</b> : {ele.brand}</h1>
                        <h2><b>Product Name</b> : {ele.title}</h2>
                        <h2><b>Category</b> : {ele.category}</h2>
                        <h3>Price : {ele.price}</h3>
                        <h4>{ele.rating} ⭐️ Rating</h4>
                    </div>
                </div>
            )
        })
      }
    </>
  )
}

export default Products