import CartIcon from "../Cart/CartIcon";
import { useAuth } from "../../context/AuthContext";
import "./HeaderCartButton.css";

export default function HeaderCartButton() {
  const { user } = useAuth();
  return (
    <div className="user_cart">
      <h2>{user.name}</h2>
      <button className="button">
        <span className="icon">
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className="badge">0</span>
      </button>
    </div>
  );
}
