import { FunctionComponent } from "react";
import { StyledLink } from "./ButtonLink.styles";

interface IButtonProps {
  text: string;
  link?: string;
}

const Link: FunctionComponent<IButtonProps> = ({ text, link }) => {
  return <StyledLink href={link}>{text}</StyledLink>;
};

export default Link;
