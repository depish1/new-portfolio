import { FunctionComponent } from "react";
import { StyledSectionContainer, Wrapper } from "./SectionContainer.styles";
import { SectionHeadline } from "components/other/Headlines/Headlines.styles";

interface Props {
  bgColor: string;
  textColor: string;
  headlineText?: string;
  centerXY?: boolean;
  children: React.ReactNode;
  minusHeight?: string;
}

const SectionContainer: FunctionComponent<Props> = ({
  bgColor,
  textColor,
  headlineText,
  children,
}) => {
  return (
    <StyledSectionContainer bgColor={bgColor} textColor={textColor}>
      <Wrapper>
        {headlineText && <SectionHeadline>{headlineText}</SectionHeadline>}
        {children}
      </Wrapper>
    </StyledSectionContainer>
  );
};

export default SectionContainer;
