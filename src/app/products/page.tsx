import PostCardComponent from "@/components/posts/swr/PostCardComponent";
import ProductCardListComponent from "@/components/products/ProductCardListComponent";

import { Suspense } from "react";

// response Promise 
const getProducts = () =>
  fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(productData => productData.products)
    .catch(error => error)

export default function ProductPage() {

  const products = getProducts();
  return (

   
    <div className='flex gap-8'>
      {/* <AlphabetDisplayComponent/> */}
      <Suspense fallback={<h1>Loading...</h1>}>
        <ProductCardListComponent products={products} />
      </Suspense>

    </div>
  )
}
