import styles from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';
import ThemeSwitch from './ThemeSwitcher';

const Navbar = () => {
  return (
    <div className={styles['Container']}>
      <div className={styles['Title-Container']}>
        <NavLink className={styles['Title']} exact to="/">
          Warriors
        </NavLink>
      </div>
      <NavLink
        className={styles['Link']}
        activeClassName={styles['Active']}
        exact
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={styles['Link']}
        activeClassName={styles['Active']}
        to="/watch"
      >
        Videos
      </NavLink>
      <ThemeSwitch></ThemeSwitch>
    </div>
  );
};

export default Navbar;
