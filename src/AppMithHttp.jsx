import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./component/Loader/Loader";
import { reguestProducts } from "./serveses/api";
import ErrorMessage from "./component/ErrorMessage/ErrorMessage";
import ProductList from "./component/ProductList/ProductList";


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
      {isError && <ErrorMessage />}
      <ProductList products={products} />
    </div>
  );
};

export default AppMithHttp;
