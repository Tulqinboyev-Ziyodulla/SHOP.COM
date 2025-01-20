import axios from "axios";
import { Product } from "../types";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading/Loading";

const fetchProducts = async (): Promise<Product[]> => {
  const response = await axios.get(
    "https://6788ff202c874e66b7d73080.mockapi.io/api/v1/products"
  );
  return response.data;
};

const Products: React.FC = () => {
  const navigate = useNavigate();
  const { data: products, isLoading, isError } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loading />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-red-500">
        Something went wrong while fetching products. Please try again later.
      </div>
    );
  }

  return (
    <section className="px-4 py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-5xl font-bold text-center text-gray-800 mb-12">
          NEW ARRIVALS
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {products?.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <img
                src={product.imageUrl || "https://assets.vogue.com/photos/5891e0ebb482c0ea0e4db2a8/4:3/w_2560%2Cc_limit/02-lestrange.jpg"}
                alt={product.title}
                className="w-full cursor-pointer h-56 sm:h-64 object-cover mb-6 transition-transform transform hover:scale-105"
                onClick={() => navigate(`/detail/${product.id}`)}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 truncate">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{product.size}</p>
                <p className="text-lg font-bold text-gray-900">
                  ${Math.floor(product.price)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
