import { FunctionComponent } from "react";
import { StyledArticleContainer } from "./ArticleContainer.styles";
import { ArticleHeadline } from "components/other/Headlines/Headlines.styles";

interface Props {
  borderColor: string;
  headlineText: string;
  bgColor: string;
  children: React.ReactNode;
}

const ArticleContainer: FunctionComponent<Props> = ({
  borderColor,
  headlineText,
  bgColor,
  children,
}) => {
  return (
    <StyledArticleContainer borderColor={borderColor}>
      {headlineText && (
        <ArticleHeadline bgColor={bgColor}>{headlineText}</ArticleHeadline>
      )}
      {children}
    </StyledArticleContainer>
  );
};

export default ArticleContainer;
