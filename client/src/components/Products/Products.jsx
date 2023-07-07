import './Products.css'
import ProductItem from './ProductItem/ProductItem';
import { useEffect, useState } from 'react';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

export default function Products() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItem] = useState({});

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:3000/api/shop", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },

      });

      const data = await response.json();
      console.log("LL: Products -> data", data);
      setProducts(data);
    })()

  }, [])
  const productList = products.map((product) =>
    <ProductItem key={product.id} name={product.name} description={product.description} price={product.price} qty={cartItems[product.id] ?? 0} onAddClick={
      () => {
        const tempValue = cartItems[product.id] ? cartItems[product.id] + 1 : 1;
        setCartItem({
          ...cartItems,
          [product.id]: tempValue
        })

      }
    } />
  )

  return (
    <section className='products card'>
      <ul>
        {productList}
      </ul>
    </section>
  )
}