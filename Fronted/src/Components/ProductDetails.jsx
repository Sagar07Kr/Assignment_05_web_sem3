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
                <h1>{data.brand}</h1>
                <h2>{data.title}</h2>
                <h2>{data.category}</h2>
                <h4>{data.description}</h4>
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