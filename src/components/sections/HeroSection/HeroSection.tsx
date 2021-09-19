import { FunctionComponent } from "react";
import SectionContainer from "components/other/SectionContainer/SectionContainer";
import ArticleContainer from "components/other/ArticleContainer/ArticleContainer";
import ButtonLink from "components/other/ButtonLink/ButtonLink";
import { ButtonsWrapper } from "components/other/ButtonLink/ButtonLink.styles";
import { BoldText } from "components/other/ArticleContainer/ArticleContainer.styles";
import { theme } from "assets/styles/theme";
import { IntroductionParagraph } from "./HeroSection.styles";

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
        <IntroductionParagraph>
          My name is <BoldText>Michał Depa</BoldText> and I am{" "}
          <BoldText>Frontend Developer</BoldText>.
        </IntroductionParagraph>
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
