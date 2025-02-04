import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/Shopcontext";
import Title from "./Title";
import ProductItem from "./ProductItem";
const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [lastestProducts, setLastestProducts] = useState([]);
  useEffect(() => {
    setLastestProducts(products.slice(0, 10));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center my-8 text-3xl">
        <Title text1={"Latest"} text2={"Collection"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-grey-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
          voluptate.
        </p>
      </div>

      {/* render products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {lastestProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
