import Footer from "../../components/layouts/Footer";
import ContactFormSection from "./ContactFormSection";
import EventItemSection from "./EventItemSection";
import GallerySection from "./GallerySection";
import HeroSection from "./HeroSection";
import PricingSection from "./PricingSection";
import RecentEvent from "./RecentEvent";
import ReviewSection from "./ReviewSection";
import ServicesSection from "./ServicesSection";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <div className="relative">
        <div className="blue-blur"></div>
        <div className="pink-blur"></div>
        <EventItemSection />
        <GallerySection />
      </div>
      <PricingSection />
      <ReviewSection />
      <RecentEvent />
      <ContactFormSection />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Home;