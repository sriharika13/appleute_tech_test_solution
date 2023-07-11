import "./Header.css";
import HeaderCartButton from "./HeaderCartButton";
import { useAuth } from "../../context/AuthContext";
import { NavLink } from "react-router-dom";

export default function Header() {
  const { user, logout } = useAuth();
  return (
    <header className="header">
      <h1>ShoppingApp</h1>
      {user ? <div style={{ display: "flex" }}>
        <NavLink
          onClick={() => {
            logout();
          }}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Logout
        </NavLink>
        <HeaderCartButton />
      </div> :
        <div>
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            
            Login
          </NavLink>

        </div>}

    </header>
  );
}
