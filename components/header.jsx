import { ModeToggle } from "./theme-switcher";
import Logo from "./logo";
import SideBarComp from "./sidebar";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white dark:bg-neutral-800">
      <Logo />

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        <a
          href="#gallery"
          className="hover:underline text-gray-700 dark:text-gray-300"
        >
          Gallery
        </a>
        <a
          href="#about"
          className="hover:underline text-gray-700 dark:text-gray-300"
        >
          About
        </a>
        <a
          href="#orders"
          className="hover:underline text-gray-700 dark:text-gray-300"
        >
          Custom Orders
        </a>
        <a
          href="#contact"
          className="hover:underline text-gray-700 dark:text-gray-300"
        >
          Contact
        </a>
        <ModeToggle />
      </nav>

      <div className="inline-block md:hidden">
        <SideBarComp />
      </div>
    </header>
  );
};

export default Header;
