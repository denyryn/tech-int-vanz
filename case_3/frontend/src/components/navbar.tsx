import Logo from "/src/assets/logo/logo_landscape.png";
import { useNavItems } from "../hooks/useNavItems";
import type { NavItemType } from "../types/navItemType";
import useScrollTrigger from "../hooks/useScrollTrigger";

const GoToSection = (section: string) => {
  const element = document.getElementById(section);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const NavLink = (item: NavItemType) => {
  const isDisabled = item.isActive;

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => GoToSection(item.href)}
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
            className="text-gray-800 hover:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            aria-label="Open menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
