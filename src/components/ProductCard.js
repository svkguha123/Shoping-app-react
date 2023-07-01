import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { add, remove } from "../store/cartSlice"

import "./ProductCard.css";

const ProductCard = ({ product }) => {

  const dispatch = useDispatch();
  const products = useSelector(state => state.cartState.cartList);
  const [isInCart, setIsInCart] = useState(false)
  const { id, title, thumbnail, price } = product;

  useEffect(() => {
    const productInCart = products.find(item => item.id === id);

    if(productInCart){
      setIsInCart(true);
    }else{
      setIsInCart(false);
    }

  }, [products, id]);

  return (
    <div className="product">
      <img src={thumbnail} alt={title} />
      <p className="name">{title}</p> 
      <p className="price">&#36; {price}</p>

      {isInCart ? (<button onClick={() => dispatch(remove(product))}>Remove From Cart</button>): (<button onClick={() => dispatch(add(product))}>Add to cart</button>)}
    </div>
  )
}

export default ProductCard