import { StyledNav } from "./Nav.styles";
import { useSelector, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { closeMenu } from "redux/menu";
import { TStore } from "redux/store";

const menuOptions = [
  { text: "Home", link: "#" },
  { text: "Projects", link: "#" },
  { text: "Skills", link: "#" },
  { text: "About", link: "#" },
  { text: "Contact", link: "#" },
];

const Nav: React.FunctionComponent = () => {
  const isMenuOpen = useSelector(
    ({ menuReducer }: TStore) => menuReducer.isMenuOpen
  );

  const dispatch: Dispatch = useDispatch();

  const handleCloseMenu = () => {
    dispatch(closeMenu());
  };
  return (
    <StyledNav isMenuOpen={isMenuOpen}>
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
