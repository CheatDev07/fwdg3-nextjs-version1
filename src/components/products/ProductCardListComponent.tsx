"use client"

import { use } from "react"
import { ProductResponse } from "./ProductCardComponent"
import ProductCardComponent from "./ProductCardComponent";

export default function ProductCardListComponent({
  products
}: {
  products: Promise<ProductResponse[]>
}) {
  // use hook 
  const productLists = use(products);
  console.log("===> productlists: ", productLists)

  return (
    <div>
      {
        productLists.map(({ images, title, description, category, price,id }) => (
          // productcardcomponent 
            <ProductCardComponent
              key={id}
              images={images}
              title={title}
              description={description}
              category={category}
              price={price} />
        ))
      }
    </div>
  )
}
