import Header from "components/sections/Header/Header";
import HeroSection from "components/sections/HeroSection/HeroSection";
import ProjectsSection from "components/sections/ProjectsSection/ProjectsSection";
import AboutSection from "components/sections/AboutSection/AboutSection";
import ContactSection from "components/sections/ContactSection/ContactSection";
import Footer from "components/sections/Footer/Footer";

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
