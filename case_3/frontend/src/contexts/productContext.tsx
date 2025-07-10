import React, { createContext, useContext, useEffect, useState } from "react";
import type { CategoryType } from "../types/productType";

type ProductContextType = {
  categories: CategoryType[];
  loading: boolean;
  error: string | null;
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(import.meta.env.VITE_SOURCE_API_URL + "/api/products")
      .then(async (res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setCategories(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ProductContext.Provider value={{ categories, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
};
