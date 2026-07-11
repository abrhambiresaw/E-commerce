import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

function LatestCollection() {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
   setLatestProducts(products.slice(0,10));
  },[])

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Welcome to our latest collection – where tradition meets modern style.
          Our Tibeb Habesha clothing is crafted with care to bring out the
          beauty of Ethiopian culture. From family gatherings to special
          ceremonies, we have something for everyone. Explore our new arrivals
          and dress with pride.
        </p>
      </div>

         {/* Rendering Products */}
         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {
            latestProducts.map((item, index) => (
              <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
          }
         </div>
    </div>
  );
}

export default LatestCollection;
