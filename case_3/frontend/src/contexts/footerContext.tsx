import React, { createContext, useContext, useEffect, useState } from "react";
import type { FooterType } from "../types/footerType";

type FooterContextType = {
  footer: FooterType | null;
  loading: boolean;
  error: string | null;
};

const FooterContext = createContext<FooterContextType | undefined>(undefined);

export const FooterProvider = ({ children }: { children: React.ReactNode }) => {
  const [footer, setFooter] = useState<FooterType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/footer")
      .then(async (res) => {
        if (!res.ok) throw new Error("Failed to fetch footer");
        const data = await res.json();
        setFooter(data);
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
    <FooterContext.Provider value={{ footer, loading, error }}>
      {children}
    </FooterContext.Provider>
  );
};

export const useFooter = () => {
  const context = useContext(FooterContext);
  if (!context) {
    throw new Error("useFooter must be used within a FooterProvider");
  }
  return context;
};
