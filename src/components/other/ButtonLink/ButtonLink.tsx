import { FunctionComponent } from "react";
import { StyledButtonLink } from "./ButtonLink.styles";

interface IButtonLinkProps {
  text: string;
  link?: string;
  textColor: string;
  bgColor: string;
  type?: "button" | "submit";
}

const ButtonLink: FunctionComponent<IButtonLinkProps> = ({
  text,
  link,
  textColor,
  bgColor,
  type = "button",
}) => {
  return (
    <StyledButtonLink
      href={link}
      textColor={textColor}
      bgColor={bgColor}
      type={type}
    >
      {text}
    </StyledButtonLink>
  );
};

export default ButtonLink;
