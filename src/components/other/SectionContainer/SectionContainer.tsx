import { FunctionComponent } from "react";
import { StyledSectionContainer, Wrapper } from "./SectionContainer.styles";
import { SectionHeadline } from "components/other/Headlines/Headlines.styles";

interface Props {
  id: string;
  headlineText?: string;
  centerXY?: boolean;
  children: React.ReactNode;
  minusHeight?: string;
}

const SectionContainer: FunctionComponent<Props> = ({
  headlineText,
  children,
  id,
}) => {
  return (
    <StyledSectionContainer id={id}>
      <Wrapper>
        {headlineText && <SectionHeadline>{headlineText}</SectionHeadline>}
        {children}
      </Wrapper>
    </StyledSectionContainer>
  );
};

export default SectionContainer;
