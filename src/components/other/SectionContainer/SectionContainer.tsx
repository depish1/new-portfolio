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
  minusHeight = "0px",
  children,
  centerXY = false,
}) => {
  return (
    <StyledSectionContainer
      bgColor={bgColor}
      textColor={textColor}
      minusHeight={minusHeight}
    >
      {headlineText && <SectionHeadline>{headlineText}</SectionHeadline>}
      <Wrapper centerXY={centerXY}>{children}</Wrapper>
    </StyledSectionContainer>
  );
};

export default SectionContainer;
