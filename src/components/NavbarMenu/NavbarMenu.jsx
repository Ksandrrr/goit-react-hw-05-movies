
import Style from './NavbarMenu.module.css';
import { NavLink } from 'react-router-dom';
const NavbarMenu = () => {
  return (
    <header className={Style.Header}>
      <nav>
        <NavLink to="/" className={Style.NavbarLink} href="">
          Home
        </NavLink>
        <NavLink to="/movies" className={Style.NavbarLink} href="">
          Movies
        </NavLink>
      </nav>
    </header>
  );
};
export default NavbarMenu;
