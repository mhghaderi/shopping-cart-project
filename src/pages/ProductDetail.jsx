import React from "react";
import { useParams, Link } from "react-router-dom";
import { initialProducts } from "../data/product";

import { ChevronLeft, Tag, Zap } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();

  const product = initialProducts.find((p) => p.id === Number(id));

  return (
    <div className="container mx-auto mt-6 p-8 bg-gray-800 rounded-2xl shadow-lg">
      <Link to={"/"}>
        <button className="flex items-center gap-1 text-gray-500 hover:text-orange-500 tansition duration-150">
          <ChevronLeft />
          <h3 className=" cursor-pointer leading-0  text-md font-medium uppercase">
            Back to main
          </h3>
        </button>
      </Link>
      <div className="grid grid-cols-2 my-12">
        <div className="px-20">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div>
          <h2 className="font-black text-4xl ">{product.name}</h2>
          <h3 className="text-orange-400 text-3xl font-bold my-3">
            {product.price}
          </h3>
          <div className="flex gap-1 items-center ">
            <Tag className="w-5 h-5 text-orange-400 " />
            <span className="text-xl">Product Interview</span>
          </div>
          <p className="text-gray-300 font-light text-xl mt-4">
            {product.description}
          </p>
          <div className="bg-gray-700 p-4 border border-gray-600 rounded-2xl w-[80%] my-6">
            <div className="flex items-center gap-2">
              <Zap className="text-orange-400" />
              <span className="text-gray-300">
                High-Quality, Professional Grade Materials
              </span>
            </div>
            <div className="flex items-center gap-2 my-3">
              <Zap className="text-orange-400" />
              <span className="text-gray-300">
                Comprehensive 1-Year Manufacturer Warranty
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="text-orange-400" />
              <span className="text-gray-300">
                Immediate Shipping for In-Stock Items
              </span>
            </div>
          </div>
          <button className="w-full bg-orange-500 py-3 rounded-lg text-white font-bold 
          hover:bg-orange-600 transition duration-150">Add to Cart</button>
          <Link to={"/"} >
            <button className="mt-3 cursor-pointer w-full bg-orange-500/10 py-3 rounded-lg text-white-400
            font-bold border border-orange-400 hover:bg-orange-600/20 transition duration-150">Keep Shopping</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
