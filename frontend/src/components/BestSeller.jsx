import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/Shopcontext";
import Title from "./Title";
import ProductItem from "./ProductItem";
const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"Best"} text2={"Sellers"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-grey-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
          quasi quidem dignissimos temporibus, error fuga natus aut consectetur
          dolorem nulla ea quisquam aspernatur. Nostrum consectetur totam id
          iusto voluptatum facilis?
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
