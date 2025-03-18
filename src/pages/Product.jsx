import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useState, useEffect } from "react";

import { FaRegHeart } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import { BsTelegram } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { BsFacebook } from "react-icons/bs";
import { FaPinterest } from "react-icons/fa";

function Product() {
  const { id } = useParams();
  const {
    data: product,
    isPending,
    error,
  } = useFetch(`https://dummyjson.com/products/${id}`);

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      {isPending && <h2>Loading...</h2>}
      {error && <h2 style={{ color: "red" }}>{error}</h2>}
      {product && (
        <div className="flex items-center flex-col md:flex-row bg-white shadow-xl rounded-lg p-8 max-w-6xl w-[90%] gap-6 hover:scale-105 border-[3px] border-gray-300 transition duration-500 hover:animate-borderChange">
          <div className="md:w-1/2 flex justify-center">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="rounded-lg w-64 h-64 object-cover transition-transform duration-300 hover:scale-150"
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center p-4">
            <div className="flex items-center justify-between gap-3">
              <FaRegHeart className="text-red-500 text-3xl hover:fill-blue-500" />
              <a
                className="transition-transform duration-300 hover:scale-150 "
                href=""
              >
                <IoMdSunny className="text-2xl hover:text-amber-500" />
              </a>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-fuchsia-500 to-red-500 bg-clip-text text-transparent w-full">
              {product.title}
            </h1>
            <h2 className="text-gray-500 mt-2">{product.description}</h2>
            <div className="flex items-center justify-between">
              <h2 className="text-black text-lg mt-1">
                Brand: {product.brand}
              </h2>
              <h2 className="text-indigo-500 text-lg mt-2">
                Category: {product.category}
              </h2>
            </div>
            <p className="text-yellow-500 font-semibold mt-2">
              Rating: {product.rating} ⭐
            </p>
            <h2 className="line-through text-red-500 text-lg mt-2">
              Price: {product.price} 💵
            </h2>
            <p className="text-green-600 text-xl font-semibold mt-1">
              <strong>Price discount: </strong>$
              {(
                product.price -
                (product.price / 100) * product.discountPercentage
              ).toFixed(2)}
            </p>
            <div className="flex gap-4 mt-4">
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                Buy Now
              </button>
              <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition">
                Add to Cart 🛒
              </button>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-gray-700 text-md mt-1">
                <strong>Stock:</strong>{" "}
                {product.stock > 0 ? "Available ✅" : "Out of stock ❌"}
              </p>
              <p className="text-blue-600 text-md mt-2">
                🚚 Free shipping in 3-5 days!
              </p>
            </div>

            <div className="mt-4 p-4 border-t">
              <h3 className="text-lg font-bold">Review:</h3>
              {product.reviews && product.reviews.length > 0 ? (
                <div className="mt-2 p-2 border-b">
                  <p className="text-gray-700">
                    <strong>
                      {product.reviews[0].reviewerName || "Anonymous"}:
                    </strong>{" "}
                    "{product.reviews[0].comment}"
                  </p>
                  <p className="text-sm text-yellow-500">
                    Rating: {product.reviews[0].rating} ⭐
                  </p>
                </div>
              ) : (
                <p className="text-gray-500">No reviews yet.</p>
              )}
            </div>

            <div className="mt-3 flex items-center justify-end gap-1 text-2xl object-cover">
              <BsTelegram className="transition-transform duration-300 hover:scale-110" />
              <FiInstagram className="transition-transform duration-300 hover:scale-110" />
              <BsFacebook className="transition-transform duration-300 hover:scale-110" />
              <FaPinterest className="transition-transform duration-300 hover:scale-110" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Product;
