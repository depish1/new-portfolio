import { StyledHeader, StyledLogo } from "./Header.styles";
import Nav from "components/Nav/Nav";
import HamburgerButton from "components/HamburgerButton/HamburgerButton";

const Header: React.FunctionComponent = () => {
  return (
    <StyledHeader>
      <StyledLogo>
        <div className={"left"}>M</div>
        <div className={"right"}>D</div>
      </StyledLogo>
      <Nav />
      <HamburgerButton />
    </StyledHeader>
  );
};

export default Header;
