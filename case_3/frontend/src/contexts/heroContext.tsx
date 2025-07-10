import React, { createContext, useContext, useEffect, useState } from "react";

type HeroType = {
  title: string;
  description: string;
  image: string;
};

type HeroContextType = {
  hero: HeroType | null;
  loading: boolean;
  error: string | null;
};

const HeroContext = createContext<HeroContextType | undefined>(undefined);

export const HeroProvider = ({ children }: { children: React.ReactNode }) => {
  const [hero, setHero] = useState<HeroType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/hero")
      .then(async (res) => {
        if (!res.ok) throw new Error("Failed to fetch hero");
        const data = await res.json();
        setHero(data);
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
    <HeroContext.Provider value={{ hero, loading, error }}>
      {children}
    </HeroContext.Provider>
  );
};

export const useHero = () => {
  const context = useContext(HeroContext);
  if (!context) {
    throw new Error("useHero must be used within a HeroProvider");
  }
  return context;
};
