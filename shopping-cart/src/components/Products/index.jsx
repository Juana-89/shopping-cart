import { useEffect, useState } from 'react'
import { Item } from '../Item/index'
import { allProducts } from '../../../api/models/functions'
export const Products = () => {
    const [products, setProducts] =useState(null)
    useEffect(() =>{
    allProducts(setProducts)},[])
  
    return (
        <main>
        <h1>Home</h1>
        <div className="row">
            {products != null ? (products.map((product) => (
            <div key={product._id}>
            <img src={product.image}/>
            <h1><a href="#">{product.name}</a></h1>
            <h2>S/ {product.price}.00</h2>
          </div>
        ))) :('no hay productos')}</div>
        </main>
    )
}
