import { useState, useEffect } from "react";
import Modal from "./Modal";
import { ReactComponent as ErrorSvg } from "assets/icons/error.svg";
import { ReactComponent as SuccessSvg } from "assets/icons/success.svg";

interface D {
  message: string;
  isOpen: boolean;
  isSuccess: boolean;
  onCloseClick: () => void;
}

export const useModal = (goodMsg: string, badMsg: string) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(badMsg);
  const [svg, setSvg] = useState<
    React.FunctionComponent<
      React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
      }
    >
  >(ErrorSvg);

  useEffect(() => {
    isSuccess ? setMessage(goodMsg) : setMessage(badMsg);
    isSuccess ? setSvg(SuccessSvg) : setSvg(ErrorSvg);
    console.log("xd");
  }, [badMsg, goodMsg, isSuccess]);

  const closeHandle = () => {
    setIsOpen(false);
  };
  const openHandle = (isSuccess: boolean) => {
    setIsOpen(true);
    setIsSuccess(isSuccess);
  };

  return {
    ModalComponent: Modal,
    isOpen: isOpen,
    isSuccess: isSuccess,
    message: message,
    Svg: svg,
    openHandle: openHandle,
    closeHandle: closeHandle,
  };
};
