import React from "react";

const ContactSection = () => {
  return (
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
  );
};

export default ContactSection;
