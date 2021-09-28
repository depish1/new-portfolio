import { StyledHeader, StyledLogo } from "./Header.styles";
import Nav from "components/other/Nav/Nav";
import HamburgerButton from "components/other/HamburgerButton/HamburgerButton";
import { useHeaderOnScroll } from "./useHeaderOnScroll";
import { TStore } from "redux/store";
import { useSelector } from "react-redux";

const Header: React.FunctionComponent = () => {
  const { isScrolled } = useHeaderOnScroll(70);
  const isMenuOpen = useSelector(
    ({ menuReducer }: TStore) => menuReducer.isMenuOpen
  );
  return (
    <StyledHeader isMenuOpen={isMenuOpen} isScrolled={isScrolled}>
      <StyledLogo isMenuOpen={isMenuOpen} isScrolled={isScrolled}>
        <div className={"left"}>M</div>
        <div className={"right"}>D</div>
      </StyledLogo>
      <Nav isScrolled={isScrolled} />
      <HamburgerButton />
    </StyledHeader>
  );
};

export default Header;
