import { useState } from "react";
import { ProductProvider, useProduct } from "../../contexts/productContext";
import type { ProductType, CategoryType } from "../../types/productType";

const ProductCard = ({ product }: { product: ProductType }) => {
  return (
    <div className="flex flex-col p-6 py-14 rounded-3xl bg-white shadow-md items-center hover:bg-[var(--color-accent)] transition-colors duration-200 group h-full space-y-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-40 h-40 object-contain group-hover:scale-110 transition-all duration-200 group-hover:rotate-12"
      />
      <div className="text-center mt-4">
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <p className="font-light">{product.description}</p>
      </div>
      <h3 className="font-bold text-3xl mt-auto group-hover:text-white transition-colors duration-200">
        <strong className="group-hover:text-white transition-colors duration-200">
          {product.price}
        </strong>
      </h3>
    </div>
  );
};

const ProductCategory = ({ categories }: { categories: CategoryType[] }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);
  const selectedProducts =
    categories.find((cat) => cat.name === selectedCategory)?.items || [];

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="flex items-center justify-evenly bg-white rounded-full border border-gray-200 p-4 mb-6 space-x-4 w-fit">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category.name)}
            className={`text-base lg:text-2xl font-bold p-2 rounded-full px-4 transition-all duration-300 ${
              selectedCategory === category.name
                ? "text-white bg-[var(--color-accent)] "
                : "text-gray-900"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full">
        {selectedProducts.map((product: ProductType, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

const ProductSection = () => {
  const { categories } = useProduct();

  return (
    <section
      id="product"
      className="min-h-screen flex flex-col items-center justify-center py-16 px-12 space-y-16"
    >
      <h1 className="text-center text-4xl font-bold mb-4">Produk Unggulan</h1>
      <ProductCategory categories={categories} />
    </section>
  );
};

export default function Product() {
  return (
    <ProductProvider>
      <ProductSection />
    </ProductProvider>
  );
}
