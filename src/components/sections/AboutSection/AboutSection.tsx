import { useEffect, FunctionComponent, ReactElement } from "react";
import SectionContainer from "components/other/SectionContainer/SectionContainer";
import ArticleContainer from "components/other/ArticleContainer/ArticleContainer";
import {
  Technology,
  BoldText,
} from "components/other/ArticleContainer/ArticleContainer.styles";
import { AboutMeTextSection, SkillsList } from "./AboutSection.styles";
import Aos from "aos";
import "aos/dist/aos.css";

interface ISkills {
  category: string;
  skillsArr: string[];
}

const AboutSection: FunctionComponent = (): ReactElement => {
  const skills: ISkills[] = [
    {
      category: "React",
      skillsArr: ["Redux", "Styled components", "React Router"],
    },
    { category: "Javascript", skillsArr: ["ES6+", "Typescrit"] },
    { category: "Css", skillsArr: ["Sass", "BEM", "CSS Modules"] },
    { category: "HTML", skillsArr: ["Accessibility", "Semantics"] },
    { category: "Others", skillsArr: ["Git", "Fork", "Omega", "VS Code"] },
  ];

  const AboutMeText1: string =
    "My name is Michał, I'm 25 years old and I come from Warsaw. I have been learning programming for 1.5 years and since the beginning of September 2021 I have been gaining my first full-time commercial experience as a Frontend Developer. ";

  const AboutMeText2: string =
    "I am a communicative person who likes to spend time with other people. When I program, I am soaked up and I want to understand the problem in its entirety. I specialize in React and am currently open to a job offer in Warsaw or remotely.";

  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  return (
    <SectionContainer id="about">
      <ArticleContainer headlineText="About me" aos="fade-down">
        <AboutMeTextSection>
          <p>{AboutMeText1}</p>
          <p>{AboutMeText2}</p>
        </AboutMeTextSection>
        <BoldText>My skills:</BoldText>
        <SkillsList>
          {skills.map(({ category, skillsArr }) => (
            <li key={category}>
              <Technology isMain={true}>{category}</Technology>
              <ul>
                {skillsArr.map((skill) => (
                  <li key={skill}>
                    <Technology>{skill}</Technology>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </SkillsList>
      </ArticleContainer>
    </SectionContainer>
  );
};

export default AboutSection;
