import { FunctionComponent, ReactElement } from "react";
import { theme } from "assets/styles/theme";
import SectionContainer from "components/other/SectionContainer/SectionContainer";
import ArticleContainer from "components/other/ArticleContainer/ArticleContainer";

const AboutSection: FunctionComponent = (): ReactElement => {
  const { yellow, black } = theme.colors;

  return (
    <SectionContainer bgColor={yellow} textColor={black}>
      <ArticleContainer
        headlineText="About me"
        borderColor={black}
        bgColor={yellow}
      >
        xdd
      </ArticleContainer>
    </SectionContainer>
  );
};
