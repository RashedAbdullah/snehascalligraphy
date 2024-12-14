import Image from "next/image";
import demoImg from "@/public/clgpy.webp";

const GallerySection = () => {
  return (
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
            <Image
              key={item}
              src={demoImg}
              alt={`Gallery Image ${item}`}
              className="w-full h-40 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
