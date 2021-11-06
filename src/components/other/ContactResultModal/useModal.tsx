import { useState } from "react";
import Modal from "./Modal";
import SendingResult from "components/other/SendingResult/SendingResult";
import Loader from "components/other/Loader/Loader";

enum ComponentsList {
  SendingResult = "SendingResult",
  Loader = "Loader",
}

export const useModal = () => {
  const [componentName, setComponentName] = useState<ComponentsList>(
    ComponentsList.Loader
  );
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const closeHandle = () => {
    setIsOpen(false);
    setComponentName(ComponentsList.Loader);
  };
  const openHandle = (isSuccess: boolean, componentName: ComponentsList) => {
    setIsOpen(true);
    setIsSuccess(isSuccess);
    setComponentName(componentName);
  };

  const changeComponentHandle = (componentName: ComponentsList) => {
    setComponentName(componentName);
  };

  let componentToRender: JSX.Element | null;

  switch (componentName) {
    case ComponentsList.Loader:
      componentToRender = (
        <Loader isSuccess={isSuccess} onCloseClick={closeHandle} />
      );
      break;
    case ComponentsList.SendingResult:
      componentToRender = (
        <SendingResult isSuccess={isSuccess} onCloseClick={closeHandle} />
      );
      break;
    default:
      componentToRender = null;
  }

  return {
    ModalComponent: () => (
      <Modal onCloseClick={closeHandle}>{componentToRender}</Modal>
    ),
    isOpen: isOpen,
    openHandle: openHandle,
    changeComponentHandle: changeComponentHandle,
    ComponentsList: ComponentsList,
  };
};
