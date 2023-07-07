export default function Cart(){
    const cartItems=[
        {id: 'c1', name: 'Paper'},
        {id: 'c2', name: 'Pepper'},
        {id: 'c3', name: 'Shoes'}
    ].map((item)=>{
        return <li key={item.id}>{item.name}</li>
    })
    return(
        <>
        <ul className="cart-items">
            {cartItems}
        </ul>
        <div  className="total">
            <span>Total Amount </span>
            <span>34.4</span>
        </div>
        <div className="actions">
            <button className="button--alt">Close</button>
            <button className="button">Order</button>
        </div>
        </>
    )
}