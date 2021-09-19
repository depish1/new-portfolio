import { StyledHamburgerButton } from "./HamburgerButton.styles";
import { useSelector, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { toggleMenu } from "redux/menu";
import { TStore } from "redux/store";

export const HamburgerButton: React.FunctionComponent = () => {
  const isMenuOpen = useSelector(
    ({ menuReducer }: TStore) => menuReducer.isMenuOpen
  );

  const dispatch: Dispatch = useDispatch();

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  const isOpenClassNameForWrapper = `hamburger__wrapper ${
    isMenuOpen ? "isOpen" : ""
  }`;
  console.log(isOpenClassNameForWrapper);
  return (
    <StyledHamburgerButton onClick={handleToggleMenu}>
      <div className={isOpenClassNameForWrapper}>
        <span className="hamburger__line hamburger__line--top" />
        <span className="hamburger__line hamburger__line--middle" />
        <span className="hamburger__line hamburger__line--bottom" />
      </div>
    </StyledHamburgerButton>
  );
};

export default HamburgerButton;
