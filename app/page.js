import HeroSection from "@/components/hero-section";
import FeaturedProductsSection from "@/components/featured-products-section";
import CustomOrderSection from "@/components/custom-order-section";
import TestimonialsSection from "@/components/testimonials-section";
import GallerySection from "@/components/gallery-section";
import ContactSection from "@/components/contact-section";

const HomePage = () => {
  return (
    <div className="space-y-16">
      <HeroSection />
      <FeaturedProductsSection />
      <CustomOrderSection />
      <TestimonialsSection />
      <GallerySection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
