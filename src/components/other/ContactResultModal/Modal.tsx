import { FunctionComponent } from "react";
import ReactDOM from "react-dom";
import { StyledModalContainer } from "./Modal.styles";

interface ModalProps {
  onCloseClick: () => void;
}

const Modal: FunctionComponent<ModalProps> = ({ onCloseClick, children }) => {
  return ReactDOM.createPortal(
    <StyledModalContainer onClick={onCloseClick}>
      {children}
    </StyledModalContainer>,
    document.body
  );
};

export default Modal;
