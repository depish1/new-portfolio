import Header from "components/other/Header/Header";
import HeroSection from "components/sections/HeroSection/HeroSection";
import ProjectsSection from "components/sections/ProjectsSection/ProjectsSection";
import AboutSection from "components/sections/AboutSection/AboutSection";

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
    </div>
  );
};

export default App;
