import { FunctionComponent } from "react";
import Button from "components/other/ButtonLink/Button";
import { StyledSendingResult } from "./SendingResult.styles";
import { ReactComponent as ErrorSvg } from "assets/icons/error.svg";
import { ReactComponent as SuccessSvg } from "assets/icons/success.svg";

interface ModalProps {
  onCloseClick: () => void;
  isSuccess: boolean;
}

const Modal: FunctionComponent<ModalProps> = ({ onCloseClick, isSuccess }) => {
  const goodMsg: string = "The message has been sent correctly.";
  const badMsg: string = "Something went wrong. Please try again later.";

  return (
    <StyledSendingResult isSuccess={isSuccess}>
      {isSuccess ? goodMsg : badMsg}
      <span>{isSuccess ? <SuccessSvg /> : <ErrorSvg />}</span>
      <Button
        isModal={true}
        text={"Close"}
        type="button"
        handleClick={onCloseClick}
      />
    </StyledSendingResult>
  );
};

export default Modal;
