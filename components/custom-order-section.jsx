import Link from "next/link";
import React from "react";

const CustomOrderSection = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-neutral-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
          Custom Orders
        </h2>
        <p className="mt-4 text-gray-500 dark:text-neutral-400">
          Personalize your space or give the perfect gift with a unique
          calligraphy design.
        </p>
        <Link
          href="/custom"
          className="mt-6 inline-block px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
        >
          Place a Custom Order
        </Link>
      </div>
    </section>
  );
};

export default CustomOrderSection;
