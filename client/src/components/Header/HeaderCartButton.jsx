import CartIcon from "../Cart/CartIcon";
import { useAuth } from "../../context/AuthContext";
import "./HeaderCartButton.css";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartItems";
import { useEffect } from "react";
import { useState } from "react";

export default function HeaderCartButton() {
  const { user } = useAuth();
  const { cart } = useCart();
  const [total, setTotal] = useState(0)

  useEffect(() => {
    if (cart && Object.keys(cart).length > 0) {
      setTotal(Object.values(cart).reduce(
        (prev, curr) => prev + curr.qty, 0
      ))
    }

  }, [cart])




  return (
    <div className="user_cart">
      <h2>{user.name}</h2>
      <Link to="/cart"><button className="button" >
        <span className="icon">
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className="badge">{total}</span>
      </button>
      </Link>
    </div>
  );
}
