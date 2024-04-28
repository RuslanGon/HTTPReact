import { useEffect, useState } from "react";
import "./App.css";

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

const [products, setProducts] = useState(null)

useEffect(() => {
  async function fetchProducts () {
const response = await MyAPI.getData(someId)
  }
  fetchProducts()
},[])

  return (
    <div>
      <h1>Smart Ukrainian Big Product Store</h1>
      <ul>
        <li>
          <img width={250} src="" alt="" />
            <h2>title</h2>
            <h3>brand</h3>
            <p>description</p>
            <h4>price</h4>
            <p>rating</p>
        </li>
      </ul>
    </div>
  );
}

export default AppMithHttp