import { useState } from "react";
import type { NavItemType } from "../types/navItemType";
import { useNavItems } from "../hooks/useNavItems";
import useScrollTrigger from "../hooks/useScrollTrigger";
import Logo from "/src/assets/logo/logo_landscape.png";
import Burger from "/src/assets/svgs/burger.svg";
import Cross from "/src/assets/svgs/cross.svg";

const GoToSection = (section: string) => {
  const element = document.getElementById(section);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const NavLink = (item: NavItemType & { toggleOpen?: () => void }) => {
  const isDisabled = item.isActive;

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => {
        GoToSection(item.href);
        item.toggleOpen?.();
      }}
      className={`relative text-sm font-bold px-1 cursor-pointer py-0.5 transition-all duration-200
        ${
          isDisabled
            ? "text-yellow-500 cursor-default"
            : "text-gray-900 hover:text-yellow-500"
        }
      `}
      aria-current={isDisabled ? "page" : undefined}
    >
      {item.label}
      <span
        className={`absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-500 transition-opacity duration-200
          ${isDisabled ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
        `}
      />
    </div>
  );
};

export default function Navbar() {
  const navItems = useNavItems();
  const isScrolled = useScrollTrigger(80);
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}
      `}
    >
      <div
        className={`flex items-center justify-between max-w-6xl w-full mx-auto px-4
          transition-all duration-300 ${isScrolled ? "py-4" : "py-8"}
        `}
      >
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src={Logo}
            alt="Logo"
            className="h-10 w-auto transition-all duration-300"
          />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <li key={item.label} className="group">
              <NavLink {...item} />
            </li>
          ))}
        </ul>

        {/* Mobile Menu (placeholder) */}
        <div className="md:hidden">
          <button
            onClick={toggleOpen}
            className="text-gray-800 hover:text-yellow-500 focus:outline-none"
            aria-label="Open menu"
          >
            <img src={isOpen ? Cross : Burger} alt="Menu" className="w-6" />
          </button>
        </div>

        <div
          className={`absolute top-16 left-0 w-full bg-white md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[999px] py-4" : "max-h-0 py-0"
          }`}
        >
          <ul className="flex flex-col items-center space-y-4">
            {navItems.map((item) => (
              <li key={item.label} className="group py-2">
                <NavLink {...item} toggleOpen={toggleOpen} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
