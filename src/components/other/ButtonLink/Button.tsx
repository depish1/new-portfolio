import { FunctionComponent } from "react";
import { StyledButton } from "./ButtonLink.styles";

interface IButtonProps {
  text: string;
  type?: "button" | "reset" | "submit";
  handleClick?: () => void;
  customMarginTop?: string;
  isModal?: boolean;
}

const Button: FunctionComponent<IButtonProps> = ({
  text,
  type = "button",
  handleClick,
  customMarginTop,
  isModal,
}) => {
  return (
    <StyledButton
      type={type}
      onClick={handleClick}
      customMarginTop={customMarginTop}
      isModal={isModal}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
