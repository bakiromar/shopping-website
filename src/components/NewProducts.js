import React from 'react'
import ProductCard from './ProductCard'

const productData = [
  {
    image: "/jacket-1.jpg",
    title: "Jacket",
    description: "MEN'S Yarn Fleece Full-Zip Jacket",
    rating: 4,
    price: "45.00",
  },
  {
    image: "/skirt-1.jpg",
    title: "Skirt",
    description: "Black Floral Wrap Midi Skirt",
    rating: 5,
    price: "55.00",
  },
  {
    image: "/party-wear-1.jpg",
    title: "Party wear",
    description: "Women's Party Wear Shoes",
    rating: 3,
    price: "25.00",
  },
  {
    image: "/shirt-1.jpg",
    title: "Shirt",
    description: "Pure Garment Dyed Cotton Shirt",
    rating: 4,
    price: "45.00",
  },
  {
    image: "/sports-1.jpg",
    title: "Sports",
    description: "Trekking & Running Shoes",
    rating: 3,
    price: "59.00",
  },
  {
    image: "/watch-1.jpg",
    title: "Watches",
    description: "Smart Watches Apple Watch",
    rating: 4,
    price: "100.00",
  },
  {
    image: "/watch-2.jpg",
    title: "Watches",
    description: "Pocket Watche Leather Pouch",
    rating: 4,
    price: "120.00",
  }
]

const NewProducts = () => {
  return (
    <div>
        <div className="container mx-auto pt-16">
            <h2 className="font-medium text-2xl pb-4">New Products</h2>
            
            <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
                    {productData.map((item, index) => {
                        return (
                            <ProductCard
                                key={index}
                                image={item.image}
                                title={item.title}
                                description={item.description}
                                rating={item.rating}
                                price={item.price}
                            />
                        )
                    })}
            </div>
        </div>
    </div>
  )
}

export default NewProducts