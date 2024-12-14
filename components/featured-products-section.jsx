import Image from "next/image";
import demoImg from "@/public/clgpy.webp";

const FeaturedProductsSection = () => {
  return (
    <section className="py-16 bg-white dark:bg-neutral-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white">
          Featured Calligraphy Designs
        </h2>
        <p className="text-center text-gray-500 dark:text-neutral-400 mt-2">
          Handcrafted masterpieces that blend tradition with modern aesthetics.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Example product cards */}
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-gray-100 dark:bg-neutral-900 p-4 rounded-lg shadow-lg text-center"
            >
              <Image
                src={demoImg}
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
  );
};

export default FeaturedProductsSection;
