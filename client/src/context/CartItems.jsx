import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useAuth } from "./AuthContext";
const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(null);
    const { user } = useAuth()

    // call this function when you want to authenticate the user
    const addToCart = async (id) => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${user.token}`);
        myHeaders.append("Content-Type", "application/json");

        // console.log(props,"props")
        const response = await fetch("http://localhost:3000/api/cart", {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify({
                prodId: id
            })
        });
        const data = await response.json();
        setCart(data);
    };

    const value = useMemo(
        () => ({
            cart,
            addToCart,
        }),
        [cart]
    );
    useEffect(() => {
        (async () => {
            const myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${user.token}`);
            myHeaders.append("Content-Type", "application/json");

            // console.log(props,"props")
            const response = await fetch("http://localhost:3000/api/cart", {
                method: "GET",
                headers: myHeaders,
            });

            const data = await response.json();
            setCart(data);
            // setCartItems(data);
            // console.log(cartItems, "cartitems")
        })()

    }, [])
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
    return useContext(CartContext);
};