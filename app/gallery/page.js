import Image from "next/image";
import demoImg from "@/public/clgpy.webp";

const GalleryPage = () => {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-neutral-900 py-12">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-teal-600 dark:text-teal-400">
            Arabic Calligraphy Gallery
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our collection of elegant and timeless Arabic calligraphy
            designs, crafted with passion and precision.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              {/* Image */}
              <Image
                src={demoImg}
                alt={`Calligraphy ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="px-4 py-2 bg-teal-600 text-white text-sm font-semibold rounded-lg hover:bg-teal-700">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <button className="px-4 py-2 mx-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 dark:bg-neutral-800 dark:text-gray-300 dark:hover:bg-neutral-700">
            Previous
          </button>
          <button className="px-4 py-2 mx-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700">
            1
          </button>
          <button className="px-4 py-2 mx-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 dark:bg-neutral-800 dark:text-gray-300 dark:hover:bg-neutral-700">
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
