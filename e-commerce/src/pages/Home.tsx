import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  fetchAllProducts,
  fetchCategories,
  fetchProductsByCategory,
} from "../api/productsApi";
import CategoryFilter from "../components/CategoryFilter";
import ProductCard from "../components/ProductCard";
import { useAppDispatch } from "../app/hooks";
import { addToCart } from "../cart/cartSlice";
import type { Product } from "../types/product";


const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | "all">("all");
  const dispatch = useAppDispatch();

  const {
    data: categories = [],
    isLoading: categoriesLoading,
    isError: categoriesError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const {
    data: products = [],
    isLoading: productsLoading,
    isError: productsError,
  } = useQuery({
    queryKey:
      selectedCategory === "all"
        ? ["products"]
        : ["products", selectedCategory],
    queryFn:
      selectedCategory === "all"
        ? fetchAllProducts
        : () => fetchProductsByCategory(selectedCategory),
  });

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };

  if (categoriesLoading || productsLoading) {
    return <p>Loading...</p>;
  }

  if (categoriesError || productsError) {
    return <p>Something went wrong while loading data.</p>;
  }

  return (
    <div>
      <h1>Product Catalog</h1>

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <div>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;