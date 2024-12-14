import React from "react";

const CustomOrderPage = () => {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-neutral-900 py-12">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-teal-600 dark:text-teal-400">
            Create Your Personalized Calligraphy
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Share your ideas, and we&apos;ll craft the perfect Arabic
            calligraphy for your home, gifts, or special occasions.
          </p>
        </div>

        {/* Inspiration Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-teal-600 dark:text-teal-400">
              Wall Art
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Elegant pieces for your living or workspace.
            </p>
          </div>
          <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-teal-600 dark:text-teal-400">
              Gift Items
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Unique, meaningful gifts for your loved ones.
            </p>
          </div>
          <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-teal-600 dark:text-teal-400">
              Custom Names
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Add a personal touch with customized names or quotes.
            </p>
          </div>
        </div>

        {/* Order Form */}
        <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-6 text-center">
            Custom Order Form
          </h2>
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="mt-1 w-full rounded-lg border-gray-300 dark:border-neutral-700 dark:bg-neutral-900 dark:text-gray-200 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="mt-1 w-full rounded-lg border-gray-300 dark:border-neutral-700 dark:bg-neutral-900 dark:text-gray-200 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                placeholder="Enter your phone number"
                className="mt-1 w-full rounded-lg border-gray-300 dark:border-neutral-700 dark:bg-neutral-900 dark:text-gray-200 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              />
            </div>

            {/* Order Details */}
            <div>
              <label
                htmlFor="details"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Order Details
              </label>
              <textarea
                id="details"
                rows="4"
                placeholder="Describe your desired calligraphy"
                className="mt-1 w-full rounded-lg border-gray-300 dark:border-neutral-700 dark:bg-neutral-900 dark:text-gray-200 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              ></textarea>
            </div>

            {/* File Upload */}
            <div>
              <label
                htmlFor="upload"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Upload Reference File (Optional)
              </label>
              <input
                type="file"
                id="upload"
                className="mt-1 w-full rounded-lg border-gray-300 dark:border-neutral-700 dark:bg-neutral-900 dark:text-gray-200 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-teal-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-teal-400"
              >
                Submit Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CustomOrderPage;
