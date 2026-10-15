import React from 'react'
import {Link} from 'react-router'

function Products({products, addtocart, removetocart}) {
  return (
    <>
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
                        <h1>{ele.brand}</h1>
                        <h2>{ele.title}</h2>
                        <h2>Category : {ele.category}</h2>
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