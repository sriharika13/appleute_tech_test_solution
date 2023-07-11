import './Cart.css'
import { useEffect, useState } from "react"
import { useCart } from "../context/CartItems"

export default function Cart() {
    const { cart } = useCart();
    const [total, setTotal] = useState(0)
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        if (cart && Object.keys(cart).length > 0) {
            const values = Object.values(cart);
            setTotal(values.reduce(
                (prev, curr) => prev + (curr.qty * curr.price), 0
            ));
            setCartItems(values);
        }

    }, [cart])
    return (
        <>
            <div className="cart-items">
                {cartItems.map((item) =>
                    <li key={item.id}>
                        <div>{item.name}</div>
                        <div>{item.price}</div>
                    </li>)
                }
            </div>

            <div className="total">
                <span>Total Amount </span>
                <span>{total}</span>
            </div>
            <div className="actions">
                <button className="button--alt">Close</button>
                <button className="button">Order</button>
            </div>
        </>
    )
}
