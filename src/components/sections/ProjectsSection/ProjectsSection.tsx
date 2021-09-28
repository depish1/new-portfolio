import { FunctionComponent, useEffect } from "react";
import SectionContainer from "components/other/SectionContainer/SectionContainer";
import ArticleContainer from "components/other/ArticleContainer/ArticleContainer";
import Link from "components/other/ButtonLink/Link";
import ProjectsArr from "./ProjectsData";
import Aos from "aos";
import "aos/dist/aos.css";
import { LinksWrapper } from "components/other/ButtonLink/ButtonLink.styles";
import { ProjectsWrapper, ProjectDescription } from "./ProjectsSection.styles";
import {
  BoldText,
  Technology,
} from "components/other/ArticleContainer/ArticleContainer.styles";

const ProjectsSection: FunctionComponent = () => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  return (
    <SectionContainer headlineText="Projects" id="projects">
      <ProjectsWrapper>
        {ProjectsArr.map(
          ({ title, desc, technologies, liveLink, githubLink }, i) => (
            <ArticleContainer
              aos={i % 2 === 0 ? "fade-right" : "fade-left"}
              headlineText={title}
              key={title}
            >
              <div>
                <ProjectDescription>{desc}</ProjectDescription>
                <BoldText>Technologies: </BoldText>
                <ul>
                  {technologies.map((tech) => (
                    <li key={tech}>
                      <Technology>{tech}</Technology>
                    </li>
                  ))}
                </ul>
              </div>
              <LinksWrapper>
                <Link text="Live" link={liveLink} />
                <Link text="Github" link={githubLink} />
              </LinksWrapper>
            </ArticleContainer>
          )
        )}
      </ProjectsWrapper>
    </SectionContainer>
  );
};

export default ProjectsSection;
