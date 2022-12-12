import { useEffect, useState } from "react";
import { Item } from "../Item/index";
import { allProducts } from "../../../api/models/functions";
export const Products = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    allProducts(setProducts);
  }, []);

  return (
    <main className="products">
      <h1>Nuestros productos</h1>
      <div className="container">
        {products != null
          ? products.map((product) => (
              <div key={product._id} className="card">
                <img src={product.image} />
                <h1 id="name">
                  <a href="#" className='hiper'>{product.name}</a>
                </h1>
                <h2>S/ {product.price}.00</h2>
                <button className="buttonAdd">
                  Agregar a carrito{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-bag"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </button>
              </div>
            ))
          : "no hay productos"}
      </div>
    </main>
  );
};
