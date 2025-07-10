import { useLocation } from "react-router";
import type { NavItemType } from "../types/navItemType";

export const useNavItems = (): NavItemType[] => {
  const location = useLocation();
  const navItems = [
    { label: "Beranda", href: "home" },
    { label: "Tentang Kami", href: "about" },
    { label: "Kontak", href: "contact" },
  ];

  return navItems.map((item) => ({
    ...item,
    isActive: location.hash === `#${item.href}`,
  }));
};
