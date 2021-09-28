import { FunctionComponent, useEffect } from "react";
import SectionContainer from "components/other/SectionContainer/SectionContainer";
import ArticleContainer from "components/other/ArticleContainer/ArticleContainer";
import Link from "components/other/ButtonLink/Link";
import { LinksWrapper } from "components/other/ButtonLink/ButtonLink.styles";
import { BoldText } from "components/other/ArticleContainer/ArticleContainer.styles";
import { IntroductionParagraph } from "./HeroSection.styles";
import Aos from "aos";
import "aos/dist/aos.css";

const HeroSection: FunctionComponent = ({ children }) => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  return (
    <SectionContainer id="hero">
      {children}
      <ArticleContainer headlineText={"Hello"} aos="fade-down">
        <IntroductionParagraph>
          My name is <BoldText>Michał Depa</BoldText> and I am{" "}
          <BoldText>Frontend Developer</BoldText>. I am looking for a job in
          Warsaw or remotely.
        </IntroductionParagraph>
        <LinksWrapper>
          <Link text="Linkedin" link="https://www.linkedin.com/in/mdepa1" />
          <Link text="Github" link="https://github.com/depish1" />
          <Link text="Contact me" link="#contact" />
        </LinksWrapper>
      </ArticleContainer>
    </SectionContainer>
  );
};

export default HeroSection;
