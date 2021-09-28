import { StyledNav } from "./Nav.styles";
import { useSelector, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { closeMenu } from "redux/menu";
import { TStore } from "redux/store";

const menuOptions = [
  { text: "Home", link: "#hero" },
  { text: "Projects", link: "#projects" },
  { text: "About", link: "#about" },
  { text: "Contact", link: "#contact" },
];

interface Props {
  isScrolled: boolean;
}

const Nav: React.FunctionComponent<Props> = ({ isScrolled }) => {
  const isMenuOpen = useSelector(
    ({ menuReducer }: TStore) => menuReducer.isMenuOpen
  );

  const dispatch: Dispatch = useDispatch();

  const handleCloseMenu = () => {
    dispatch(closeMenu());
  };
  return (
    <StyledNav isMenuOpen={isMenuOpen} isScrolled={isScrolled}>
      <ul onClick={handleCloseMenu}>
        {menuOptions.map((el) => (
          <li key={el.text}>
            <a href={el.link}>{el.text}</a>
          </li>
        ))}
      </ul>
    </StyledNav>
  );
};

export default Nav;
