import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./component/Loader/Loader";
import { reguestProducts } from "./serveses/api";


const AppMithHttp = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setIsLoading(true);
        const data = await reguestProducts();
        setProducts(data.products);
        console.log(data);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Smart Ukrainian Big Product Store</h1>
      {isLoading && <Loader />}
      {isError && <p>Oops, something went wrong</p>}
      <ul>
        {Array.isArray(products) &&
          products.map((product) => {
            return (
              <li key={product.id}>
                <img width={250} src={product.thumbnail} alt={product.title} />
                <h2>title: {product.title}</h2>
                <h3>brand: {product.brand}</h3>
                <p>description: {product.description}</p>
                <h4>price: {product.price}</h4>
                <p>rating: {product.rating}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default AppMithHttp;
