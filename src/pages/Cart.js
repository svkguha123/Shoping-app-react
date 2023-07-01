import { useSelector,useDispatch } from "react-redux";
import { removeAll } from "../store/cartSlice";
import useTitle from "../hooks/useTitle";
import CartCard from "../components/CartCard";
import "./cart.css"

const Cart = () => {
  const dispatch = useDispatch()
  let count = 1;
  useTitle('Cart');

  const products = useSelector(state=>state.cartState.cartList);
  const total = useSelector(state=>state.cartState.total);

  return (
    <section className="cart">
      <h1>My Cart</h1>
      <div className="myCart">
        <div className="cartProd">
          {
            products.map(product => (
              <CartCard key={product.id} product={product} />
            ))
          }
        </div>
        <div className="cartList">
          <h3>Checkout List</h3>
          <div className="myList">
            {
              products.map(product=>(
                <div className="single" key={product.id}>
                  <div className="name">{count++}. {product.title}</div>
                  <div className="price">$ {product.price}</div>
                </div>
              ))
            }
          </div>
          <div className="listTotal">
            <div className="total">Total</div>
            <div className="totalPrice">$ {total}</div>
          </div>
          <button onClick={()=>dispatch(removeAll())} className="checkOut">Click To Checkout</button>
        </div>
      </div>

    </section>
  )
}

export default Cart