import React from "react";

const HomePage = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gray-100 dark:bg-neutral-900 py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-teal-600 dark:text-teal-400">
            Elegance in Every Stroke
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-neutral-400">
            Explore our exquisite Arabic Calligraphy collection, perfect for
            display, gifting, and custom designs.
          </p>
          <button className="mt-8 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700">
            Order Your Custom Calligraphy
          </button>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-white dark:bg-neutral-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white">
            Featured Calligraphy Designs
          </h2>
          <p className="text-center text-gray-500 dark:text-neutral-400 mt-2">
            Handcrafted masterpieces that blend tradition with modern
            aesthetics.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Example product cards */}
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-gray-100 dark:bg-neutral-900 p-4 rounded-lg shadow-lg text-center"
              >
                <img
                  src={`/images/design-${item}.jpg`}
                  alt={`Calligraphy Design ${item}`}
                  className="w-full h-60 object-cover rounded-lg"
                />
                <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                  Design Title {item}
                </h3>
                <p className="mt-2 text-gray-500 dark:text-neutral-400">
                  A short description of the design.
                </p>
                <button className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Order Section */}
      <section className="py-16 bg-gray-100 dark:bg-neutral-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
            Custom Orders
          </h2>
          <p className="mt-4 text-gray-500 dark:text-neutral-400">
            Personalize your space or give the perfect gift with a unique
            calligraphy design.
          </p>
          <button className="mt-6 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700">
            Place a Custom Order
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white dark:bg-neutral-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white">
            What Our Customers Say
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example testimonial */}
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-gray-100 dark:bg-neutral-900 p-6 rounded-lg shadow-lg"
              >
                <p className="text-gray-500 dark:text-neutral-400">
                  "The calligraphy piece I ordered exceeded all expectations.
                  It's now the highlight of my living room!"
                </p>
                <h3 className="mt-4 font-semibold text-teal-600 dark:text-teal-400">
                  - Customer Name {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-100 dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white">
            Gallery
          </h2>
          <p className="text-center text-gray-500 dark:text-neutral-400 mt-2">
            Browse through our extensive collection of Arabic Calligraphy art.
          </p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Example images */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <img
                key={item}
                src={`/images/gallery-${item}.jpg`}
                alt={`Gallery Image ${item}`}
                className="w-full h-40 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white dark:bg-neutral-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
            Get in Touch
          </h2>
          <p className="mt-4 text-gray-500 dark:text-neutral-400">
            Have questions? Reach out to us for more information or inquiries.
          </p>
          <button className="mt-6 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
