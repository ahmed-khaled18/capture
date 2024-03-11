import AboutSection from "../components/AboutSection";
import FaqSection from "../components/FaqSection";
import ServicesSection from "../components/ServicesSection";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </div>
  );
};

export default AboutUs;
