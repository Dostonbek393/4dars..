import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

import { VscHeart } from "react-icons/vsc";
import { TiShoppingCart } from "react-icons/ti";
import { FaRegTrashAlt } from "react-icons/fa";

function Home() {
  const { data, isPending, error } = useFetch(
    "https://dummyjson.com/product?limit=194"
  );
  return (
    <section className="py-6">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {data && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {data.products.map((product) => {
              return (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden p-4 transition-transform duration-300 hover:scale-105 hover:border-red-500 border-3 hover:shadow-2xl border-gray-200"
                >
                  <Link to={`/product/${product.id}`}>
                    <div className="flex items-center justify-between mt-3">
                      <button className="p-2  bg-pink-100 rounded-full hover:bg-red-500 hover:text-white transition">
                        <VscHeart className="text-2xl" />
                      </button>
                      <button className="p-2 bg-gray-100 text-gray-500 rounded-full hover:bg-gray-500 hover:text-white transition">
                        <FaRegTrashAlt className="text-2xl" />
                      </button>
                    </div>
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <h2 className="mb-2 text-center text-fuchsia-700 font-semibold text-2xl">
                      {product.title}
                    </h2>
                    <a className="mb-4 mt-4 w-35.5 h-5 flex items-center bg-gray-100 shadow-md">
                      <div className="flex items-center gap-2">
                        <span className="text-yellow-500 text-lg">
                          ⭐ {product.rating}
                        </span>
                        <span className="text-gray-500 text-sm">
                          ({Math.round(product.rating * 20)}%)
                        </span>
                      </div>
                    </a>
                    <span className="text-sm font-medium text-purple-600 bg-purple-200 px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-bold text-red-600 bg-red-100 px-3 py-1 inline-block rounded-lg hover:bg-red-400 hover:text-white mt-1">
                        💲 {product.price}
                      </h2>
                      <button className="p-2 bg-green-100 text-green-500 rounded-full hover:bg-green-500 hover:text-white transition">
                        <TiShoppingCart className="text-3xl" />
                      </button>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export default Home;
