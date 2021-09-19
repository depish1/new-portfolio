import Header from "components/other/Header/Header";
import HeroSection from "components/sections/HeroSection/HeroSection";
import ProjectsSection from "components/sections/ProjectsSection/ProjectsSection";

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ProjectsSection />
    </div>
  );
};

export default App;
