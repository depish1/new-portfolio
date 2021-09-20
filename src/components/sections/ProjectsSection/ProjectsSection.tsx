import { FunctionComponent } from "react";
import SectionContainer from "components/other/SectionContainer/SectionContainer";
import ArticleContainer from "components/other/ArticleContainer/ArticleContainer";
import ButtonLink from "components/other/ButtonLink/ButtonLink";
import ProjectsArr from "./ProjectsData";
import { ButtonsWrapper } from "components/other/ButtonLink/ButtonLink.styles";
import { theme } from "assets/styles/theme";
import { ProjectsWrapper, ProjectDescription } from "./ProjectsSection.styles";
import {
  BoldText,
  Technology,
} from "components/other/ArticleContainer/ArticleContainer.styles";

const ProjectsSection: FunctionComponent = () => {
  const {
    colors: { yellow, black },
  } = theme;

  return (
    <SectionContainer
      bgColor={black}
      textColor={yellow}
      headlineText="Projects"
    >
      <ProjectsWrapper>
        {ProjectsArr.map(
          ({ title, desc, technologies, liveLink, githubLink }) => (
            <ArticleContainer
              headlineText={title}
              bgColor={black}
              borderColor={yellow}
              key={title}
            >
              <div>
                <ProjectDescription>{desc}</ProjectDescription>
                <BoldText>Technologies: </BoldText>
                <ul>
                  {technologies.map((tech) => (
                    <li key={tech}>
                      <Technology borderColor={yellow} textColor={black}>
                        {tech}
                      </Technology>
                    </li>
                  ))}
                </ul>
              </div>
              <ButtonsWrapper>
                <ButtonLink
                  text="Live"
                  link={liveLink}
                  textColor={black}
                  bgColor={yellow}
                />
                <ButtonLink
                  text="Github"
                  link={githubLink}
                  textColor={black}
                  bgColor={yellow}
                />
              </ButtonsWrapper>
            </ArticleContainer>
          )
        )}
      </ProjectsWrapper>
    </SectionContainer>
  );
};

export default ProjectsSection;
