import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Loader from "./component/Loader/Loader";

// {
//     "products": [
//       {
//         "id": 1,
//         "title": "iPhone 9",
//         "description": "An apple mobile which is nothing like apple",
//         "price": 549,
//         "discountPercentage": 12.96,
//         "rating": 4.69,
//         "stock": 94,
//         "brand": "Apple",
//         "category": "smartphones",
//         "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
//         "images": [
//           "https://cdn.dummyjson.com/product-images/1/1.jpg",
//           "https://cdn.dummyjson.com/product-images/1/2.jpg",
//           "https://cdn.dummyjson.com/product-images/1/3.jpg",
//           "https://cdn.dummyjson.com/product-images/1/4.jpg",
//           "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
//         ]
//       }

const AppMithHttp = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
    async function fetchProducts() {
      setIsLoading(true)
      const { data } = await axios.get("https://dummyjson.com/products");
      setProducts(data.products);
      setIsLoading(false)

      console.log(data);
    }
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Smart Ukrainian Big Product Store</h1>
      {isLoading && <Loader /> }
      <ul>
        {Array.isArray(products) && products.map(product => {
          return (
            <li key={product.id}>
          <img width={250} src={product.thumbnail} alt={product.title} />
          <h2>title: {product.title}</h2>
          <h3>brand: {product.brand}</h3>
          <p>description: {product.description}</p>
          <h4>price: {product.price}</h4>
          <p>rating: {product.rating}</p>
        </li>
          )
        }) }
      </ul>
    </div>
  );
};

export default AppMithHttp;
