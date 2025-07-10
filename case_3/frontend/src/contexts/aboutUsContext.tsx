import React, { createContext, useContext, useEffect, useState } from "react";
import type { AboutUsType } from "../types/aboutUsType";

type AboutUsContextType = {
  aboutUs: AboutUsType | null;
  loading: boolean;
  error: string | null;
};

const AboutUsContext = createContext<AboutUsContextType | undefined>(undefined);

export const AboutUsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [aboutUs, setAboutUs] = useState<AboutUsType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/about")
      .then(async (res) => {
        if (!res.ok) throw new Error("Failed to fetch about us");
        const data = await res.json();
        setAboutUs(data);
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
    <AboutUsContext.Provider value={{ aboutUs, loading, error }}>
      {children}
    </AboutUsContext.Provider>
  );
};

export const useAboutUs = () => {
  const context = useContext(AboutUsContext);
  if (!context) {
    throw new Error("useAboutUs must be used within a AboutUsProvider");
  }
  return context;
};
