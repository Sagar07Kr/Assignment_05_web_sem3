import { useParams } from 'react-router'
import Products from './Products';
import { Link } from 'react-router';
import ReviewList from './ReviewList';

function ProductDetails({products, addtocart, removetocart}) {
    const {id} = useParams();
    const data = products.find((ele) =>{
        return ele.id === Number(id);
    })
    if(!data){
        return(
            <h1>No Products Found</h1>
        )
    }
    const otherProduct = products.filter((ele) => {
        return ele.category === data.category;
    })
  return (
    <div>
       <style>
        {`
            /* ==================================
               SHOPKART PRODUCT DETAILS PAGE
            ================================== */

            div:has(> style + div > #image) {
                width: 100%;
                min-height: 100vh;
                padding: 32px;
                box-sizing: border-box;
                background: #F5F7F4;
                color: #26382E;
                font-family: Arial, Helvetica, sans-serif;
            }

            /* Main product details card */
            div:has(> style + div > #image) > div:nth-of-type(1) {
                display: flex;
                align-items: flex-start;
                gap: 38px;
                width: 100%;
                max-width: 1250px;
                margin: 0 auto 32px;
                padding: 36px;
                background: #FFFFFF;
                border: 1px solid #E0E8E1;
                border-radius: 14px;
                box-shadow: 0 6px 24px rgba(18, 55, 42, 0.06);
            }

            /* Main product image column */
            div:has(> style + div > #image) > div:nth-of-type(1) > #image {
                flex: 0 0 40%;
                min-width: 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 16px 26px 26px;
                border-right: 1px solid #E8EEE9;
                text-align: center;
            }

            /* IMPORTANT: target only the main product image */
            div:has(> style + div > #image) > div:nth-of-type(1) > #image img {
                display: block;
                width: 100% !important;
                max-width: 370px;
                height: 320px !important;
                margin: 0 auto 24px;
                object-fit: contain;
                object-position: center;
                background: #FFFFFF;
                border-radius: 10px;
                transition: transform 0.25s ease;
            }

            div:has(> style + div > #image) > div:nth-of-type(1) > #image img:hover {
                transform: scale(1.035);
            }

            /* Main product price */
            div:has(> style + div > #image) > div:nth-of-type(1) > #image h1 {
                margin: 14px 0;
                color: #12372A;
                font-size: 32px;
                font-weight: 800;
                line-height: 1.3;
                overflow-wrap: anywhere;
            }

            /* Discount badge */
            div:has(> style + div > #image) > div:nth-of-type(1) > #image h2 {
                display: inline-block;
                margin: 8px 0;
                padding: 8px 12px;
                border-radius: 6px;
                background: #FFF0DF;
                color: #934509;
                font-size: 14px;
                font-weight: 700;
                line-height: 1.6;
            }

            /* Rating badge */
            div:has(> style + div > #image) > div:nth-of-type(1) > #image h2:nth-of-type(2) {
                background: #E7F5EA;
                color: #236B38;
            }

            /* Product information column */
            div:has(> style + div > #image) > div:nth-of-type(1) > div:nth-of-type(2) {
                flex: 1;
                min-width: 0;
                padding: 8px 12px;
            }

            div:has(> style + div > #image) > div:nth-of-type(1) > div:nth-of-type(2) h2 {
                margin: 13px 0;
                color: #46574D;
                font-size: 17px;
                font-weight: 400;
                line-height: 1.7;
                overflow-wrap: anywhere;
            }

            div:has(> style + div > #image) > div:nth-of-type(1) > div:nth-of-type(2) h2 b {
                color: #12372A;
                font-weight: 700;
            }

            /* Brand */
            div:has(> style + div > #image) > div:nth-of-type(1) > div:nth-of-type(2) h2:nth-of-type(1) {
                margin-top: 0;
                color: #6F4E37;
                font-size: 18px;
                font-weight: 600;
            }

            /* Product name */
            div:has(> style + div > #image) > div:nth-of-type(1) > div:nth-of-type(2) h2:nth-of-type(2) {
                color: #12372A;
                font-size: 25px;
                font-weight: 700;
                line-height: 1.4;
            }

            /* Category */
            div:has(> style + div > #image) > div:nth-of-type(1) > div:nth-of-type(2) h2:nth-of-type(3) {
                display: inline-block;
                padding: 6px 12px;
                border-radius: 6px;
                background: #E5F6FE;
                color: #075985;
                font-size: 14px;
                font-weight: 600;
            }

            /* Description */
            div:has(> style + div > #image) > div:nth-of-type(1) > div:nth-of-type(2) h2:nth-of-type(4) {
                padding: 12px 0;
                color: #59665D;
                font-size: 15px;
                font-weight: 400;
                line-height: 1.9;
            }

            /* Main product buttons */
            div:has(> style + div > #image) > div:nth-of-type(1) > div:nth-of-type(2) button {
                min-height: 48px;
                margin: 8px 8px 8px 0;
                padding: 13px 24px;
                border: 1px solid transparent;
                border-radius: 7px;
                font-family: inherit;
                font-size: 13px;
                font-weight: 700;
                letter-spacing: 0.2px;
                text-transform: uppercase;
                cursor: pointer;
                transition:
                    background 0.2s ease,
                    box-shadow 0.2s ease,
                    transform 0.2s ease;
            }

            /* Orange: Add to Cart */
            div:has(> style + div > #image) > div:nth-of-type(1) > div:nth-of-type(2) button:nth-of-type(1) {
                min-width: 160px;
                background: #F28C28;
                color: #17251E;
                box-shadow: 0 4px 12px rgba(242, 140, 40, 0.18);
            }

            div:has(> style + div > #image) > div:nth-of-type(1) > div:nth-of-type(2) button:nth-of-type(1):hover {
                background: #E87918;
                box-shadow: 0 6px 16px rgba(242, 140, 40, 0.25);
                transform: translateY(-2px);
            }

            /* Red: Remove from Cart */
            div:has(> style + div > #image) > div:nth-of-type(1) > div:nth-of-type(2) button:nth-of-type(2) {
                min-width: 160px;
                background: #FCEBEB;
                color: #B42323;
                border-color: #F3C2C2;
            }

            div:has(> style + div > #image) > div:nth-of-type(1) > div:nth-of-type(2) button:nth-of-type(2):hover {
                background: #F9DADA;
                box-shadow: 0 4px 12px rgba(214, 40, 40, 0.10);
                transform: translateY(-2px);
            }

            /* Dark green: Buy Now */
            div:has(> style + div > #image) > div:nth-of-type(1) > div:nth-of-type(2) button:nth-of-type(3) {
                min-width: 180px;
                background: #12372A;
                color: #FFFFFF;
                box-shadow: 0 4px 12px rgba(18, 55, 42, 0.14);
            }

            div:has(> style + div > #image) > div:nth-of-type(1) > div:nth-of-type(2) button:nth-of-type(3):hover {
                background: #0F766E;
                box-shadow: 0 6px 16px rgba(15, 118, 110, 0.20);
                transform: translateY(-2px);
            }

            div:has(> style + div > #image) > div:nth-of-type(1) > div:nth-of-type(2) button a {
                display: inline-block;
                color: inherit;
                text-decoration: none;
            }

            div:has(> style + div > #image) button:focus-visible,
            div:has(> style + div > #image) a:focus-visible {
                outline: 3px solid #38BDF8;
                outline-offset: 3px;
            }

            /* Stock availability */
            div:has(> style + div > #image) > div:nth-of-type(1) > div:nth-of-type(2) h4 {
                display: inline-block;
                margin: 16px 0;
                padding: 9px 13px;
                border-radius: 6px;
                background: #E7F5EA;
                color: #236B38;
                font-size: 14px;
                font-weight: 700;
            }

            /* ==================================
               SIMILAR PRODUCTS SECTION
               These selectors target only cards
               rendered by Products in this page.
            ================================== */

            div:has(> style + div > #image) > h1 {
                position: relative;
                width: 100%;
                max-width: 1250px;
                margin: 30px auto 20px;
                padding: 22px 26px 22px 30px;
                border: 1px solid #E0E8E1;
                border-left: 5px solid #F28C28;
                border-radius: 10px;
                background: #FFFFFF;
                color: #12372A;
                font-size: 26px;
                font-weight: 700;
                line-height: 1.4;
                box-shadow: 0 4px 16px rgba(18, 55, 42, 0.04);
            }

            /* Two cards per row, scoped to ProductDetails */
            div:has(> style + div > #image) > div:has(> #image > button) {
                display: inline-flex !important;
                flex-direction: column !important;
                vertical-align: top;
                align-items: stretch;
                width: calc(50% - 14px) !important;
                max-width: 610px;
                min-width: 0;
                margin: 8px 8px 8px 0 !important;
                padding: 18px;
                box-sizing: border-box;
                overflow: hidden;
                background: #FFFFFF;
                border: 1px solid #E0E8E1;
                border-radius: 12px;
                box-shadow: 0 4px 14px rgba(18, 55, 42, 0.05);
                color: #26382E;
                transition:
                    transform 0.2s ease,
                    box-shadow 0.2s ease,
                    border-color 0.2s ease;
            }

            div:has(> style + div > #image) > div:has(> #image > button):hover {
                transform: translateY(-3px);
                border-color: #B8D2C1;
                box-shadow: 0 9px 24px rgba(18, 55, 42, 0.10);
            }

            /* Similar product image */
            div:has(> style + div > #image) > div:has(> #image > button) > #image {
                display: flex;
                flex: none;
                flex-direction: column;
                align-items: center;
                justify-content: flex-start;
                width: 100%;
                min-width: 0;
                padding: 5px 5px 15px;
                box-sizing: border-box;
                border-bottom: 1px solid #EDF1ED;
            }

            /* Crucially, similar images no longer inherit the
               large main-product image dimensions. */
            div:has(> style + div > #image) > div:has(> #image > button) > #image img {
                display: block;
                width: 100% !important;
                max-width: 250px;
                height: 190px !important;
                margin: 0 auto 14px;
                object-fit: contain;
                object-position: center;
                background: #FFFFFF;
                border-radius: 6px;
                transition: transform 0.25s ease;
            }

            div:has(> style + div > #image) > div:has(> #image > button):hover > #image img {
                transform: scale(1.035);
            }

            div:has(> style + div > #image) > div:has(> #image > button) > #image br {
                display: none;
            }

            /* Similar product action buttons */
            div:has(> style + div > #image) > div:has(> #image > button) > #image button {
                display: block;
                width: 100%;
                max-width: 280px;
                min-height: 40px;
                margin: 5px 0;
                padding: 9px 12px;
                border: 1px solid transparent;
                border-radius: 6px;
                box-sizing: border-box;
                font-family: inherit;
                font-size: 12px;
                font-weight: 700;
                cursor: pointer;
                transition:
                    background 0.2s ease,
                    border-color 0.2s ease,
                    box-shadow 0.2s ease;
            }

            div:has(> style + div > #image) > div:has(> #image > button) > #image button:nth-of-type(1) {
                background: #F28C28;
                color: #17251E;
                box-shadow: 0 3px 8px rgba(242, 140, 40, 0.14);
            }

            div:has(> style + div > #image) > div:has(> #image > button) > #image button:nth-of-type(1):hover {
                background: #E87918;
            }

            div:has(> style + div > #image) > div:has(> #image > button) > #image button:nth-of-type(2) {
                background: #FCEBEB;
                color: #B42323;
                border-color: #F3C2C2;
            }

            div:has(> style + div > #image) > div:has(> #image > button) > #image button:nth-of-type(2):hover {
                background: #F9DADA;
                border-color: #D62828;
            }

            div:has(> style + div > #image) > div:has(> #image > button) > #image button:nth-of-type(3) {
                background: #12372A;
                color: #FFFFFF;
            }

            div:has(> style + div > #image) > div:has(> #image > button) > #image button:nth-of-type(3):hover {
                background: #0F766E;
            }

            div:has(> style + div > #image) > div:has(> #image > button) > #image button a {
                display: block;
                color: inherit;
                text-decoration: none;
            }

            /* Similar product information */
            div:has(> style + div > #image) > div:has(> #image > button) > #image + div {
                display: flex;
                flex: 1;
                flex-direction: column;
                align-items: flex-start;
                width: 100%;
                min-width: 0;
                padding: 16px 4px 4px;
                box-sizing: border-box;
            }

            div:has(> style + div > #image) > div:has(> #image > button) > #image + div h1 {
                margin: 0 0 8px;
                color: #12372A;
                font-size: 19px;
                font-weight: 700;
                line-height: 1.4;
                overflow-wrap: anywhere;
            }

            div:has(> style + div > #image) > div:has(> #image > button) > #image + div h1 b,
            div:has(> style + div > #image) > div:has(> #image > button) > #image + div h2 b {
                color: #6F4E37;
            }

            div:has(> style + div > #image) > div:has(> #image > button) > #image + div h2 {
                margin: 5px 0;
                color: #46574D;
                font-size: 14px;
                font-weight: 400;
                line-height: 1.6;
                overflow-wrap: anywhere;
            }

            div:has(> style + div > #image) > div:has(> #image > button) > #image + div h2:first-of-type {
                color: #26382E;
                font-size: 15px;
                font-weight: 600;
            }

            div:has(> style + div > #image) > div:has(> #image > button) > #image + div h3 {
                margin: 12px 0 8px;
                color: #12372A;
                font-size: 23px;
                font-weight: 800;
                line-height: 1.35;
                overflow-wrap: anywhere;
            }

            div:has(> style + div > #image) > div:has(> #image > button) > #image + div h4 {
                display: inline-block;
                align-self: flex-start;
                margin: 4px 0 0;
                padding: 6px 10px;
                border-radius: 5px;
                background: #E7F5EA;
                color: #236B38;
                font-size: 12px;
                font-weight: 700;
                line-height: 1.5;
            }

            /* Focus visible */
            div:has(> style + div > #image) button:focus-visible,
            div:has(> style + div > #image) a:focus-visible {
                outline: 3px solid #38BDF8;
                outline-offset: 3px;
            }

            /* ==================================
               TABLET
            ================================== */

            @media (max-width: 900px) {
                div:has(> style + div > #image) {
                    padding: 22px;
                }

                div:has(> style + div > #image) > div:nth-of-type(1) {
                    gap: 24px;
                    padding: 26px;
                }

                div:has(> style + div > #image) > div:nth-of-type(1) > #image {
                    flex-basis: 38%;
                    padding: 12px 16px 20px;
                }

                div:has(> style + div > #image) > div:nth-of-type(1) > #image img {
                    height: 260px !important;
                }

                div:has(> style + div > #image) > div:nth-of-type(1) > div:nth-of-type(2) h2:nth-of-type(2) {
                    font-size: 22px;
                }

                div:has(> style + div > #image) > div:nth-of-type(1) > div:nth-of-type(2) h2 {
                    font-size: 16px;
                }

                div:has(> style + div > #image) > div:has(> #image > button) {
                    padding: 14px;
                }

                div:has(> style + div > #image) > div:has(> #image > button) > #image img {
                    height: 170px !important;
                }
            }

            /* ==================================
               MOBILE
            ================================== */

            @media (max-width: 600px) {
                div:has(> style + div > #image) {
                    padding: 14px;
                }

                div:has(> style + div > #image) > div:nth-of-type(1) {
                    flex-direction: column !important;
                    align-items: stretch;
                    gap: 20px;
                    margin-bottom: 22px;
                    padding: 20px 16px;
                    border-radius: 12px;
                }

                div:has(> style + div > #image) > div:nth-of-type(1) > #image {
                    flex: none;
                    width: 100%;
                    padding: 8px 12px 20px;
                    border-right: none;
                    border-bottom: 1px solid #E8EEE9;
                }

                div:has(> style + div > #image) > div:nth-of-type(1) > #image img {
                    max-width: 300px;
                    height: 240px !important;
                    margin-bottom: 16px;
                }

                div:has(> style + div > #image) > div:nth-of-type(1) > #image h1 {
                    font-size: 28px;
                }

                div:has(> style + div > #image) > div:nth-of-type(1) > div:nth-of-type(2) {
                    width: 100%;
                    padding: 8px 4px;
                }

                div:has(> style + div > #image) > div:nth-of-type(1) > div:nth-of-type(2) h2:nth-of-type(2) {
                    font-size: 22px;
                }

                div:has(> style + div > #image) > div:nth-of-type(1) > div:nth-of-type(2) h2 {
                    font-size: 15px;
                }

                div:has(> style + div > #image) > div:nth-of-type(1) > div:nth-of-type(2) button {
                    width: 100%;
                    margin: 7px 0;
                }

                div:has(> style + div > #image) > h1 {
                    margin: 22px auto 14px;
                    padding: 17px 16px;
                    border-left-width: 4px;
                    font-size: 21px;
                }

                /* Similar products remain two per row */
                div:has(> style + div > #image) > div:has(> #image > button) {
                    width: calc(50% - 9px) !important;
                    margin: 6px 4px 6px 0 !important;
                    padding: 10px;
                    border-radius: 9px;
                }

                div:has(> style + div > #image) > div:has(> #image > button) > #image img {
                    height: 125px !important;
                    margin-bottom: 10px;
                }

                div:has(> style + div > #image) > div:has(> #image > button) > #image button {
                    min-height: 34px;
                    margin: 4px 0;
                    padding: 7px 3px;
                    font-size: 10px;
                }

                div:has(> style + div > #image) > div:has(> #image > button) > #image + div {
                    padding: 11px 1px 2px;
                }

                div:has(> style + div > #image) > div:has(> #image > button) > #image + div h1 {
                    font-size: 13px;
                }

                div:has(> style + div > #image) > div:has(> #image > button) > #image + div h2 {
                    font-size: 11px;
                }

                div:has(> style + div > #image) > div:has(> #image > button) > #image + div h2:first-of-type {
                    font-size: 12px;
                }

                div:has(> style + div > #image) > div:has(> #image > button) > #image + div h3 {
                    font-size: 17px;
                }

                div:has(> style + div > #image) > div:has(> #image > button) > #image + div h4 {
                    padding: 5px 7px;
                    font-size: 10px;
                }
            }

            @media (max-width: 360px) {
                div:has(> style + div > #image) {
                    padding: 10px;
                }

                div:has(> style + div > #image) > div:nth-of-type(1) {
                    padding: 16px 12px;
                }

                div:has(> style + div > #image) > div:nth-of-type(1) > #image img {
                    height: 210px !important;
                }

                div:has(> style + div > #image) > div:has(> #image > button) {
                    padding: 8px;
                }

                div:has(> style + div > #image) > div:has(> #image > button) > #image img {
                    height: 110px !important;
                }

                div:has(> style + div > #image) > div:has(> #image > button) > #image + div h1 {
                    font-size: 12px;
                }

                div:has(> style + div > #image) > div:has(> #image > button) > #image + div h3 {
                    font-size: 15px;
                }
            }

            @media (prefers-reduced-motion: reduce) {
                div:has(> style + div > #image) > div:nth-of-type(1) > #image img,
                div:has(> style + div > #image) > div:has(> #image > button),
                div:has(> style + div > #image) > div:has(> #image > button) > #image img,
                div:has(> style + div > #image) button {
                    transition: none;
                }

                div:has(> style + div > #image) > div:nth-of-type(1) > #image img:hover,
                div:has(> style + div > #image) > div:has(> #image > button):hover,
                div:has(> style + div > #image) > div:has(> #image > button):hover > #image img,
                div:has(> style + div > #image) button:hover {
                    transform: none;
                }
            }
        `}
       </style>

       <div style={{display:"flex"}}>
            {/* <h1>{data.id}</h1>
            <h1>{data.title}</h1>
            <h1>{data.category}</h1>
            <img src={data.images} alt=""  style={{height:"100px", width:"100px"}}/>
            <button> <Link to={`/product/${data.id}/payment`}>BUY NOW</Link></button> */}
            <div id='image'>
                <img src={data.images} alt=""  style={{height:"100px", width:"100px"}}/>
                <br />
                <h1>M.R.P ₹{data.price}</h1>
                <h2>Discount : {data.discountPercentage}%</h2>
                <h2>{data.rating} ⭐️ Rating</h2>
            </div>     
            <div> 
                <h2><b>Brand</b> : {data.brand}</h2>
                <h2><b>Product Name</b> : {data.title}</h2>
                <h2><b>Category</b>: {data.category}</h2>
                <h2><b>Description</b> : {data.description}</h2>
                <button onClick={addtocart}>Add To Cart</button>{"  "}
                <button onClick={removetocart}>Remove To Cart</button>
                <br />
                <button> <Link to={`/product/${data.id}/payment`}>BUY NOW</Link></button>
                <br />
                <h4>{data.stock}pcs Left Only</h4>
            </div>
       </div>
       <ReviewList reviewdata = {data.reviews}/>
       <h1>Similar Products</h1>
       <Products products = {otherProduct}/>
    </div>
  )
}

export default ProductDetails