"use client";

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white dark:bg-neutral-800">
      {/* Logo */}
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-teal-600 dark:text-teal-400">
        Sneha&apos;s Calligraphy
      </h1>

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
      </nav>

      {/* Hamburger Menu Button (for mobile) */}
      <button
        className="md:hidden text-gray-700 dark:text-gray-300"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-white dark:bg-neutral-800 shadow-md md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <a
                href="#gallery"
                className="hover:underline text-gray-700 dark:text-gray-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:underline text-gray-700 dark:text-gray-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#orders"
                className="hover:underline text-gray-700 dark:text-gray-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Custom Orders
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:underline text-gray-700 dark:text-gray-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
