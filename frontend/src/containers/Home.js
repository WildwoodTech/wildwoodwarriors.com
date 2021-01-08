import styles from './Home.module.scss';
import { NavLink } from 'react-router-dom';

// Logo
import Logo from '../assets/images/wca_logos.png';

const Home = () => {
  return (
    <>
      <div className={styles['Header']}>
        <img className={styles['Header-Logo']} src={Logo} />
      </div>
      <div className={styles['Link-Container']}>
        <NavLink className={styles['Link']} to="/watch">
          1st Grade
        </NavLink>

        <NavLink className={styles['Link']} to="/watch">
          2nd Grade
        </NavLink>

        <NavLink className={styles['Link']} to="/watch">
          3rd Grade
        </NavLink>

        <NavLink className={styles['Link']} to="/watch">
          4th Grade
        </NavLink>

        <NavLink className={styles['Link']} to="/watch">
          5th Grade
        </NavLink>

        <NavLink className={styles['Link']} to="/watch">
          6th Grade
        </NavLink>

        <NavLink className={styles['Link']} to="/watch">
          7th Grade
        </NavLink>

        <NavLink className={styles['Link']} to="/watch">
          8th Grade
        </NavLink>
      </div>
    </>
  );
};

export default Home;
