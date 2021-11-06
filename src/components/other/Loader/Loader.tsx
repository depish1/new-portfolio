import { FunctionComponent } from "react";
import { StyledLoader } from "./Loader.styles";

interface LoaderProps {
  onCloseClick: () => void;
  isSuccess: boolean;
}

const Loader: FunctionComponent<LoaderProps> = () => {
  return (
    <StyledLoader>
      <div className="box top-left" />
      <div className="box top-right" />
      <div className="box bottom-left" />
      <div className="box bottom-right" />
    </StyledLoader>
  );
};

export default Loader;
