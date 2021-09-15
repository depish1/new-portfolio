import { FunctionComponent } from "react";
import SectionContainer from "components/SectionContainer/SectionContainer";
import ArticleContainer from "components/ArticleContainer/ArticleContainer";
import ButtonLink from "components/ButtonLink/ButtonLink";
import { ButtonsWrapper } from "components/ButtonLink/ButtonLink.styles";
import { BoldText } from "./HeroSection.styles";
import { theme } from "assets/styles/theme";

const HeroSection: FunctionComponent = () => {
  const {
    colors: { yellow, black },
    headerHeight,
  } = theme;

  return (
    <SectionContainer
      bgColor={yellow}
      textColor={black}
      minusHeight={headerHeight}
      centerXY={true}
    >
      <ArticleContainer
        bgColor={yellow}
        headlineText={"Hello"}
        borderColor={black}
      >
        My name is <BoldText>Michał Depa</BoldText> and I am{" "}
        <BoldText>Frontend Developer</BoldText>.
        <ButtonsWrapper>
          <ButtonLink
            textColor={yellow}
            bgColor={black}
            text="Linkedin"
            link="https://www.linkedin.com/in/mdepa1"
          />
          <ButtonLink
            textColor={yellow}
            bgColor={black}
            text="Github"
            link="https://github.com/depish1"
          />
          <ButtonLink
            textColor={yellow}
            bgColor={black}
            text="Contact me"
            link="#"
          />
        </ButtonsWrapper>
      </ArticleContainer>
    </SectionContainer>
  );
};

export default HeroSection;
