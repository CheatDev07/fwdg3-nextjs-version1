import Image from "next/image";


export interface ProductResponse {
  id?: number;
  images: string[];
  title: string;
  description: string;
  category: string;
  price: number;
}

export default function ProductCardComponent({images, title, description, category,price}:ProductResponse) {
  return (
    <div>
      {/* image, title,description, category, price */}
      <Image
       src={images[0]}
       alt="title"
       width={500}
       height={500}
      />
      <h1>{title}</h1>
      <h2>{description}</h2>
      <h3>{category}</h3>
      <h4 className="text-red-500">{price}</h4>
    </div>
  )
}
