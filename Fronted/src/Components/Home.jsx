import React from 'react'
import { Link } from 'react-router'

function Home() {
    return (
        <div>
            <div>
                <h1>Welcome to ShopKart</h1>
                <p>
                    Welcome to ShopKart, your simple online shopping destination.
                    Explore a variety of products, compare prices, check product
                    details, and add your favourite items to your cart.
                </p>
                <h2>Explore Our {<Link to = "/products">Products</Link>}</h2>
            </div>
        </div>

    )
}

export default Home