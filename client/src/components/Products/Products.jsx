import './Products.css'
import ProductItem from './ProductItem/ProductItem';
import { useEffect, useState } from 'react';
import { useCart } from '../../context/CartItems';

export default function Products() {
  const [products, setProducts] = useState([]);
  // console.log(cxt.cart)

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

  const productList = products.map((product) => {
    return (<ProductItem key={product.id}
      id={product.id}
      name={product.name}
      description={product.description}
      price={product.price}
    />)
  })

  return (
    <section className='products card'>
      <ul>
        {productList}
      </ul>
    </section>
  )
}
