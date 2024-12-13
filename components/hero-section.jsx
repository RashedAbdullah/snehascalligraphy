import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-gray-100 dark:bg-neutral-900 text-center bg-[url('/S_A_A_1.webp')] bg-cover bg-fixed bg-center">
      {/* Lighter Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent dark:from-neutral-900/50 dark:via-neutral-800/30"></div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen py-20">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Hero Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-300 dark:from-teal-400 dark:to-teal-500 drop-shadow-lg">
            Timeless Elegance, <br /> Arabic Calligraphy
          </h1>
          {/* Subtitle */}
          <p className="mt-6 text-lg md:text-xl lg:text-2xl text-gray-100 dark:text-gray-300 max-w-3xl mx-auto drop-shadow-sm">
            Discover the art of words with our unique Arabic calligraphy
            designs. Perfect for your home, gifts, or customized pieces to
            cherish forever.
          </p>
          {/* Call-to-Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="px-10 py-4 text-lg font-semibold rounded-lg shadow-lg text-white bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-600 dark:bg-gradient-to-r dark:from-teal-400 dark:to-teal-500 dark:hover:from-teal-300 dark:hover:to-teal-400 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-teal-400">
              Order Custom Design
            </button>
            <button className="px-10 py-4 text-lg font-semibold rounded-lg shadow-lg text-teal-600 bg-white hover:bg-gray-100 dark:text-teal-400 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-teal-400">
              Explore Gallery
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
