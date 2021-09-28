import { FunctionComponent } from "react";
import ReactDOM from "react-dom";
import Button from "components/other/ButtonLink/Button";
import { StyledModalContainer } from "./Modal.styles";

interface ModalProps {
  message: string;
  Svg: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  onCloseClick: () => void;
  isSuccess: boolean;
}

const Modal: FunctionComponent<ModalProps> = ({
  Svg,
  message,
  onCloseClick,
  isSuccess,
}) => {
  return ReactDOM.createPortal(
    <StyledModalContainer isSuccess={isSuccess} onClick={onCloseClick}>
      <div className="modal">
        <Svg />
        <span>{message}</span>
        <Button
          isModal={true}
          text={"Close"}
          type="button"
          handleClick={onCloseClick}
        />
      </div>
    </StyledModalContainer>,
    document.body
  );
};

export default Modal;
