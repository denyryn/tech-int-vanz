import React, { createContext, useContext, useEffect, useState } from "react";
import type { TestimonyType } from "../types/testimonyType";

type TestimonyContextType = {
  testimonies: TestimonyType[];
  loading: boolean;
  error: string | null;
};

const TestimonyContext = createContext<TestimonyContextType | undefined>(
  undefined
);

export const TestimonyProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [testimonies, setTestimonies] = useState<TestimonyType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/testimonies")
      .then(async (res) => {
        if (!res.ok) throw new Error("Failed to fetch testimonies");
        const data = await res.json();
        setTestimonies(data);
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
    <TestimonyContext.Provider value={{ testimonies, loading, error }}>
      {children}
    </TestimonyContext.Provider>
  );
};

export const useTestimony = () => {
  const context = useContext(TestimonyContext);
  if (!context) {
    throw new Error("useTestimony must be used within a TestimonyProvider");
  }
  return context;
};
