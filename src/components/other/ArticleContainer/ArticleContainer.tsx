import { FunctionComponent } from "react";
import { StyledArticleContainer } from "./ArticleContainer.styles";
import { ArticleHeadline } from "components/other/Headlines/Headlines.styles";

interface Props {
  headlineText: string;
  aos?: string;
  children: React.ReactNode;
}

const ArticleContainer: FunctionComponent<Props> = ({
  headlineText,
  children,
  aos,
}) => {
  return (
    <StyledArticleContainer data-aos-mirror="true" data-aos={aos}>
      {headlineText && <ArticleHeadline>{headlineText}</ArticleHeadline>}
      {children}
    </StyledArticleContainer>
  );
};

export default ArticleContainer;
