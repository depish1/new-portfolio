import { FunctionComponent } from "react";
import { StyledButtonLink } from "./ButtonLink.styles";

interface IButtonLinkProps {
  text: string;
  link: string;
  textColor: string;
  bgColor: string;
}

const ButtonLink: FunctionComponent<IButtonLinkProps> = ({
  text,
  link,
  textColor,
  bgColor,
}) => {
  return (
    <StyledButtonLink href={link} textColor={textColor} bgColor={bgColor}>
      {text}
    </StyledButtonLink>
  );
};

export default ButtonLink;
